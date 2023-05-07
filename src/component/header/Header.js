import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <header className="header">
            <div className="logo-container">
                <img src="/logo.png" alt="Logo" className="logo" />
            </div>
            <div className="bottom-row">
                <nav className="navigation">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/create_customer">Create customer</a></li>
                        <li><a href="/create_item">Create item</a></li>
                        <li><a href="/items">Items</a></li>
                    </ul>
                </nav>
                { /*
                <div className="auth-buttons">
                    <button className="login-btn">Login</button>
                    <button className="signup-btn">Sign up</button>
                </div>
                */ }
            </div>
        </header>
    );
};

export default Header;
