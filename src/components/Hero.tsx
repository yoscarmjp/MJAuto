import { companyData } from "../data/company";

function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-gray-950 min-h-[600px] flex items-center">
            <div className="absolute inset-0 z-0">
                <img src="../../background.webp" alt="Background" className="w-full h-full object-cover object-right opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10" />
            </div>

            <div className="relative z-20 mx-auto max-w-[1700px] w-full px-6 py-16 mt-4">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-[2px] w-8 bg-blue-600"></div>
                        <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Premium Selection</span>
                    </div>
                    
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                        El vehículo ideal <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">para tu familia</span>
                    </h1>
                    
                    <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
                        Especialistas en importación directa. Vehículos certificados con Clean CarFax, traspaso incluido y aprobación bancaria en 24 horas.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <a href={`${companyData.whatsappBase}?text=Quiero%20cotizar%20con%20un%20asesor`} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                            Hablar con un Asesor
                        </a>
                        <button onClick={() => document.getElementById('featured-cars')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white/5 hover:bg-white/10 text-white border border-white/20 font-bold px-8 py-3.5 rounded-sm transition-colors flex items-center justify-center gap-2">
                            Ver Inventario
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 pt-8">
                        <div>
                            <div className="text-3xl font-black text-white mb-1.5">1,800+</div>
                            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Clientes Felices</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-blue-500 mb-1.5">9.95%</div>
                            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Tasa Fija Anual</div>
                        </div>
                        <div className="hidden md:block">
                            <div className="text-3xl font-black text-white mb-1.5">100%</div>
                            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Traspaso Incluido</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;