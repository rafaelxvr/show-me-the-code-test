import React from 'react'
import CardItem from './CardItem'
import './CardsProducts.css';

function CardsProducts() {
  return (
    <div className="cards">
        <h1>
        Veja nossos planos imperdíveis!
        </h1>
        <div className="cards__container">
            <div className="cards__wraper">
                <ul className="cards__items">
                    <CardItem 
                    src="/images/img-3.jpg"
                    text="FaleMais 30"
                    label="30 Minutos"
                    path='/services'
                    />
                    <CardItem 
                    src="/images/img-4.jpg"
                    text="FaleMais 60"
                    label="60 Minutos"
                    path='/services'
                    />
                    <CardItem 
                    src="/images/img-5.jpg"
                    text="FaleMais 120"
                    label="120 Minutos"
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CardsProducts