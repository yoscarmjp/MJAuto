
function Features() {
    const features = [
        {
            title: "CarFax & Autocheck Limpio",
            description: "Verificamos el historial completo en EE.UU., garantizando que ningún vehículo haya tenido despliegue de bolsas de aire ni daños por inundación.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5H8l4-4l4 4h-3v5h-2z"/></svg>
            ),
            linkText: "HISTORIAL REVISADO"
        },
        {
            title: "Recibimos tu Vehículo (Trade-in)",
            description: "Tasamos tu carro actual de inmediato al mejor valor del mercado dominicano para que lo uses como inicial de tu nuevo vehículo.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
            ),
            linkText: "TASACIÓN EN 15 MIN"
        },
        {
            title: "Convenio con Bancos Locales",
            description: "Financiamiento disponible con Banreservas, Banco Popular, BHD y más. Aprobación y desembolso en 24 horas. ¡Llevátelo con inicial desde 20% del valor!",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15c0-1.09 1.01-1.85 2.7-1.85c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61c0 2.31 1.91 3.46 4.7 4.13c2.5.6 3 1.48 3 2.41c0 .69-.49 1.79-2.7 1.79c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55c0-2.84-2.43-3.81-4.7-4.4z"/></svg>
            ),
            linkText: "FINANCIA TU AUTO"
        },
        {
            title: "Traspaso y Marbete al Día",
            description: "Te entregamos tu vehículo listo para circular: placa física dominicana, marbete actualizado y matrícula original a tu nombre en un tiempo récord.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 0 0 1.414 0l5.952-5.95-1.062-1.062l-5.6 5.6z"/></svg>
            ),
            linkText: "CERO TRÁMITES PESADOS"
        }
    ];

    return (
        <section className="pb-24 bg-gray-50 w-full">
            <div className="mx-auto max-w-[1700px] px-6">
                <div className="mb-12">
                    <span className="text-blue-600 font-semibold tracking-wider text-sm mb-2 uppercase">GARANTÍA TOTAL EN CADA ENTREGA</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl">
                        ¿Por Qué Comprar Tu Vehículo con Auto Import RD?
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-3xl">
                        Te ahorramos dolores de cabeza: peritaje en origen, cero autos ahogados o con millaje alterado, y el traspaso a tu nombre sin hacer filas en la DGII.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                            <div>
                                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {feature.description}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-green-600 font-bold text-xs uppercase">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm-1.8 14.6L6.5 13l1.4-1.4l2.3 2.3l6.5-6.5l1.4 1.4l-7.9 7.8z"/></svg>
                                {feature.linkText}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
