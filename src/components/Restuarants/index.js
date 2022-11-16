import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";
import Sidebar from "../../shared/components/Sidebar";

import Container from "../../shared/components/Container";
import PageContainer from "../../shared/components/PageContainer";

import { AddResBtn, CardContainer, DeleteResBtn, HeaderCaption, ResCard, ResDetail, ResHeader, ResImage, ResName, ResType } from "./restuarants.styled";
import { BsPlusLg } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

import ResPagination from "./Pagination";

import { useState } from "react";

function deleteRes(resId) {
    alert(resId);
}

function Search(resName){
    //find sorting by what? (Res/Category?)
}

function Restuarants() {
    

    const [restaurants, setRestaurants] = useState([]);


    return (
        <Container>
            <Header />
            <Sidebar />
            <Footer />
            <PageContainer>

                <ResHeader>
                    <HeaderCaption>
                        Restuarants
                    </HeaderCaption>

                    <AddResBtn><BsPlusLg style={{ color: '#FFFFFF', marginRight: 5, fontSize: 13 }} /> Add Restuarant</AddResBtn>

                </ResHeader>

                <CardContainer>
                    {
                        restaurants.map(restuarant => (

                            <ResCard key={restuarant.id}>
                                <ResImage src={restuarant.image} />
                                <ResDetail>
                                    <ResName>{restuarant.restaurant_name}</ResName>
                                    <ResType>{restuarant.category_name}</ResType>
                                </ResDetail>
                                <DeleteResBtn onClick={() => deleteRes(restuarant.id)}><MdDeleteForever style={{ color: "#EB5757", fontSize: 22 }} /></DeleteResBtn>
                            </ResCard>

                        ))
                    }
                </CardContainer>
                
                <ResPagination setRestaurants={(restaurants) => setRestaurants(restaurants)}/>

            </PageContainer>
        </Container>
    )
};


export default Restuarants;