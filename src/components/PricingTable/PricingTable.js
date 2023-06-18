import React, { useState } from "react";

const PricingTable = () => {
  // Tworzenie tablicy z danymi cennika
  const pricingData = [
    { plan: 'Basic', price: '$9.99/month', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { plan: 'Standard', price: '$19.99/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
    { plan: 'Premium', price: '$29.99/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] },
  ];

  return (
    <div>
      <h1>Pricing</h1>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Price</th>
            <th>Featuressdf</th>
          </tr>
        </thead>
        <tbody>
          {pricingData.map((item, index) => (
            <tr key={index}>
              <td>{item.plan}</td>
              <td>{item.price}</td>
              <td>
                <ul>
                  {item.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
