
import { SyntheticEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {

    interface EmailjsResult {
        text: string;
    }

    interface EmailjsError {
        text: string;
    }


    const [formValid, setFormValid] = useState(false)
    const [firstNameValid, setFirstNameValid] = useState('')
    const [lastNameValid, setLastNameValid] = useState('')
    const [emailValid, setEmailValid] = useState('')
    const [phoneValid, setPhoneValid] = useState('')
    const stringRegex = /^[a-zA-Z-]+$/; //Regex champs nom & prénom
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //Regex email
    const phoneRegex = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/; //Regex phone number

    const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: SyntheticEvent) => {
        e.preventDefault();

        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        if (formRef.current && emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
            emailjs.sendForm(emailjsServiceId, emailjsTemplateId, formRef.current, emailjsPublicKey)
                .then((result: EmailjsResult) => {
                    console.log(result.text);
                })
                .catch((error: EmailjsError) => {
                    console.log(error.text);
                });
        }
    };

    const validate = async (formData: FormData) => {
        let isValid = true;
        const firstName = formData.get("firstName") as string
        const lastName = formData.get("lastName") as string
        const phone = formData.get("phone") as string
        const email = formData.get("email") as string

        if (!firstName.match(stringRegex)) {
            setFirstNameValid("Merci de préciser votre prénom sans chiffre ou caractère spéciaux")
            isValid = false;
        }
        if (!lastName.match(stringRegex)) {
            setLastNameValid("Merci de préciser votre nom sans chiffre ou caractère spéciaux")
            isValid = false;
        }
        if (!email.match(emailRegex)) {
            setEmailValid("Merci de préciser un email valide")
            isValid = false;
        }
        if (!phone.match(phoneRegex)) {
            setPhoneValid("Merci de préciser un numero de téléphone valide")
            isValid = false;
        }
        return isValid

    }
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setFirstNameValid('')
        setLastNameValid('')
        setEmailValid('')
        setPhoneValid('')
        if (formRef.current) {

            const formData = new FormData(formRef.current)
            const isValid = await validate(formData)
            console.log(isValid);

            if (isValid) {
                sendEmail(e)
                setFormValid(true)
            }
        }
        // form.reset()
    }

    return (
        <div className=' bg-white mx-5 rounded-3xl drop-shadow-2xl'>
            <h2 className='contact-title my-5 text-2xl font-bold'>Contact</h2>
            <p className="my-4" >Vous pouvez me contacter au :</p>
            <a className='underline text-blueLink text-2xl font-bold' href='tel:0632138174'>06.32.13.81.74</a>
            <p className="my-4">Ou bien m'envoyer un mail via le formulaire de contact ci-dessous : </p>
            <div className='form-container rounded-3xl '>
                {!formValid ? (
                    <form ref={formRef} className=" shadow-inner rounded-b-3xl drop-shadow" onSubmit={(e) => handleSubmit(e)} id="contact-form">
                        <div className='flex w-full justify-between px-8 my-8 '>
                            <div className="w-1/2 text-start flex flex-col">
                                <label htmlFor="lastName">Nom</label>
                                <input className="border border-blueSite pl-1.5 rounded" name="lastName" type="text" id="lastName" />
                                {lastNameValid && <div id="lastNameErrorMSg" className="text-xs">{lastNameValid}</div>}
                            </div>
                            <div className="w-1/2 flex flex-col">
                                <label className='text-start ml-5' htmlFor="firstName">Prénom</label>
                                <input className="border border-blueSite pl-1.5 rounded ml-5" name="firstName" type="text" id="firstName" />
                                {firstNameValid && <div id="firstNameErrorMSg" className="ml-5 text-xs">{firstNameValid}</div>}
                            </div>
                        </div>
                        <div className='flex w-full justify-between px-8 my-8 '>
                            <div className="w-1/2 text-start flex flex-col">
                                <label htmlFor="phone">Téléphone</label>
                                <input className="pl-1.5 border border-blueSite rounded" name="phone" type="tel" id="phone" />
                                {phoneValid && <div id="emailErrorMSg" className="text-xs">{phoneValid}</div>}
                            </div>
                            <div className="w-1/2 text-right flex flex-col">
                                <label className='text-start ml-5' htmlFor="email">email</label>
                                <input className="pl-1.5 border border-blueSite rounded ml-5" name="email" type="email" id="email" ></input>
                                {emailValid && <div id="emailErrorMSg" className="ml-5 text-center text-xs">{emailValid}</div>}
                            </div>
                        </div>
                        <div className="w-full flex flex-col px-8">
                            <label className="mb-3" htmlFor="Message">Message</label>
                            <textarea className='border border-blueSite pl-1.5 h-28' id="Message" name="Message" />
                        </div>

                        <button className="hover:text-white my-5 bg-blueSite px-16 py-0.5 rounded-xl">Envoyer</button>
                    </form>
                ) : (<div className='mb-5'>
                    <p>Le formulaire a bien été envoyé</p>
                </div>
                )}
            </div>
        </div >
    );
};

export default ContactForm;