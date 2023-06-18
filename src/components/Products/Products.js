import React from 'react';
import { useState } from 'react';
import '../AboutUs/AboutUs.css'
import '../Products/Products.css'
import p1 from '../../images/1P.jpeg'
const Products = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            title: "NAWIEWNIKI SZCZELINOWE",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 10.99,
            imageUrl: "https://source.unsplash.com/random/800x800?sig=3",
            forward: "/kontakt",
        },
        {
            id: 2,
            title: "Item 2",
            description: "Sed ut leo ut justo commodo fermentum eu eget nisl.",
            price: 15.99,
            imageUrl: "https://source.unsplash.com/random/800x800?sig=4",
            forward: "/kontakt",
        },
        {
            id: 3,
            title: "Item 3",
            description: "Nunc volutpat, lorem nec mollis rutrum, quam odio tincidunt orci.",
            price: 20.99,
            imageUrl: "https://source.unsplash.com/random/800x800?sig=5",
            forward: "/kontakt",
        },
        {
            id: 4,
            title: "Item 4",
            description: "Duis imperdiet consectetur felis, eget pellentesque augue tristique a.",
            price: 25.99,
            imageUrl: "https://source.unsplash.com/random/800x800?sig=6",
            forward: "/kontakt",
        },
        {
            id: 5,
            title: "Item 5",
            description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
            price: 30.99,
            imageUrl: "https://source.unsplash.com/random/800x800?sig=7",
            forward: "/kontakt",
        },
        {
            id: 6,
            title: "Item 6",
            description: "Phasellus euismod magna et erat dignissim vehicula.",
            price: 35.99,
            imageUrl: "https://source.unsplash.com/random/800x800?sig=8",
            forward: "/kontakt",
        }
    ]);

    return (
        <div className="flex flex-col items-center galleryflex2">
            <h1 className="text-4xl font-bold text-gray-800 mt-10 mb-6">Shop</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                {items.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            className="h-64 w-full object-cover object-center"
                            src={item.imageUrl}
                            alt="Gallery item"
                        />
                        <div className="p-4">
                            <h3 className="text-gray-800 font-bold text-xl mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-base">{item.description}</p>
                            <p className="text-gray-800 font-bold text-xl mt-2">{item.price}piniendzy</p>
                            <a href={item.forward}>
                            <button className="bg-gray-200 text-black font-bold px-6 py-3 mt-6 rounded-lg hover:bg-gray-400"
                            >
                                Dowiedz się wiecej

                       </button >
                       </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
