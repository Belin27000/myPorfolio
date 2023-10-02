
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
        <div className="  mx-5 my-8  ">
            <article className="text-black bg-white flex flex-col rounded-3xl items-center shadow-3xl justify-around" >
                <h2 className="m-5 text-3xl font-bold">Stack</h2>
                <div className=" flex flex-wrap mb-5 justify-center">

                    {
                        Object.keys(stacks).map((stack, index) => {
                            return (
                                <div key={index} className=" [perspective:1000px] group   justify-center  w-32 h-32  m-5 rounded-3xl">
                                    <div className=" relative transition-all duration-700 [transform-style:preserve-3d] rotateY(180deg) group-hover:[transform:rotateY(180deg)] text-black h-full w-full flex flex-col  items-center shadow-3xl justify-around  rounded-3xl" >
                                        <div className="" >
                                            <div className="rounded-3xl bg-white flex  justify-center">
                                                <img width="100" height="100" src={`src/assets/icons/${stack}.png`} alt={"logo projet " + `${stack}`} className="w-1/2 bg-white rounded object-contain " />
                                            </div>
                                        </div>
                                        <div className=" rounded-3xl bg-white h-full w-full absolute [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-evenly items-center">
                                            <p className="text-xl">{stack}</p>
                                        </div>

                                    </div>
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