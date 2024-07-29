import React, { useEffect, useState } from "react";

const DarkThemeButton: React.FC = () => {
    const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "light");

    useEffect(() => {
        // Set initial theme based on user's preference
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
    }, []);

    useEffect(() => {
        // Update theme in localStorage and HTML attribute
        const htmlElement = document.documentElement;
        const bodyElement = document.body;
        const lightIcon = document.querySelector(".light-icon") as HTMLElement;
        const darkIcon = document.querySelector(".dark-icon") as HTMLElement;

        htmlElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);

        // Update icon classes
        if (lightIcon && darkIcon) {
            lightIcon.classList.toggle("active", theme === "light");
            darkIcon.classList.toggle("active", theme === "dark");
        }

        // Update body class
        bodyElement.classList.remove("light-mode", "dark-mode");
        bodyElement.classList.add(theme === "light" ? "light-mode" : "dark-mode");
    }, [theme]);

    const toggleTheme = (): void => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="dark-light-theme-btn" id="toggleBtn" onClick={toggleTheme}>
            <span className="light-icon">
                <i className="fa-light fa-sun-bright" />
            </span>
            <span className="dark-icon">
                <i className="fa-solid fa-moon" />
            </span>
        </div>
    );
};

export default DarkThemeButton;
