import abt from "../assets/abt.jpeg";

export default function Contact() {
    return (
        <section id="contact" className="bg-blue-400 py-20">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center text-center">
                <div className="md:w-1/2 text-white">
                    <h1 className="font-bold text-4xl mb-6 text-gradient">Get in Touch</h1>
                    <p className=" font-serif text-lg mb-4">Feel free to reach out for any inquiries or collaborations.</p>
                   
                        <span className="font-bold mr-2">Email:</span>
                        <p className="font-serif">manivasagamselvakumar@gmail.com</p>
                        
                        <span className="font-bold mr-2">Phone:</span>
                        <p>9361775481</p>
                    </div>
                    
                    
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    {/* Add a contact form or any other visual elements here */}
                </div>
            
        </section>
    );
}
