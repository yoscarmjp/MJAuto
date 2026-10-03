import { useState, useMemo } from 'react';
import SearchBar from "../components/Home/SearchBar";
import FeaturedCars from "../components/Home/FeaturedCars";
import { cars } from "../data/cars";

import PageHeader from "../components/PageHeader";

function Inventory() {
    const [brandFilter, setBrandFilter] = useState('');
    const [modelFilter, setModelFilter] = useState('');
    const [yearFilter, setYearFilter] = useState('');
    const [maxPrice, setMaxPrice] = useState(50000);

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

    return (
        <main>
            <PageHeader 
                title="Nuestro Inventario" 
                subtitle="Explora todos nuestros vehículos disponibles para entrega inmediata." 
            />
            
            <div className="-mt-12">
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
            </div>
            <FeaturedCars cars={filteredCars} />
        </main>
    );
}

export default Inventory;
