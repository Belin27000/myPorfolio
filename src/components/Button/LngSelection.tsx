import { useEffect, useState } from "react";
import i18n from "../../i18next";
import { FR, GB } from "country-flag-icons/react/3x2";

const LngSelection = () => {

    const [currentLanguage, setCurrentLanguage] = useState("");



    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setCurrentLanguage(lng);
    };

    useEffect(() => {
        const currentLng = i18n.language
        setCurrentLanguage(currentLng)
    }, [])
    console.log(currentLanguage);


    return (
        <div className="top-2 w-24 flex justify-center">
            <button
                onClick={() => changeLanguage("fr")}
                className={`flex h-12 w-24 mx-2  ${currentLanguage.startsWith("fr")
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-100"
                    }`}
            >
                <FR />
            </button>
            <button
                onClick={() => changeLanguage("en")}
                className={`flex h-12 w-24 mx-2 ${currentLanguage === "en"
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-100"
                    }`}
            >
                <GB />
            </button>
        </div>
    );
};

export default LngSelection;
