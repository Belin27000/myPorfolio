const Button = () => {
    const goToTop = () => {
        window.scrollTo({
            top: 2200,
            behavior: "smooth",
        })
    }

    return (
        <button onClick={goToTop} className="bg-white hover:bg-black hover:text-white shadow-3xl dark:bg-blueSite text-2xl text-black px-5 py-1 rounded-full w-60  " >
            Prendre contact
        </button>
    );
};

export default Button;