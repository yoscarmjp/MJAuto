import Locations from "../components/Home/Locations";
import PageHeader from "../components/PageHeader";

function LocationsPage() {
    return (
        <main>
            <PageHeader 
                title="Nuestras Sucursales" 
                subtitle="Visítanos en nuestras localidades de Santo Domingo y Santiago. Estamos listos para recibirte y mostrarte nuestro inventario."
            />
            <Locations />
        </main>
    );
}

export default LocationsPage;
