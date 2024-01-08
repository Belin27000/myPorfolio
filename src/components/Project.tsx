import { FaGlobe, FaGithub } from 'react-icons/fa'
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import i18n from '../i18next';

type ProjectDetail = {
    id: number,
    project: string,
    description: string,
    more: string,
    stack: string[],
    year: number,
    website: string,
    github: string,
    logo?: string
};

const Project = () => {
    const [loading, setLoading] = useState(true)
    const [projectName, setProjectName] = useState([] as ProjectDetail[]);
    // const [projects, setProjects] = useState([]);
    const [projectCardText, setProjectCardText] = useState('')
    const [techUsed, setTechUsed] = useState('')
    const [aboutCompany, setAboutCompany] = useState('')



    const { t } = useTranslation();

    const fetchData = async () => {
        try {
            // Simuler un délai de chargement (peut être remplacé par une logique réelle)
            await new Promise(resolve => setTimeout(resolve, 1000));

            const projects = t('PROJECT_LIST', { returnObjects: true });
            const projectList = projects[0].ProjectDetails;
            setProjectCardText(projects[0]?.projectCardText)
            setTechUsed(projects[0]?.whichTech)
            setAboutCompany(projects[0]?.moreAboutCompany)
            setProjectName(projectList);
            // setProjects(projects)
            setLoading(false);
        } catch (error) {
            console.error("Une erreur s'est produite lors du chargement des données :", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData()

    }, [i18n.language])


    if (loading) return (
        <h3>Chargement des données en cours...</h3>
    )

    console.log(projectName);


    // const getImagePAth = (item: string) => {
    //     console.log(item);

    //     try {
    //         require(`./assets/icons/${item}.png`)
    //         return (`./assets/icons/${item}.png`)
    //     } catch (error) {
    //         return (`src/assets/icons/${item}.png`)
    //     }
    // }


    return (
        <section className="flex flex-wrap justify-center">
            <h1 className='dark:text-white text-5xl my-5'>{projectCardText}</h1>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5'>

                {
                    projectName.map((project, index) => {
                        const gotWebsite = project.website

                        return (
                            <div className="[perspective:1000px] group" key={index}>
                                <article key={index} className="relative transition-all duration-700 [transform-style:preserve-3d] rotateY(180deg) group-hover:[transform:rotateY(180deg)] text-black h-full bg-white flex flex-col rounded-3xl items-center shadow-3xl justify-around" >
                                    <h2 className="m-5 font-bold">{project.project}</h2>
                                    <div className="w-full bg-white flex h-36 justify-center">
                                        <img width="100" height="100" src={`.${project.logo}`} alt={"logo projet " + `${project}`} className="w-1/2 bg-white rounded object-contain " />
                                    </div>
                                    <div>
                                        <p className="text-xs m-5">{project.description}</p>
                                        <p className="text-xs font-bold m-5">{techUsed}</p>
                                        <div className=" flex justify-center flex-wrap w-auto h-auto">

                                            {
                                                project.stack.map((item, index) => {
                                                    // const imagePath = getImagePAth(item)
                                                    return (
                                                        <img width="100" height="100"
                                                            src={`./assets/icons/${item}.png`}
                                                            className="object-cover w-6 h-6 mx-2 mb-5 md:w-8 md:h-8" key={index} alt={`${item} icon`} />
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="bg-white h-full w-full absolute rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-evenly items-center">
                                        <h2 className="font-bold">{project.project}</h2>

                                        <h3 className='font-bold text-xl' >{aboutCompany}</h3>
                                        <p className='px-5 text-xs'>{project.more}</p>
                                        {gotWebsite ? (
                                            <a className="text-black flex justify-evenly items-center w-1/2 md:w-1/4 lg:w-1/2" href={project.website} rel="noreferrer" target="_blank"><FaGlobe />Site web</a>
                                        ) : ''
                                        }
                                        <a className="text-black flex justify-evenly items-center w-1/2 md:w-1/3 lg:w-1/2" href={project.github} rel="noreferrer" target="_blank"><FaGithub />github du projet</a>
                                    </div>

                                </article>
                            </div >
                        )
                    })
                }
            </div>

        </section >
    );
};

export default Project;






// const projectCardText = projects[0]?.projectCardText || '';

// const techUsed = projects[0]?.whichTech || '';
// const aboutCompany = projects[0]?.moreAboutCompany || '';