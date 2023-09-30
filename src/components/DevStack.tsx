import { log } from "console";

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
        <section className="w-auto h-auto flex flex-col bg-white py-5 mt-5 rounded-3xl" >
            <h2 className="text-black text-3xl">Stack</h2>
            <div className="flex flex-wrap justify-center mt-5">

                {
                    Object.keys(stacks).map((stack, index) => {
                        return (
                            <img className="pl-5 mb-5" width="100" height="100" key={index} src={`src/assets/icons/${stack}.png`} />
                        )
                    })
                }
            </div>
        </section>
    );
};

export default DevStack;