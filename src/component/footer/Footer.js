import React from "react";

function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer">
            <p>
                &copy;
                {currentYear}
                {' '}
                Örder
            </p>
        </footer>
    )
}

export default Footer;