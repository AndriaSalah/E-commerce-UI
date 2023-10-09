
import './ProductFilters.css'
import {ProductsData} from "../../../ProductsData";
import Section from "./Section/Section";
import SelectedTags from "./SelectedTags/SelectedTags";
import {useEffect, useMemo, useState} from "react";



const ProductFilters = ({Shown, ShowFiltersBar, SetFilteredProducts , SelectedCategories }) => {

    const [Tags, SetTags] = useState([])

    //Filters
    const Brands = useMemo(() => ["Tokyo Talkies", "Roadster", "Here&Now", "High Star", "Miss Chase", "Voxati"],[])
    const Prices= useMemo(() => ["Under Rs. 500", "Rs. 500 to Rs. 1000", "Over Rs. 1000"], []);
    const Colors = useMemo(()=>["lightskyblue", "crimson", "Black", "Purple", "White"],[])
    const Discounts = useMemo(()=>["10% and above", "20% and above", "30% and above", "40% and above", "50% and above", "60% and above"],[])
    const Category = useMemo(()=>["Men","Women","Kids"],[])

    // API testing
    // const [ProductsData,setProductsData] = useState([])
    // useEffect(() => {
    //
    //         fetchData()
    //             .then(data => {
    //                 console.log(data["products"]);
    //                 // setProductsData(data.map(item => ({ImgSrc: img1, ...item})));
    //                 setProductsData(data["products"]);
    //             })
    //             .catch(error => {
    //                 console.error('Error fetching data:', error);
    //             });
    //
    // }, []);

    useEffect(() => {
        if(SelectedCategories) SetTags([SelectedCategories])
        else SetTags([])
        // eslint-disable-next-line
    },[SelectedCategories])
    useEffect(() => {
        
        const filteredProducts = ProductsData.filter((product) => {
            if (Tags.length === 0) return true;

            const selectedBrands = Tags.filter((tag) => Brands.includes(tag));
            const selectedPrices = Tags.filter((tag) => Prices.includes(tag));
            const selectedColors = Tags.filter((tag) => Colors.includes(tag));
            const selectedCategory = Tags.filter((tag) => Category.includes(tag));
            const brandFilter = selectedBrands.length === 0 || selectedBrands.includes(product.BrandName);
            const priceFilter = selectedPrices.length === 0 || selectedPrices.some((tag) => {
                if (tag === "Under Rs. 500") return product.OfferPrice < 500;
                if (tag === "Rs. 500 to Rs. 1000") return product.OfferPrice >= 500 && product.OfferPrice <= 1000;
                if (tag === "Over Rs. 1000") return product.OfferPrice > 1000;
                return false;
            });
            const colorFilter = selectedColors.length === 0 || selectedColors.some((color)=>product.colors.includes(color));
            const categoryFilter = selectedCategory.length === 0 || selectedCategory.includes(product.Category);
            return brandFilter && priceFilter && colorFilter && categoryFilter;
        });
        SetFilteredProducts(filteredProducts);
    }, [Tags, SetFilteredProducts, Prices, Brands, Colors, Category]);




    function addTags(Tag) {
        if (!Tags.includes(Tag)) SetTags([...Tags, Tag])
        else SetTags(Tags.filter(tag => tag !== Tag))
    }

    function clearTags() {
        SetTags([])
    }


    return (
        ProductsData.length > 0 &&
        <div className={"ProductFilters " + (!Shown ? "Hide" : "unHide")}>
            <div className={"Container"}>
                <SelectedTags
                    tags={Tags}
                    ShowFilterBar={ShowFiltersBar}
                    ClearFilter={clearTags}
                    addTags={(tag) => addTags(tag)}
                />
                <Section
                    title={"Categories"}
                    content={Category}
                    setFilter={(tag) => addTags(tag)}
                    selectedTags={Tags}

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