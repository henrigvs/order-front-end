import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./component/header/Header";
import CreateCustomer from "./component/page/customer/CreateCustomer";
import CreateItem from "./component/page/item/CreateItem";
import Home from "./component/home/Home";
import ItemDetails from "./component/page/item/ItemDetails";
import ListItems from "./component/page/item/ListItems";

// You can create components for Home, Link2, and Link3, and import them here.

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/create_customer" element={<CreateCustomer />} />
                        <Route path="/create_item" element={<CreateItem />} />
                        <Route path="/item_details/:itemId" element={<ItemDetails />} />
                        <Route path="/items" element={<ListItems />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
