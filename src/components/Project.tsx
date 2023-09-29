type ProjectDetail = {
    id: number,
    project: string,
    description: string,
    stack: string[],
    year: number,
    website: string
};

type ProjectProps = {
    data: ProjectDetail[];
};
const Project = ({ data }: ProjectProps) => {
    console.log(data);

    return (
        <div>

        </div>
    );
};

export default Project;