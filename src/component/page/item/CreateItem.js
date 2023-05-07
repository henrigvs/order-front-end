import React, {useState} from 'react';
import './CreateItem.css';
import {sendItemToBackEnd} from "../../../service/item/ItemService";

const CreateItem = () => {
    const [descriptionLength, setDescriptionLength] = useState(0);
    const maxLength = 255;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const description = formData.get('description');
        const price = formData.get('price');
        const stock = formData.get('stock');

        try {
            const response = await sendItemToBackEnd(name, description, price, stock);
            console.log('Item data:', {
                id: response.data.id,
                name: response.data.name,
                description: response.data.description,
                price: response.data.price,
                stock: response.data.stock
            });
            window.location.href = `/item_details/${response.data.id}`;
        } catch (error) {
            console.error('Error while creating item:', error);
        }
    };

    const handleCancel = () => {
        window.location.href = '/';
    };

    const handleDescriptionChange = (event) => {
        setDescriptionLength(event.target.value.length);
    };

    return (
        <div className="create-item-container">
            <h2>Create Item</h2>
            <form className="create-item-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required/>

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" maxLength={maxLength} onChange={handleDescriptionChange}
                          required/>
                <div>{descriptionLength}/{maxLength}</div>

                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" step="0.01" required/>

                <label htmlFor="stock">Amount of Stock:</label>
                <input type="number" id="stock" name="stock" required/>

                <button type="submit" className="create-btn">Create</button>
                <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default CreateItem;
