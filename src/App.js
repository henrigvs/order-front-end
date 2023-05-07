import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./component/header/Header";
import SignUp from "./component/page/user/SignUp";
import Home from "./component/page/home/Home";

// You can create components for Home, Link2, and Link3, and import them here.

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
