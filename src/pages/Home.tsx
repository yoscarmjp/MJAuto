import { useState, useMemo } from 'react';
import Hero from "../components/Hero";
import FeaturedCars from "../components/Home/FeaturedCars";
import Features from "../components/Home/Features";
import SearchBar from "../components/Home/SearchBar";
import Steps from "../components/Home/Steps";
import Locations from "../components/Home/Locations";
import { cars } from "../data/cars";

function Home(){
    const [brandFilter, setBrandFilter] = useState('');
    const [modelFilter, setModelFilter] = useState('');
    const [yearFilter, setYearFilter] = useState('');
    const [maxPrice, setMaxPrice] = useState(30000);

    const availableBrands = useMemo(() => {
        const brands = new Set(cars.map(c => c.brand));
        return Array.from(brands).sort();
    }, []);

    const availableModels = useMemo(() => {
        if (!brandFilter) return [];
        const models = new Set(cars.filter(c => c.brand === brandFilter).map(c => c.model));
        return Array.from(models).sort();
    }, [brandFilter]);

    const filteredCars = useMemo(() => {
        return cars.filter(car => {
            if (brandFilter && car.brand !== brandFilter) return false;
            if (modelFilter && car.model !== modelFilter) return false;
            if (car.price > maxPrice) return false;
            
            if (yearFilter) {
                if (yearFilter === '2022+' && car.year < 2022) return false;
                if (yearFilter === '2020-2021' && (car.year < 2020 || car.year > 2021)) return false;
                if (yearFilter === 'older' && car.year >= 2020) return false;
            }
            
            return true;
        });
    }, [brandFilter, modelFilter, yearFilter, maxPrice]);

    return(
        <main>
            <Hero />
            <SearchBar 
                brandFilter={brandFilter}
                setBrandFilter={setBrandFilter}
                modelFilter={modelFilter}
                setModelFilter={setModelFilter}
                yearFilter={yearFilter}
                setYearFilter={setYearFilter}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                availableBrands={availableBrands}
                availableModels={availableModels}
            />
            <div id="featured-cars">
                <FeaturedCars cars={filteredCars} />
            </div>
            <Features />
            <Steps />
            <Locations />
        </main>
    )
}

export default Home;