import React, { useState } from "react";
import isDarkMode from './App'

function Header({onDarkModeClick}) {
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>{isDarkMode ? "Dark" : "Light"} Mode</button>
        </header>
    )
}

export default Header