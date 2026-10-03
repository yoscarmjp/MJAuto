import PageHeader from "../components/PageHeader";
import { companyData } from "../data/company";

function Contact() {
    return (
        <main className="pb-24">
            <PageHeader 
                title="Contáctanos" 
                subtitle="Estamos aquí para responder todas tus preguntas. Escríbenos o visítanos en cualquiera de nuestras sucursales."
            />
            
            <div className="mx-auto max-w-[1700px] px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">Información Directa</h2>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-3 rounded-sm text-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.8 3.08 1.22 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.91-7.02Zm-7.01 15.24h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.69 8.23-8.2 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.73-.65-1.23-1.45-1.38-1.7c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28Z"/></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">WhatsApp Ventas</h3>
                                    <p className="text-gray-500 mb-2">{companyData.phoneDisplay}</p>
                                    <a href={companyData.whatsappBase} target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold text-sm hover:underline">Chatear ahora &rarr;</a>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-sm text-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Correo Electrónico</h3>
                                    <p className="text-gray-500 mb-2">{companyData.email}</p>
                                    <a href={`mailto:${companyData.email}`} className="text-blue-600 font-semibold text-sm hover:underline">Enviar correo &rarr;</a>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="bg-gray-100 p-3 rounded-sm text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"/></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Horario de Atención</h3>
                                    <p className="text-gray-500">{companyData.schedule.split(" | ")[0]}</p>
                                    <p className="text-gray-500">{companyData.schedule.split(" | ")[1]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-900 p-8 rounded-2xl shadow-lg text-white">
                        <h2 className="text-2xl font-bold mb-6">Déjanos un Mensaje</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1 text-blue-200">Nombre Completo</label>
                                <input type="text" className="w-full px-4 py-3 rounded-sm bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ej. Juan Pérez" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-blue-200">Teléfono</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-sm bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ej. 809-555-5555" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-blue-200">Mensaje o Vehículo de Interés</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-sm bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Escribe tu mensaje aquí..."></textarea>
                            </div>
                            <button type="button" className="w-full bg-blue-500 hover:bg-blue-600 transition-colors py-3 rounded-sm font-bold">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;
