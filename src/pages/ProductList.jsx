
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import styled from "styled-components"
import { useLocation } from "react-router";
import { useState } from "react";


const Container = styled.div`

`
const Title = styled.h1`
padding: 20px;

`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
padding: 20px;

`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
`

const Option = styled.option`

`

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilter = (e) => {
        const value = e.target.value;
        // console.log(value)
        setFilter({
            ...filter,
            [e.target.name]: value,
        })
    }
    console.log(filter)
    return (
        <Container>

            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="Color" onChange={handleFilter}>
                        <Option disabled >Color</Option>
                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Black</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilter}>
                        <Option disabled >Size</Option>

                        <Option>S</Option>
                        <Option>L</Option>
                        <Option>M</Option>
                        <Option>XL</Option>
                        <Option>3XL</Option>
                    </Select>
                </Filter>


                <Filter>
                    <FilterText>Sort Products:</FilterText>

                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>

                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filter} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
