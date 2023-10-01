
type DevStack = {
    HTML: string,
    Javascript: string,
    React: string,
    Typescript: string,
    Redux: string,
    Nodejs: string,
    Express: string,
    Mongodb: string,
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

type StackProps = {
    data: Dev[];
}
const DevStack = ({ data }: StackProps) => {
    const stacks = data[0].devStack[0]
    console.log(stacks);


    return (
        // <section className="w-auto h-auto flex flex-col bg-white py-5 m-5 rounded-3xl" >
        //     <h2 className="text-black text-3xl">Stack</h2>
        //     <div className="flex flex-wrap justify-center mt-5">

        //         {
        //             Object.keys(stacks).map((stack, index) => {
        //                 return (
        //                     <img className="pl-5 mb-5" width="100" height="100" key={index} src={`src/assets/icons/${stack}.png`} />
        //                 )
        //             })
        //         }
        //     </div>
        // </section>
        <div className="[perspective:1000px] group mx-5 my-8  ">
            <article className="relative transition-all duration-700 [transform-style:preserve-3d] rotateY(180deg) group-hover:[transform:rotateY(180deg)] text-black h-full bg-white flex flex-col rounded-3xl items-center shadow-3xl justify-around" >
                <h2 className="m-5 font-bold">Stack</h2>
                <div className="bg-white flex flex-wrap h-64 justify-center w-full h-auto rounded-3xl">
                    {
                        Object.keys(stacks).map((stack, index) => {
                            return (
                                <img className="pl-5 mb-5 w-16" width="100" height="100" key={index} src={`src/assets/icons/${stack}.png`} alt={"icon " + `${stack}`} />
                            )
                        })
                    }
                </div>

                <div className="bg-white h-full w-full absolute rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-wrap flex-col justify-evenly items-center">
                    {
                        Object.keys(stacks).map((stack, index) => {
                            console.log(stack);

                            return (
                                <div key={index}>
                                    <img className="px-2 mb-2 w-16" width="100" height="100" key={index} src={`src/assets/icons/${stack}.png`} alt={"icon " + `${stack}`} />
                                    <p className="text-xs">{stack}</p>
                                </div>
                            )
                        })
                    }

                </div>

            </article>
        </div>
    );
};

export default DevStack;