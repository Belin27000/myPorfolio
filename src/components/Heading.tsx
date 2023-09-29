import { useState, useEffect } from "react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs"

type HeadingProps = {
    title?: string,
}


const Heading = ({ title = "Incroyable" }: HeadingProps) => {
    const [isToggled, setIsToggled] = useState(false)
    const [theme, setTheme] = useState("")


    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme("dark")
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setIsToggled(!isToggled);

        setTheme(theme === "dark" ? "light" : "dark")
    }
    return (
        <header className="bg-white dark:bg-black text-white w-full flex justify-between p-2">
            <h1 className="text-black dark:text-white">{title}</h1>
            <button className='bg-black dark:bg-sky-500 dark:text-black px-2 rounded-3xl' onClick={handleThemeSwitch}>
                {theme === "dark" ? <BsSunFill /> : <BsFillMoonFill />}</button>
        </header>
    );
};

export default Heading;