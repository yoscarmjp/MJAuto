import Steps from "../components/Home/Steps";
import PageHeader from "../components/PageHeader";

function HowToBuy() {
    return (
        <main>
            <PageHeader 
                title="Cómo Comprar Tu Vehículo" 
                subtitle="El proceso de adquirir tu nuevo vehículo con nosotros es simple, rápido y transparente. Te acompañamos en cada etapa."
            />
            <Steps />
        </main>
    );
}

export default HowToBuy;
