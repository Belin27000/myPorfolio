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
                <FaArrowUp className='bg-white w-4 h-4 p-1 flex items-center justify-center text-black fixed bottom-10  ' onClick={goToTop} />
            )}
        </div>
    );
};

export default ScrollToTop;