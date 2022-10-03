import {Fragment, useContext} from "react";
import {CategotiesContext} from "../../contexts/categoties.context";

import ProductCard from "../../components/product-card/product-card.component";

import './shop.styles.scss';

const Shop = () => {
    const {categoriesMap} = useContext(CategotiesContext);

    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => {
                        return (
                            <Fragment key={title}>
                                <h2>{title}</h2>
                                <div className="products-container">
                                    {
                                        categoriesMap[title].map(product => <ProductCard key={product.id} product={product}/>)
                                    }
                                </div>
                            </Fragment>
                        )
                    }
                )
            }
        </Fragment>

    )
}

export default Shop;