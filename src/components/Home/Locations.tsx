import { companyData } from "../../data/company";

function Locations() {
    return (
        <section className="pb-24 bg-white w-full">
            <div className="mx-auto max-w-[1700px] px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-blue-600 font-semibold tracking-wider text-sm mb-2 uppercase">Presencia Nacional</span>
                        <h2 className="text-4xl font-bold text-gray-900">Visítanos en nuestras sucursales</h2>
                    </div>
                    <p className="text-gray-500 text-sm max-w-sm mt-4 md:mt-0 text-right">
                        Sucursales equipadas con parqueo para clientes y sala de espera climatizada.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {companyData.locations.map(loc => (
                        <div key={loc.id} className="bg-gray-50 p-8 rounded-sm border border-gray-100">
                            <div className="flex items-center gap-2 text-blue-600 font-bold mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"/></svg>
                                Sucursal - {loc.city}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">{loc.address}</h3>
                            <p className="text-gray-600 mb-6 text-sm">
                                Fácil acceso desde cualquier punto. Amplio parqueo. Te invitamos a ver nuestros vehículos recién importados en exhibición.
                            </p>
                            <div className="flex flex-col gap-2 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"/></svg>
                                    {companyData.schedule}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Locations;
