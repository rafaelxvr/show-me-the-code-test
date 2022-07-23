import React from 'react';
import '../../App.css';
import CardsProducts from '../../components/CardsProducts';
import Footer from '../Footer.js';

export default function Products() {
    return(
        <>
            <div className="products__container">
                <div className="products__wrapper">
                    <h1>PRODUTOS</h1>
                    <CardsProducts />
                </div>
            </div>
            <Footer /> 
        </>
    )
}