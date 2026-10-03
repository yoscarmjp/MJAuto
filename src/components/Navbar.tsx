import { useState } from "react";
import { Link } from "react-router-dom";
import { companyData } from "../data/company";

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="bg-blue-900 text-white flex p-2 justify-center gap-10 items-center text-xs font-medium">
                <span>✓ RECIÉN IMPORTADOS CON GARANTÍA</span>
                <span className="hidden md:inline">✓ PLACA Y MARBETE INCLUIDOS</span>
            </div>

            <div className="py-4 px-4 md:px-6 flex justify-between items-center mx-auto max-w-[1700px]">
                <div className="flex items-center gap-3 md:gap-4">
                    <button 
                        className="lg:hidden text-blue-900 hover:text-blue-600 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                        )}
                    </button>

                    <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                        <img src="../../logo.webp" className="h-7 sm:h-8 md:h-10" alt="Logo" />
                    </Link>
                </div>

                <nav className="hidden lg:flex gap-6 text-gray-600 font-semibold text-sm">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
                    <Link to="/inventory" className="hover:text-blue-600 transition-colors">Vehículos en Stock</Link>
                    <Link to="/financing" className="hover:text-blue-600 transition-colors">Financiamiento Bancario</Link>
                    <Link to="/how-to-buy" className="hover:text-blue-600 transition-colors">Cómo Comprar</Link>
                    <Link to="/locations" className="hover:text-blue-600 transition-colors">Sucursales</Link>
                    <Link to="/contact" className="hover:text-blue-600 transition-colors">Contacto</Link>
                </nav>

                <div className="flex items-center gap-3">
                    <div className="hidden md:flex flex-col text-right">
                        <span className="text-xs text-gray-500 font-medium">Llámanos directo</span>
                        <a href={`tel:+${companyData.phone}`} className="font-bold text-gray-800">{companyData.phoneDisplay}</a>
                    </div>
                    <a href={companyData.whatsappBase} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 transition-all cursor-pointer font-bold flex items-center justify-center gap-1.5 px-3 sm:px-6 rounded-sm py-2 sm:py-2.5 text-white text-xs sm:text-sm shadow-md hover:shadow-lg whitespace-nowrap">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.8 3.08 1.22 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.91-7.02Zm-7.01 15.24h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.69 8.23-8.2 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.73-.65-1.23-1.45-1.38-1.7c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28Z"/></svg>
                        <span className="hidden sm:inline">Cotizar por WhatsApp</span>
                        <span className="inline sm:hidden">Cotizar</span>
                    </a>
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 flex flex-col shadow-xl z-50">
                    <div className="flex flex-col py-2">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="px-6 py-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 border-b border-gray-100">Inicio</Link>
                        <Link to="/inventory" onClick={() => setIsMenuOpen(false)} className="px-6 py-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 border-b border-gray-100">Vehículos en Stock</Link>
                        <Link to="/financing" onClick={() => setIsMenuOpen(false)} className="px-6 py-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 border-b border-gray-100">Financiamiento Bancario</Link>
                        <Link to="/how-to-buy" onClick={() => setIsMenuOpen(false)} className="px-6 py-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 border-b border-gray-100">Cómo Comprar</Link>
                        <Link to="/locations" onClick={() => setIsMenuOpen(false)} className="px-6 py-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 border-b border-gray-100">Sucursales</Link>
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="px-6 py-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600">Contacto</Link>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar;