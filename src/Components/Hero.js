import dev from "../assets/dev.jpg";
import { IoMdMail } from 'react-icons/io';
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row px-35 py-40 bg-secondary justify-center">
            <div className="md:w-1/2 flex flex-col">
                <h1 className="text-orange-300 font-bold text-5xl animate__animated animate__fadeIn animate-welcome outer-left">Hi<br />I am Manivasagam</h1>
                <div className="flex py-10 ">
                    <a href="http://www.linkedin.com/in/manivasagam-s-853238248" className="pr-5 hover:text-white animate__animated animate__fadeInUp"><FaLinkedin size={30} /></a>
                    <a href="https://github.com/Manivasagam3/Manivasagam3.git" className="pr-5 hover:text-white animate__animated animate__fadeInUp"><FaGithub size={30} /></a>
                    <a href="mailto:manivasagamselvakumar@gmail.com" className="hover:text-white animate__animated animate__fadeInUp"><IoMdMail size={30} /></a>
                </div>
            </div>
            <img className="md:w-1/3 flex justify-end rounded-r-lg rounded-l-lg animate__animated animate__fadeIn  image" src={dev} alt="Developer" />
        </section>
    );
}
