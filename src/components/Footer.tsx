import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className='dark:text-white text-black flex flex-col items-center pb-2'>
            <div className='flex p-2 first:pr-1 w-16 justify-between'>
                <a className="text-black dark:text-white flex justify-around items-center" href={'https://github.com/Belin27000?tab=repositories'} rel="noreferrer" target="_blank" aria-label="go to Conseil and tech github profil"><FaGithub /></a>
                <a className="text-black dark:text-white flex justify-around items-center" href={'https://www.linkedin.com/in/yannlecerf/'} rel="noreferrer" target="_blank" aria-label="go to Conseil and tech linkedin profil">                <FaLinkedin />
                </a>
            </div>
            <p className='text-xs'>© {year} Y.LECERF</p>
        </footer>
    );
};

export default Footer;