import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export default function Project() {
    return (
        <section id="project" className="flex flex-col py-10 px-5 justify-center bg-primary text-white ">
            <div className="w-full flex justify-center box">
                <h1 className="font-bold text-white border-b-4 mb-5 w-[100px] text-3xl">Projects</h1>
            </div>
            <div className="w-full flex flex-row gap-10 ml-5 text-bold text-black font-serif">
                <div className="relative">
                    <img className="h-[200px]" src={project1} alt="Project 1" />
                    <div className="project-des">
                        <p className="px-5 py-5">Bus booking frontend website, created using HTML, CSS, JS</p>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-[200px]" src={project2} alt="Project 2" />
                    <div className="project-des">
                        <p className="px-5 py-5">Portfolio website created using React.js and Tailwind CSS</p>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-[200px]" src={project3} alt="Project 3" />
                    <div className="project-des">
                        <p className="px-5 py-5">E-commerce website using React js</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
