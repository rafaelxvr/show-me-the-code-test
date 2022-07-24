import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Calculator.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

const validationCalc = yup.object().shape({
  plano: yup.string().required("O campo Plano é obrigatório."),
  origem: yup.string().required("O campo Origem é obrigatório.")
    .notOneOf([yup.ref('destino'), null], "Os campos origem e destino não podem ser iguais"),
  destino: yup.string().required("O campo Destino é obrigatório.")
    .notOneOf([yup.ref('origem'), null], "Os campos origem e destino não podem ser iguais"),
  duracao: yup.number()
    .typeError("O campo deve ser um número")
    .required("O campo Duração é obrigatório.")
    .positive("O valor deve ser positivo")
    .integer("O valor deve ser inteiro")
});

function Calculator() {
    const {register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(validationCalc)
    });

    const calcTarifa = async data => {
      await axios.get("http://localhost:9000/tarifaRoute", {params: 
        {origem: data.origem, 
        destino: data.destino,
        duracao: data.duracao,
        plano: data.plano
      }})
        .then((response) => {
          setTarifa([response.data]);
          console.log(response.data);
        })
        .catch((error) => {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
        });
    };

    const [ tarifa, setTarifa ] = useState([])

  return (
      <div className="calculator__wrapper">
        <main>
          <div className="calculator__body">
            <form onSubmit={handleSubmit(calcTarifa)}>

              <div div className="fields">
                <label>Selecione seu Plano: </label>
                <select className="input__planos" name="plano" {...register("plano")} >
                  <option></option>
                  <option id='1' value='FaleMais30'>FaleMais 30</option>
                  <option id='2' value='FaleMais60'>FaleMais 60</option>
                  <option id='3' value='FaleMais120'>FaleMais 120</option>
                </select>
                <p className="calculator__error">{errors.plano?.message}</p>
              </div>

              <div div className="fields">
                <label>Selecione a Origem da Ligação: </label>
                <select className="input__origem" name="origem" {...register("origem")} >
                  <option></option>
                  <option value='011'>DDD 011</option>
                  <option value='016'>DDD 016</option>
                  <option value='017'>DDD 017</option>
                  <option value='018'>DDD 018</option>
                </select>
                <p className="calculator__error">{errors.origem?.message}</p>
              </div>

              <div div className="fields">
                <label>Selecione o Destino da Ligação: </label>
                <select className="input__origem" name="destino" {...register("destino")}>
                  <option></option>
                  <option value='011'>DDD 011</option>
                  <option value='016'>DDD 016</option>
                  <option value='017'>DDD 017</option>
                  <option value='018'>DDD 018</option>
                </select>
                <p className="calculator__error">{errors.destino?.message}</p>
              </div>

              <div className="fields">
                <label>Minutos: </label>
                <input type="number" placeholder="Quantos minutos quer falar?" className="input__minutos" name="duracao" {...register("duracao")}/>
                <p className="calculator__error">{errors.duracao?.message}</p>
              </div>

              <div className="calculator__btn">
                <button type="submit" className="submit__calc" >Calcular</button>
              </div>
            </form>
              {tarifa.map((data) => {
                    return(
                      <div className="result__wrapper">
                      <h3 className="header_result"> Resultados </h3>
                        <p className="calculator__result">
                          <h5 className="result__ComPlano">Valor com Plano: R$ {Math.round(data.valorTotalComPlano)}</h5>
                          <h5 className="result__SemPlano">Valor sem Plano: R$ {Math.round(data.valorTotalSemPlano)}</h5>
                        </p>
                      </div>
                  )})}
            </div>
          </main>
      </div>
  )
}

export default Calculator