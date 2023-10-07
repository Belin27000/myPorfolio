
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

type StackProps = {
    data: Dev[];
}
const getImagePAth = (item: string) => {
    console.log(item);

    try {
        require(`./assets/icons/${item}.png`)
        return (`./assets/icons/${item}.png`)
    } catch (error) {
        return (`src/assets/icons/${item}.png`)
    }
}

const DevStack = ({ data }: StackProps) => {
    const stacks = data[0].devStack[0]


    return (
        <div className="  mx-5 my-8  ">
            <article className="text-black bg-white flex flex-col rounded-3xl items-center shadow-3xl justify-around" >
                <h2 className="m-5 text-3xl font-bold">Stack</h2>
                <div className=" flex flex-wrap mb-5 justify-center">

                    {
                        Object.keys(stacks).map((stack, index) => {
                            const imagePath = getImagePAth(stack)

                            return (
                                <div key={index} className=" [perspective:1000px] group   justify-center  w-32 h-32  m-5 rounded-3xl">
                                    <div className=" relative transition-all duration-700 [transform-style:preserve-3d] rotateY(180deg) group-hover:[transform:rotateY(180deg)] text-black h-full w-full flex flex-col  items-center shadow-3xl justify-around  rounded-3xl" >
                                        <div className="" >
                                            <div className="rounded-3xl bg-white flex  justify-center">
                                                <img width="100" height="100" src={`${imagePath}`} alt={"logo projet " + `${stack}`} className="w-1/2 bg-white rounded object-contain " />
                                            </div>
                                        </div>
                                        <div className=" rounded-3xl bg-white h-full w-full absolute [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-evenly items-center">
                                            <p className="text-xl">{Object.values(stacks)[index]}</p>
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