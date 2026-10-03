import type { Dispatch, SetStateAction } from 'react';

interface SearchBarProps {
    brandFilter: string;
    setBrandFilter: Dispatch<SetStateAction<string>>;
    modelFilter: string;
    setModelFilter: Dispatch<SetStateAction<string>>;
    yearFilter: string;
    setYearFilter: Dispatch<SetStateAction<string>>;
    maxPrice: number;
    setMaxPrice: Dispatch<SetStateAction<number>>;
    availableBrands: string[];
    availableModels: string[];
}

function SearchBar({
    brandFilter, setBrandFilter,
    modelFilter, setModelFilter,
    yearFilter, setYearFilter,
    maxPrice, setMaxPrice,
    availableBrands, availableModels
}: SearchBarProps) {
    
    // Optional: a specific function to handle search button click, e.g. scroll to results
    const handleSearch = () => {
        const element = document.getElementById("featured-cars");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="mx-auto max-w-[1700px] px-6 -mt-10 relative z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-end gap-6 border border-gray-100">
                
                <div className="flex flex-col w-full">
                    <label className="text-xs font-semibold text-gray-500 mb-2 uppercase">Marca</label>
                    <select 
                        value={brandFilter} 
                        onChange={(e) => {
                            setBrandFilter(e.target.value);
                            setModelFilter(''); // reset model when brand changes
                        }}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-700 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option value="">Todas las Marcas</option>
                        {availableBrands.map(b => (
                            <option key={b} value={b}>{b}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col w-full">
                    <label className="text-xs font-semibold text-gray-500 mb-2 uppercase">Modelo</label>
                    <select 
                        value={modelFilter}
                        onChange={(e) => setModelFilter(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-700 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        disabled={!brandFilter}
                    >
                        <option value="">Todos los Modelos</option>
                        {availableModels.map(m => (
                            <option key={m} value={m}>{m}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col w-full">
                    <label className="text-xs font-semibold text-gray-500 mb-2 uppercase">Año De Fabricación</label>
                    <select 
                        value={yearFilter}
                        onChange={(e) => setYearFilter(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-700 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option value="">Todos los años</option>
                        <option value="2022+">2022 en adelante</option>
                        <option value="2020-2021">2020 - 2021</option>
                        <option value="older">Antes de 2020</option>
                    </select>
                </div>

                <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Precio</label>
                        <span className="text-xs font-bold text-blue-600">Hasta US$ {maxPrice.toLocaleString('en-US')}</span>
                    </div>
                    <input 
                        type="range" 
                        min="10000" 
                        max="50000" 
                        step="1000"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" 
                    />
                </div>

                <button 
                    onClick={handleSearch}
                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg>
                    Buscar
                </button>

            </div>
        </section>
    );
}

export default SearchBar;
