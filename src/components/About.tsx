import Button from "./Button/Button";

type DevStack = {
    html: string,
    javascript: string,
    react: string,
    typescript: string,
    redux: string,
    nodejs: string,
    express: string,
    mongodb: string,
    esLint: string,
    jest: string,
    css: string,
    tailwind: string,
    sass: string,
    bootstrap: string,
    figma: string,
};

type Dev = {
    aboutMe: string;
    devStack: DevStack[];
};
type AboutProps = {
    data: Dev[];
};
const About = ({ data }: AboutProps) => {

    const description = data[0].aboutMe

    return (
        <section className="text-black dark:text-white mx-4" >
            <h1 className="font-bold text-3xl m-5 dark:text-sky-500 text-black">{description}</h1>
            <p className="text-xl mb-5">
                Réaliser un site web ou une application est simple, les réaliser de manière optimisé, performant et orienté expérience utilisateur demande une analyse et un travail plus approfondi.
            </p>
            <p className="text-xl mb-5">
                En tant que développeur consciencieux et appliqué, ces points importants et vitaux pour vous sont au cœur de mes préoccupations.
            </p>
            <Button />
            <h2 className="text-3xl m-5">Pourquoi un développeur ?</h2>
            <p className="text-xl m-5">Notre metier n'est pas uniqeuement d’imaginer et de créer de jolis concepts web qui vous ressemblent, c’est aussi de faire en sorte que votre produit en ligne soit le plus efficace et le plus intuitif possible.</p>
            <p className="text-xl m-5">Votre produit doit vous convenir ! Votre produit doit vous différencier ! C’est en cela que j’interviens </p>
        </section >
    );
};

export default About;