import React from 'react';
import '../../App.css';
import Calculator from '../Calculator.js'
import Footer from '../Footer.js'

export default function Services() {
    return (
        <>
            <div className="services__container">
                <div className="services__wrapper">
                    <h1>SERVIÇOS</h1>
                    <div>
                        <h1 className="calculator__title">Calcule o valor de suas chamadas com ou sem plano!</h1>
                    </div>
                </div>
                <Calculator />  
            </div>
            <Footer /> 
        </>
    )
}