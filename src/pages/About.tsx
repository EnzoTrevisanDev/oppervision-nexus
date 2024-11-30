import Footer from "@/components/Footer";
import Header from "@/components/Header";

const About = () => {


    return(
        <div className="min-h-screen bg-secondary">
            <Header />
            <section id="about" className="py-20 bg-white">
                <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-primary">Sobre Nós</h2>
                    <p className="text-gray-600 mb-8">
                    Somos especialistas em tecnologia, automação e monitoramento, ajudando empresas a 
                    otimizar suas operações e melhorar a escalabilidade de seus sistemas. Nossa missão 
                    é entregar soluções rápidas, práticas e eficientes que impulsionam o crescimento 
                    do seu negócio.
                    </p>
                </div>
                </div>
            </section>
             <Footer />
        </div>
    );
};

export default About;