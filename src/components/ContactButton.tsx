import { FaGithub, FaLinkedin } from 'react-icons/fa'
import MyCv from './MyCv';


const ContactButton = () => {
    return (
        <div className='w-full flex justify-evenly'>
            <button className='px-5 py-1 '>
                <a className="w-1/3 bg-black justify-evenly flex items-center flex-row dark:hover:text-white hover:text-blueSite text-white shadow-3xl dark:bg-blueSite text-2xl dark:text-black rounded-full w-60  " href={'https://github.com/Belin27000?tab=repositories'} rel="noreferrer" target="_blank" aria-label="go to Conseil and tech github profil"><FaGithub />
                    Github
                </a>
            </button>
            <MyCv />
            <button className='px-5 py-1'>
                <a className="w-1/3 bg-black justify-evenly items-center flex flex-row dark:hover:text-white hover:text-blueSite text-white shadow-3xl dark:bg-blueSite text-2xl dark:text-black rounded-full w-60  " href={'https://www.linkedin.com/in/yannlecerf/'} rel="noreferrer" target="_blank" aria-label="go to Conseil and tech linkedin profil"><FaLinkedin />
                    Linkedin
                </a>
            </button>

        </div>
    );
};

export default ContactButton;