import type { Car } from '../../data/cars';
import { companyData } from '../../data/company';

interface FeaturedCarsProps {
    cars: Car[];
}

function FeaturedCars({ cars }: FeaturedCarsProps) {
    const dollarPrice = 59;

    const getWhatsappLink = (car: Car) => {
        const message = `¡Hola! Me interesa saber más sobre el ${car.brand} ${car.model} ${car.year} que está en US$ ${car.price.toLocaleString('en-US')}.`;
        return `${companyData.whatsappBase}?text=${encodeURIComponent(message)}`;
    };

    return(
        <section className="pb-24 pt-10 mx-auto max-w-[1700px] px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <span className="text-blue-600 font-semibold tracking-wider text-sm mb-2 uppercase">DISPONIBILIDAD INMEDIATA EN SANTO DOMINGO Y SANTIAGO</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Vehículos Destacados Listos Para Montarte</h2>
                </div>
                <div className="flex gap-4 mt-4 md:mt-0 text-sm font-medium text-gray-500">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Inicial desde 20%</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Recibimos tu vehículo</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full mt-7 mx-auto">
                {cars.map((car, index) => (
                    <div key={index} className="bg-white relative border border-gray-100 shadow-sm hover:shadow-xl transition-all rounded-2xl overflow-hidden group">
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <span className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase z-10 shadow-sm">RECIÉN IMPORTADA</span>
                            <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-gray-900 text-[10px] font-bold px-2 py-1 rounded uppercase z-10">{car.year}</span>
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={`../../cars/${car.img}`} alt={car.model} />
                        </div>
                        <div className="p-5">
                            <span className="text-blue-600 uppercase font-bold text-[10px] tracking-wider">{car.brand} • {car.type}</span>
                            <h3 className="font-bold text-lg leading-tight mt-1 mb-2 text-gray-900">{car.brand} {car.model}</h3>
                            <p className="text-gray-500 text-xs line-clamp-2 mb-4 h-8">{car.description}</p>
                            
                            <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-100 mb-4">
                                <div className="flex flex-col items-center text-center">
                                    <span className="font-semibold text-[10px] text-gray-400 uppercase">Condición</span>
                                    <span className="font-bold text-xs text-blue-600 mt-1">{car.detail.condition}</span>
                                </div>
                                <div className="flex flex-col items-center text-center border-x border-gray-100 px-1">
                                    <span className="font-semibold text-[10px] text-gray-400 uppercase">Millas</span>
                                    <span className="font-bold text-xs text-gray-700 mt-1">{car.detail.miles.toLocaleString()}</span>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <span className="font-semibold text-[10px] text-gray-400 uppercase">Transmisión</span>
                                    <span className="font-bold text-xs text-blue-600 mt-1">{car.detail.transmission}</span>
                                </div>
                            </div>

                            <div className="flex flex-row justify-between items-end mb-5">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">Precio</span>
                                    <span className="font-black text-2xl text-gray-900 leading-none">
                                        US$ {car.price.toLocaleString('en-US')}
                                    </span>
                                    <span className="font-medium text-[10px] text-gray-400 mt-1">
                                        ~ RD$ {(car.price*dollarPrice).toLocaleString('en-US')}
                                    </span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">Inicial desde</span>
                                    <span className="font-bold text-sm text-green-500">US$ {(car.price*0.20).toLocaleString('en-US')}</span>
                                </div>
                            </div>

                            <div className="flex flex-row w-full gap-2 text-white font-semibold text-xs">
                                <a href={getWhatsappLink(car)} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 transition-colors w-full rounded-sm py-2.5 flex items-center justify-center gap-1.5 shadow-sm text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.8 3.08 1.22 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.91-7.02Zm-7.01 15.24h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.69 8.23-8.2 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.73-.65-1.23-1.45-1.38-1.7c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28Z"/></svg> Whatsapp
                                </a>
                                <a href={`${companyData.whatsappBase}?text=Quiero%20solicitar%20financiamiento`} target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-100 transition-colors w-full rounded-sm py-2.5 flex items-center justify-center gap-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M15 4H6v16h12V7h-3zM6 2h10l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m2 9h8v2H8zm0 4h8v2H8z"/></svg> Financiar
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </section>
    )
}

export default FeaturedCars;