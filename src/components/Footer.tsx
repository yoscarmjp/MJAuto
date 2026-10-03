import { Link } from "react-router-dom";
import { companyData } from "../data/company";

function Footer(){
    return(
        <footer className="bg-[#0f172a] text-gray-300 py-16">
            <div className="mx-auto max-w-[1700px] px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="flex flex-col gap-6">
                    <img src="../../logo.webp" alt="Logo" className="w-48 brightness-0 invert" />
                    <p className="text-sm leading-relaxed text-gray-400">
                        Líderes en importación y venta de vehículos seminuevos en República Dominicana. Transparencia en historial, aseguro de calidad y financiamiento bancario con aprobación en 24 horas.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <span className="bg-gray-800 px-3 py-1 text-xs font-bold rounded-sm">ASEGURA</span>
                        <span className="bg-gray-800 px-3 py-1 text-xs font-bold rounded-sm">GARANTIZA</span>
                        <span className="bg-green-600/20 text-green-400 px-3 py-1 text-xs font-bold rounded-sm">CLEAN CARFAX</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-white text-lg mb-2 uppercase tracking-wide">Marcas Populares en RD</h4>
                    <ul className="flex flex-col gap-3 text-sm">
                        <li className="flex items-center gap-2"><span className="text-blue-500">▸</span> Toyota (Corolla, RAV4, Hilux, Fortuner)</li>
                        <li className="flex items-center gap-2"><span className="text-blue-500">▸</span> Honda (Civic, CR-V, HR-V)</li>
                        <li className="flex items-center gap-2"><span className="text-blue-500">▸</span> Hyundai (Tucson, Elantra, Santa Fe, Grand i10)</li>
                        <li className="flex items-center gap-2"><span className="text-blue-500">▸</span> Daihatsu (Hijet Cargo, Camionetas)</li>
                        <li className="flex items-center gap-2"><span className="text-blue-500">▸</span> Nissan (Kicks, Frontier, Versa)</li>
                        <li className="flex items-center gap-2"><span className="text-blue-500">▸</span> Kia (Rio, Sportage, Sorento)</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-white text-lg mb-2 uppercase tracking-wide">Contacto Directo</h4>
                    {companyData.locations.map(loc => (
                        <div key={loc.id} className="flex items-start gap-3 text-sm">
                            <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"/></svg>
                            <span>{loc.city}: {loc.address}</span>
                        </div>
                    ))}
                    <div className="flex items-center gap-3 text-sm mt-2">
                        <svg className="w-5 h-5 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/></svg>
                        <span>Ventas: <a href={`tel:+${companyData.phone}`} className="hover:text-blue-400 transition-colors">{companyData.phoneDisplay}</a></span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <svg className="w-5 h-5 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.8 3.08 1.22 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.91-7.02Zm-7.01 15.24h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.69 8.23-8.2 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.73-.65-1.23-1.45-1.38-1.7c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28Z"/></svg>
                        <span>WhatsApp: <a href={companyData.whatsappBase} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">{companyData.phoneDisplay}</a></span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <svg className="w-5 h-5 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/></svg>
                        <span><a href={`mailto:${companyData.email}`} className="hover:text-blue-400 transition-colors">{companyData.email}</a></span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-white text-lg mb-2 uppercase tracking-wide">Recibe Nuevas Entradas</h4>
                    <p className="text-sm text-gray-400">
                        Te avisaremos al instante de vehículos recién desaduanizados con precio especial de feria.
                    </p>
                    <div className="flex w-full mt-2">
                        <input type="email" placeholder="Tu correo electrónico" className="bg-gray-800 border border-gray-700 text-white text-sm rounded-l-sm p-3 w-full focus:outline-none focus:border-blue-500" />
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-sm transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z"/></svg>
                        </button>
                    </div>
                    <span className="text-xs text-gray-600 mt-1">Cero spam. Solo ofertas de vehículos en RD.</span>
                </div>
            </div>

            <div className="max-w-[1700px] mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                <span>&copy; {new Date().getFullYear()} Auto Import RD | RNC: 131-XXXXX-X. Todos los derechos reservados.</span>
                <div className="flex items-center gap-4">
                    <Link to="/terminos" className="hover:text-gray-300">Términos de Servicio</Link>
                    <Link to="/privacidad" className="hover:text-gray-300">Política de Privacidad</Link>
                </div>
            </div>
            
            <a href={companyData.whatsappBase} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-xl hover:scale-110 transition-transform z-50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.8 3.08 1.22 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.91-7.02Zm-7.01 15.24h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.69 8.23-8.2 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.73-.65-1.23-1.45-1.38-1.7c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28Z"/></svg>
            </a>
        </footer>
    )
}

export default Footer;