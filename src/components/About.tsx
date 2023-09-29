
type DevStack = {
    HTML5: string,
    JS: string,
    React: string,
    TS: string,
    Redux: string,
    Node: string,
    Express: string,
    Mongo: string,
    EsLint: string,
    Jest: string,
    CSS: string,
    Tailwind: string,
    Sass: string,
    Bootstrap: string,
    Figma: string,
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
        <div className="text-black dark:text-white mx-4" >
            <h1 className="font-bold mb-5 dark:text-sky-500 text-black">{description}</h1>
            <p className="text-sm">Ma capacité à saisir les opportunités m’ont permis de pouvoir travailler sur des projets divers et variés et d’améliorer ma maîtrise des différentes compétences. J’ai donc créé Conseils and Tech afin de pouvoir mettre à contribution mes connaissances techniques auprès de clients indépendants et professionnels : JavaScript, React.js, Figma, CSS, Jest. Curieux et désireux d’apprendre je me suis naturellement formé à Node.js, Express et MongoDB afin de pouvoir devenir Full Stack."</p>
        </div >
    );
};

export default About;