import React from 'react';
import './Header.css';

const Header = () => {

    const goToSignUp = () => {
        window.location.href = '/signup';
    };

    return (
        <header className="header">
            <div className="logo-container">
                <img src="/logo.png" alt="Logo" className="logo" />
            </div>
            <div className="bottom-row">
                <nav className="navigation">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Link 2</a></li>
                        <li><a href="/">Link 3</a></li>
                        <li><a href="/">Link 4</a></li>
                    </ul>
                </nav>
                <div className="auth-buttons">
                    <button className="login-btn">Login</button>
                    <button className="signup-btn" onClick={goToSignUp}>Sign up</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
