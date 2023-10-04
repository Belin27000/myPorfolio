import { FaGlobe, FaGithub } from 'react-icons/fa'
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

type ProjectProps = {
    projectData: ProjectDetail[];
};
const Project = ({ projectData }: ProjectProps) => {


    return (
        <section className="flex flex-wrap justify-center">
            <h1 className='dark:text-white text-5xl my-5'>Les projets</h1>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5'>

                {
                    projectData.map((project, index) => {
                        const gotWebsite = project.website

                        return (
                            <div className="[perspective:1000px] group" key={index}>
                                <article key={index} className="relative transition-all duration-700 [transform-style:preserve-3d] rotateY(180deg) group-hover:[transform:rotateY(180deg)] text-black h-full bg-white flex flex-col rounded-3xl items-center shadow-3xl justify-around" >
                                    <h2 className="m-5 font-bold">{project.project}</h2>
                                    <div className="w-full bg-white flex h-36 justify-center">
                                        <img width="100" height="100" src={project.logo} alt={"logo projet " + `${project.project}`} className="w-1/2 bg-white rounded object-contain " />
                                    </div>
                                    <div>
                                        <p className="text-xs m-5">{project.description}</p>
                                        <p className="text-xs font-bold m-5">Technologies utilisées pour ce projet</p>
                                        <div className=" flex justify-center flex-wrap w-auto h-auto">

                                            {
                                                project.stack.map((item, index) => {
                                                    return (
                                                        <img width="100" height="100" className="object-cover w-6 h-6 mx-2 mb-5 md:w-8 md:h-8" key={index} src={`./assets/icons/${item}.png`} alt={`${item} icon`} />
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="bg-white h-full w-full absolute rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-evenly items-center">
                                        <h2 className="font-bold">{project.project}</h2>

                                        <h3 className='font-bold text-xl' >En savoir plus sur l'entreprise</h3>
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