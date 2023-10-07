import { useTranslation } from "react-i18next";
import Button from "./Button/Button";
const About = () => {

    const { t } = useTranslation();

    const devStack = t('DEV');

    const aboutMe = devStack[0].aboutMe;
    const aboutMeP1 = devStack[0].aboutMeP1;
    const aboutMeP2 = devStack[0].aboutMeP2;
    const why = devStack[0].why;
    const whyP1 = devStack[0].whyP1;
    const whyP2 = devStack[0].whyP2;


    return (
        <section className="text-black dark:text-white mx-4" >
            <h1 className="font-bold text-3xl m-5 dark:text-sky-500 text-black">{aboutMe}</h1>
            <p className="text-xl mb-5">
                {aboutMeP1}
            </p>
            <p className="text-xl mb-5">
                {aboutMeP2}
            </p>
            <Button />
            <h2 className="text-3xl m-5">{why}</h2>
            <p className="text-xl m-5">{whyP1}</p>
            <p className="text-xl m-5">{whyP2}</p>
        </section >
    );
};

export default About;

// type DevStack = {
//     html: string,
//     javascript: string,
//     react: string,
//     typescript: string,
//     redux: string,
//     nodejs: string,
//     express: string,
//     mongodb: string,
//     esLint: string,
//     jest: string,
//     css: string,
//     tailwind: string,
//     sass: string,
//     bootstrap: string,
//     figma: string,
// };

// type Dev = {
//     aboutMe: string;
//     devStack: DevStack[];
// };
// type AboutProps = {
//     data: Dev[];
// };