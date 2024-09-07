export default function HeroSetion() {

    return <>

<section className="h-96 flex items-center text-white bg-cover bg-center relative" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://via.placeholder.com/1920x1080")' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
            <div className="relative z-10 max-w-lg px-8 py-12 ml-4 md:ml-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-left pt-16">Welcome to Our Website</h1>
                <p className="text-lg md:text-xl mb-6 text-left">We provide the best solutions for your business needs. Join us and experience the difference.</p>
                <button className="bg-blue-500 hover:bg-rose-900 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">Get Started</button>
            </div>
        </section>
    </>


}