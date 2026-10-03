function Steps() {
    const steps = [
        {
            number: "01",
            title: "Elige tu Vehículo",
            description: "Navega en nuestro inventario o solicita el modelo exacto que buscas. Seleccionamos cuidadosamente cada unidad asegurando un historial limpio (Clean CarFax) y óptimas condiciones mecánicas."
        },
        {
            number: "02",
            title: "Aprobación y Prueba de Manejo",
            description: "Te guiamos en el proceso de financiamiento. Con acuerdos en los principales bancos, logramos tu aprobación de inmediato con las mejores tasas. Agenda tu prueba de manejo y enamórate de tu auto."
        },
        {
            number: "03",
            title: "Traspaso y Entrega Inmediata",
            description: "Nos encargamos de todo el papeleo. Marbete, placa y traspaso están incluidos en el precio. Te entregamos tu vehículo listo para circular, con garantía en motor y transmisión."
        }
    ];

    return (
        <section className="pb-24 bg-gray-50 w-full">
            <div className="mx-auto max-w-[1700px] px-6">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold tracking-wider text-sm mb-2 uppercase">Cero Complicaciones</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Cómo Comprar Tu Auto en 3 Simples Pasos</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Diseñado para que estrenes vehículo en República Dominicana con la máxima transparencia y rapidez.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                            <span className="text-6xl font-black text-blue-50 absolute top-4 right-4 group-hover:text-blue-100 transition-colors">{step.number}</span>
                            <div className="relative z-10">
                                <span className="text-xl font-black text-blue-600 mb-4 block">{step.number}</span>
                                <h3 className="text-xl font-bold mb-4 text-gray-800">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Steps;
