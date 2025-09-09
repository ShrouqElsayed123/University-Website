import { createContext, useState } from "react";

export const HeroContext = createContext()


// eslint-disable-next-line no-unused-vars
export function HeroProvider({ children }) {
    const [heroData, setHeroData] = useState([
        {
            id: 1,
            image: "https://via.placeholder.com/150",
            title: "Welcome to Our University",
            subtitle: "Excellence in Education and Research",
            buttonText: "Apply Now",
            buttonLink: "/apply",
        },
    ]);

    const addHero = (newHero) => {
        const newId = heroData.length ? heroData[heroData.length - 1].id + 1 : 1;
        setHeroData([...heroData, { id: newId, ...newHero }]);
    };

    const updateHero = (id, updatedHero) => {
        setHeroData(heroData.map(h => h.id === id ? { ...h, ...updatedHero } : h));
    };

    const deleteHero = (id) => {
        setHeroData(heroData.filter(h => h.id !== id));
    };

    return (
        <HeroContext.Provider value={{ heroData, addHero, updateHero, deleteHero }}>
            {children}
        </HeroContext.Provider>
    );
}