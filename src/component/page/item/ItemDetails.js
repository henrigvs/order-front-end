import React, {useEffect, useState} from 'react';
import './ItemDetails.css';
import {useParams} from "react-router-dom";
import {fetchItemFromBackEnd} from "../../../service/item/ItemService";

const ItemDetails = () => {
    const {itemId} = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        async function fetchItem() {
            const fetchedItem = await fetchItemFromBackEnd(itemId);
            setItem(fetchedItem.data);
        }

        const fetchedItem = fetchItem();
        console.log(fetchedItem);
    }, [itemId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const quantity = formData.get('quantity');

        // handle add to basket
        return quantity;
    }

    return (
        <div className="item-details-container">
            <h2>Item Details</h2>
            {item ? (
                <ul>
                    <li>Item ID: {item.id}</li>
                    <li>Name: {item.name}</li>
                    <li>Description: {item.description}</li>
                    <li>Price: {item.price}</li>
                    <li>Amount in Stock: {item.amountOfStock}</li>
                </ul>
            ) : (
                <p>Loading item details...</p>
            )}
            <div className="quantity-container">
                <form className="quantity" onSubmit={handleSubmit}>
                    <label htmlFor="quantity">Quantity: </label>
                    <input type="number" id="quantity" name="quantity" required/>
                </form>
                <button type="submit" className="add-basket-btn">Add to basket</button>
            </div>
        </div>
    );
};

export default ItemDetails;
