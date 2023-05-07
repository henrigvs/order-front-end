import {useEffect, useState} from "react";
import {fetchAllItemsFromBackEnd} from "../../../service/item/ItemService";
import './ListItems.css';

const ListItems = () => {
    const [items, setItems] = useState([]);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        async function fetchItems(){
            const fetchedItems = await fetchAllItemsFromBackEnd();
            setItems(fetchedItems.data);
        }
        fetchItems();
    }, []);

    const filteredItems =
        items
            .filter((item) => item.name.toLowerCase().includes(filterText.toLowerCase()))
            .sort((a, b) => a.name.localeCompare(b.name));

    const handleItemClick = (item) => {
        window.location.href = `/item_details/${item.id}`;
    }

    const stockLevel = (stockUrgency) => {
        const levelIcons = {
            'STOCK_HIGH': { level: 'High', icon: '/items/stock_level_indicators/warning-icon-green.png' },
            'STOCK_MEDIUM': { level: 'Medium', icon: '/items/stock_level_indicators/warning-icon-orange.png' },
            'STOCK_LOW': { level: 'Low', icon: '/items/stock_level_indicators/warning-icon-red.png' },
        };
        return levelIcons[stockUrgency] || { level: 'Unknown', icon: '' };
    };

    return (
        <div className="list-items-container">
            <h2>List of Items</h2>
            <div className="filter-container">
                <div className="filter">
                    <input
                        type="text"
                        placeholder="Filter items by name"
                        value={filterText}
                        onChange={(event) => setFilterText(event.target.value)}
                    />
                </div>
            </div>
            <div className="item-grid">
                {filteredItems.map((item) => {
                    const { level, icon } = stockLevel(item.stockUrgency);
                    return (
                        <div
                            key={item.id}
                            className="item-card"
                            onClick={() => handleItemClick(item)}
                        >
                            <h3>{item.name}</h3>
                            <img className="item-image" src="/items/item_image_place_holder.png" alt={item.name} />
                            <div className="price-stock-info">
                                <p className="price">Price: {item.price} EUR</p>
                                <p className="stock">
                                    {level}{' '}
                                    <img className="stock-level-icon" src={icon} alt={`${level} stock level`} />
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default ListItems;