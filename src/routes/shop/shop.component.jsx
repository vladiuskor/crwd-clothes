import {useContext} from "react";
import {CategotiesContext} from "../../contexts/categoties.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import './shop.styles.scss';

const Shop = () => {
    const {categoriesMap} = useContext(CategotiesContext);

    return (
        <div className="shop-container">
            {
                Object.keys(categoriesMap).map(title => {
                        const products = categoriesMap[title];
                        return <CategoryPreview key={title} title={title} products={products} />
                    }
                )
            }
        </div>

    )
}

export default Shop;