import { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";


const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        })
    }, [])

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    return (
        <div >
            {showTopBtn && (
                <FaArrowUp className='dark:bg-blueSite dark:text-black bg-black w-8 h-8 p-1 flex items-center justify-center text-white fixed bottom-10 cursor-pointer rounded-full m-1 p-2 right-5 ' onClick={goToTop} />
            )}
        </div>
    );
};

export default ScrollToTop;