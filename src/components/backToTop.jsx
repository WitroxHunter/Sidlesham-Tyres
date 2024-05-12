import ArrowUp from "../assets/icons/arrow_up.svg";
import { useState, useEffect } from "react";

export default function BackToTop(props) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Użyj smooth scroll
        });
    };

    return (
        <>
            <div
                className={scrolled ? "back-to-top-box scrolled" : "back-to-top-box"}
                onClick={handleClick}
            >
                <img src={ArrowUp} />
            </div>
        </>
    )
}