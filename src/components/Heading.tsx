import { useState, useEffect } from "react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs"
import logoYann from '../assets/images/Logo_Yann.png'
import eventWhite from '../assets/images/Event/octoberRose.png'
import eventBlack from '../assets/images/Event/octoberRoseBlack.png'




const Heading = () => {
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

    const event = theme === "dark" ? eventBlack : eventWhite;

    const handleThemeSwitch = () => {
        setIsToggled(!isToggled);

        setTheme(theme === "dark" ? "light" : "dark")
    }
    return (
        <header className="bg-white dark:bg-black text-white items-center flex justify-between p-2 ">
            {/* <h1 className="text-black dark:text-white flex items-center">{title}</h1> */}
            <div className=" object-contain flex justify-center w-1/3">
                {/* <img width="100" height="100" src={logoCaT} alt={"logo conseil and tech"} className="invert  dark:invert-0  w-1/2 bg-white rounded " /> */}
                <p className="text-black dark:text-white text-xl md:text-4xl">
                    Conseil<br />&<br />Tech
                </p>
            </div>
            <div>
                <a href={'https://www.ligue-cancer.net/octobre-rose'} rel="noreferrer" target="_blank" aria-label="go to ligue contre le cancer">
                    <img width="100" height="100" src={event} alt={"October Rose logo"} />
                </a>
            </div>
            <div className=" object-contain flex w-1/3 justify-center">
                <img width="100" height="100" src={logoYann} alt={"logo conseil and tech"} className="invert-0 dark:invert  w-1/2 bg-white rounded " />
            </div>
            <div>
                <a href={'https://www.ligue-cancer.net/octobre-rose'} rel="noreferrer" target="_blank" aria-label="go to ligue contre le cancer">
                    <img width="100" height="100" src={event} alt={"October Rose logo"} />
                </a>
            </div>
            <div className="w-1/3">
                <button className='h-8 w-8 bg-black dark:bg-sky-500 dark:text-black px-2 rounded-3xl' onClick={handleThemeSwitch} aria-label="dark mode">
                    {theme === "dark" ? <BsSunFill /> : <BsFillMoonFill />}</button>
            </div>
        </header>
    );
};

export default Heading;

