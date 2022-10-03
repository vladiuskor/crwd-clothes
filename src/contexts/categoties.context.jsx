import {createContext, useState, useEffect} from "react";

import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";

export const CategotiesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: () => {}
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);

            setCategoriesMap(categoryMap);
        }

        getCategoriesMap();
    }, []);

    const value = {
        categoriesMap
    };

    return (
        <CategotiesContext.Provider value={value}>{children}</CategotiesContext.Provider>
     )
}