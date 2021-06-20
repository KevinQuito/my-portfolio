import React from "react";
import Typed from "react-typed";    // for changing words

export const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>web developer</h1>
                <Typed
                    className="typed-text"
                    strings={["Diamond Rank League of Legends", "CEO of Google and Facebook", "Father of 4", "#1 Fortnite Player", "Weeb"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header;