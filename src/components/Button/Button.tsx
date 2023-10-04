const Button = () => {
    const goToContactForm = () => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <button onClick={goToContactForm} className="bg-black dark:hover:text-white hover:text-blueSite text-black shadow-3xl dark:bg-blueSite text-2xl text-black px-5 py-1 rounded-full w-60  " >
            Prendre contact
        </button>
    );
};

export default Button;