import { useTranslation } from "react-i18next";

const Button = () => {
    const { t } = useTranslation();

    const devStack = t('DEV');
    const contactButton = devStack[0].contact[0].contactButton
    console.log(contactButton);

    const goToContactForm = () => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <button onClick={goToContactForm} className="bg-black dark:hover:text-white hover:text-blueSite text-white shadow-3xl dark:bg-blueSite text-2xl dark:text-black px-5 py-1 rounded-full w-60  " >
            {contactButton}
        </button>
    );
};

export default Button;