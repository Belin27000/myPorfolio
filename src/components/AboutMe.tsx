import Button from "./Button/Button";

const AboutMe = () => {

    return (
        <div className='AboutMe text-black dark:text-white my-5'>
            <h3 className="text-3xl mb-5">En savoir plus</h3>
            <p className="text-xl p-10">J’ai su saisir les opportunités ce qui m’a permis de pouvoir travailler sur des projets divers et variés et d’améliorer ma maîtrise des différentes compétences.  J’ai donc créé Conseils and Tech afin de pouvoir mettre à contribution mes connaissances techniques auprès de clients indépendants et professionnels : JavaScript, React.js, Figma, CSS, Jest.<br />Curieux et désireux d’apprendre je me suis naturellement formé à Node.js, Express et MongoDB afin de pouvoir devenir Full Stack.</p>
            <Button />
        </div>
    );
};

export default AboutMe;