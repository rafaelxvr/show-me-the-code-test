import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
        <h1>
        Veja nossos planos imperdíveis!
        </h1>
        <div className="cards__container">
            <div className="cards__wraper">
                <ul className="cards__items">
                    <CardItem 
                    src="/images/img-9.jpg"
                    text="Veja nossos planos imperdíveis!"
                    label="Planos"
                    path='/products'
                    />
                    <CardItem 
                    src="/images/img-8.jpg"
                    text="Calcule o custo de suas chamadas!"
                    label="Calculadora"
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards