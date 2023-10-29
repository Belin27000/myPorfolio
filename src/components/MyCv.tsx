import pdfFile from '../assets/pdfFile/cvYannLecerfFullStack.pdf';

const MyCv = () => {
    const PDF_FILE_URL = pdfFile
    const downloadFileURL = () => {
        const link = document.createElement('a');
        link.href = PDF_FILE_URL;
        link.setAttribute('download', 'cvYannLecerfFullStack.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <button onClick={downloadFileURL} className="bg-black dark:hover:text-white hover:text-blueSite text-white shadow-3xl dark:bg-blueSite text-2xl dark:text-black px-5 py-1 rounded-full w-60  ">
            Download CV
        </button>
    );
}
export default MyCv;