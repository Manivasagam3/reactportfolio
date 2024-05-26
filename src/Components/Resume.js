import resume from "../assets/resume.webp"
import update from "../assets/newresume.pdf"
export default function Resume(){
    return <section id="resume" className="flex flex-col md:flex-row justify-center px-10 py-32 bg-green-300">
        <div className="md:w-1/5">
<img className="rounded-r-lg rounded-l-lg " src={resume}/>
        </div>
        <div className="md:w-1/2 flex justify-center ">
        <div className="flex flex-col justify-center py-20">
            <h1 className="font-bold text-white border-b-4 mb-5 w-[130px] text-3xl">RESUME</h1>
            <p className="font-serif text-white text-1xl">See My Resume Here <a className="btn" href={update} target="_blank" >click it</a><br/>
            </p>
        </div>
        </div>
    </section>
}