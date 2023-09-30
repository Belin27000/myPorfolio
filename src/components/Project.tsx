import { log } from 'console';
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
    console.log(projectData[2].website);


    return (
        <section className="grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                projectData.map((project, index) => {
                    const gotWebsite = project.website

                    return (
                        <div className="[perspective:1000px] group">
                            <article key={index} className="relative transition-all duration-700 [transform-style:preserve-3d] rotateY(180deg) group-hover:[transform:rotateY(180deg)] text-black h-auto bg-white flex flex-col rounded-3xl items-center shadow-3xl justify-around" >
                                <h2 className="m-5 font-bold">{project.project}</h2>
                                <div className="w-full bg-white flex justify-center">
                                    <img src={project.logo} alt={"logo projet " + `${project.project}`} className="w-1/2 bg-white rounded " />
                                </div>
                                <div>
                                    <p className="text-xs m-5">{project.description}</p>
                                    <div className="flex flex-wrap justify-center pb-5 ">

                                        {
                                            project.stack.map((item, index) => {
                                                return (
                                                    <img className="h-8 px-1" key={index} src={`src/assets/icons/${item}.png`} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="bg-white h-full w-full absolute rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-evenly items-center">
                                    <h3 className='font-bold text-2xl' >En savoir plus sur l'entreprise</h3>
                                    <p className='px-5'>{project.more}</p>
                                    {gotWebsite ? (
                                        <a className="text-black flex justify-around items-center w-1/6" href={project.website} rel="noreferrer" target="_blank"><FaGlobe />Site web</a>
                                    ) : ''
                                    }
                                    <a className="text-black flex justify-around items-center w-1/4" href={project.website} rel="noreferrer" target="_blank"><FaGithub />github du projet</a>
                                </div>

                            </article>
                        </div >
                    )
                })
            }

        </section >
    );
};

export default Project;