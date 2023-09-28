
import './ProductFilters.css'
import ProductsData from "../../ProductsData";
import Section from "./Section/Section";
import SelectedTags from "./SelectedTags/SelectedTags";
import {useEffect, useMemo, useState} from "react";



const ProductFilters = ({Shown, ShowFiltersBar, SetFilteredProducts}) => {
    const [Tags, SetTags] = useState([])
    const Brands = useMemo(() => ["Tokyo Talkies", "Roadster", "Here&Now", "High Star", "Miss Chase", "Voxati"],[])
    const Prices= useMemo(() => ["Under Rs. 500", "Rs. 500 to Rs. 1000", "Over Rs. 1000"], []);
    const Colors = useMemo(()=>["Blue", "Red", "Black", "Purple", "White"],[])
    const Discounts = useMemo(()=>["10% and above", "20% and above", "30% and above", "40% and above", "50% and above", "60% and above"],[])

    useEffect(() => {
        const filteredProducts = ProductsData.filter((product) => {
            if (Tags.length === 0) return true;

            const selectedBrands = Tags.filter((tag) => Brands.includes(tag));
            const selectedPrices = Tags.filter((tag) => Prices.includes(tag));
            const selectedColors = Tags.filter((tag) => Colors.includes(tag));

            const brandFilter = selectedBrands.length === 0 || selectedBrands.includes(product.BrandName);
            const priceFilter = selectedPrices.length === 0 || selectedPrices.some((tag) => {
                if (tag === "Under Rs. 500") return product.OfferPrice < 500;
                if (tag === "Rs. 500 to Rs. 1000") return product.OfferPrice >= 500 && product.OfferPrice <= 1000;
                if (tag === "Over Rs. 1000") return product.OfferPrice > 1000;
                return false;
            });
            const colorFilter = selectedColors.length === 0 || selectedColors.includes(product.color);

            return brandFilter && priceFilter && colorFilter;
        });

        SetFilteredProducts(filteredProducts);
    }, [Tags, SetFilteredProducts, Prices, Brands, Colors]);




    function addTags(Tag) {
        if (!Tags.includes(Tag)) SetTags([...Tags, Tag])
        else SetTags(Tags.filter(tag => tag !== Tag))
    }

    function clearTags() {
        SetTags([])
    }



    return (
        <div className={"ProductFilters " + (!Shown ? "Hide" : "")}>
            <div className={"Container"}>
                <SelectedTags
                    tags={Tags}
                    ShowFilterBar={ShowFiltersBar}
                    ClearFilter={clearTags}
                    addTags={(tag) => addTags(tag)}
                />
                <Section
                    title={"Brand"}
                    content={Brands}
                    setFilter={(tag) => addTags(tag)}
                    selectedTags={Tags}

                />
                <Section
                    title={"Price"}
                    content={Prices}
                    setFilter={(tag) => addTags(tag)}
                    selectedTags={Tags}

                />
                <Section
                    title={"Color"}
                    content={Colors}
                    setFilter={(tag) => addTags(tag)}
                    selectedTags={Tags}

                />
                <Section
                    title={"Discount Range"}
                    content={Discounts}
                    setFilter={(tag) => addTags(tag)}
                    selectedTags={Tags}

                />
            </div>
        </div>
    )
}


export default ProductFilters