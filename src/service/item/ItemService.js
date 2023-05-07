import axios from 'axios';

const API_BASE_URL = 'http://localhost:9000';

export function sendItemToBackEnd(name, description, price, amountOfStock) {

    const item =
        {
            name: name,
            description: description,
            price: price,
            amountOfStock: amountOfStock
        };

    return axios.post(`${API_BASE_URL}/items`, item);
}

export function fetchItemFromBackEnd(itemId){
    return axios.get(`${API_BASE_URL}/items/${itemId}`);
}

export function fetchAllItemsFromBackEnd(){
    return axios.get(`${API_BASE_URL}/items`);
}