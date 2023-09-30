import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className='dark:text-white text-black flex flex-col items-center pb-2'>
            <div className='flex p-2 first:pr-1'>
                <FaGithub />
                <FaLinkedin />
            </div>
            <p className='text-xs'>© {year} Y.LECERF</p>
        </footer>
    );
};

export default Footer;