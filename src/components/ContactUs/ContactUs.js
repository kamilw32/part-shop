import React, { useState } from "react";
import emailjs from '@emailjs/browser';
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'hubertService',
        'templateTest',
        e.target,
        'r84unY-uLBInX4Cwy'
      );
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError("Ups.. Wychodzi na to że mamy problem z wysaniem Twojej wiadomści, spróbuj ponownie później lub wyślij nam maila na adres biuro@wisserwis.com");
    } finally {
      setIsSubmitting(false);
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Skontaktuj się z nami: </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Imię:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Treść
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-1/2"
            id="message"
            name="message"
            rows="10"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`${isSubmitting ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'
              } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Wysyłanie...' : 'Wyślij'}
          </button>
          {submitSuccess && (
            <span className="text-green-500 font-bold">Wysłano!</span>
          )}
          {submitError && (
            <span className="text-red-500 font-bold">{submitError}</span>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
