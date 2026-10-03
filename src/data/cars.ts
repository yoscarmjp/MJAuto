export interface Car {
    brand: string;
    img: string;
    model: string;
    type: string;
    price: number;
    year: number;
    detail: {
        condition: string;
        miles: number;
        engine: string;
        transmission: string;
    };
    description: string;
}

export const cars: Car[] = [
    {
        brand: "Toyota",
        img: "ToyotaRav4.jpg",
        model: "RAV4 XLE",
        type: "Gasolina",
        price: 26500,
        year: 2021,
        detail: {
            condition: "Nueva",
            miles: 0,
            engine: "2.5L 4Cil",
            transmission: "Automatica"
        },
        description: "Sunroof, cámara de reversa, llave inteligente, CarFax impecable"
    },
    {
        brand: "Honda",
        img: "HondaCRV-EXL.jpg",
        model: "CR-V EX-L 2020",
        type: "Gasolina",
        price: 23800,
        year: 2020,
        detail: {
            condition: "Como Nueva",
            miles: 41200,
            engine: "1.5L Turbo",
            transmission: "Automatica"
        },
        description: "Asientos en piel, compuerta eléctrica, radar anticolisión, aros 18"
    },
    {
        brand: "Toyota",
        img: "ToyotaCorollaLe.jpg",
        model: "Corolla Le",
        type: "Gasolina",
        price: 19500,
        year: 2022,
        detail: {
            condition: "Nueva",
            miles: 24100,
            engine: "45 km/gal",
            transmission: "Automatica"
        },
        description: "Apple CarPlay & Android Auto, Toyota Safety Sense 2.0, pintura original"
    },
    {
        brand: "Hyundai",
        img: "HyundaiTucsonGL.jpg",
        model: "Tucson GL",
        type: "Gasolina",
        price: 16500,
        year: 2019,
        detail: {
            condition: "Nueva",
            miles: 48000,
            engine: "2.0L 4Cil",
            transmission: "Automatica"
        },
        description: "Aire acondicionado bi-zona nítido, aros de magnesio, excelente confort"
    },
    {
        brand: "Nissan",
        img: "NissanKicksSV.jpg",
        model: "Kicks SV",
        type: "Gasolina",
        price: 17200,
        year: 2021,
        detail: {
            condition: "Nueva",
            miles: 30500,
            engine: "1.6L DOHC",
            transmission: "Automatica"
        },
        description: "Pantalla táctil de 8, encendido por botón, sensores de parqueo 360°"
    },
];
