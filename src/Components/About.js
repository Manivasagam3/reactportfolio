import abt from "../assets/abt.jpeg"
export default function about(){
    const config={
        subtitle:"I'm currently diving into full-stack web development, with proficiency in HTML, CSS, JavaScript, React.js, Redux, Tailwind CSS, Node.js, and SQL.I completed UG with 89% score.I am currently pursuing PG degree in PSG COLLEGE OF ARTS AND SCIENCE"
    }
    return <section id="about" className="flex flex-col md:flex-row justify-center px-10 py-32 bg-green-300">
        <div className="md:w-1/5">
<img className="rounded-r-lg rounded-l-lg " src={abt}/>
        </div>
        <div className="md:w-1/2 flex justify-center ">
        <div className="flex flex-col justify-center py-20">
            <h1 className="font-bold text-white border-b-4 mb-5 w-[130px] text-3xl">aboutme</h1>
            <p className="font-serif text-white text-1xl">{config.subtitle}</p>
        </div>
        </div>
    </section>
}