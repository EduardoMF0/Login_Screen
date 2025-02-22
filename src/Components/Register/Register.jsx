import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import './Register.css'

function Register(){

    const navigate = useNavigate(); 
    const ToLogin = ()=> {
      navigate("/");
    };

    const [states, setStates] = useState([]);

    useEffect(() => {
        axios
          .get("https://brasilapi.com.br/api/ibge/uf/v1")
          .then(res => {
            const statesName = res.data.map(state => state.sigla).sort(); 
            setStates(statesName);
          })
          .catch(error => console.error("Erro ao buscar os estados:", error)); 
      }, []);

    return(

    <div > 

        <div id="background-page2">

            <div className="box-page2">
                
                <a href="" onClick={(ToLogin)} id='back-button'></a>

                <section className='title-page2'>
                    <h1>Crie Sua Conta</h1>
                    <h2>Facilite sua compra Criando uma conta</h2>
                </section>

                <form action="" id='form-page2'>

                    <div className='category-page2'>
                        <label htmlFor='name'>Nome:</label>
                        <input type="text" placeholder='Digite seu Nome' id='name'/>
                    </div>
                    
                    <div className='category-page2'>
                        <label htmlFor='email'>Email:</label>
                        <input type="email" placeholder='Digite sua Email' id='email'/>
                    </div>

                    <div id='state-date'>
                        <div id='date-div-page2'>
                            <label htmlFor='date'>Data de Nascimento:</label>
                            <input type="date" id='date'/>
                        </div>

                        <div>
                            <label htmlFor='state'>Estado:</label>
                            <select name="states" id="state">
                            {states.map((state, index) => (
                                <option key={index} value={state}>{state}</option> // Corrigido erro no map
                            ))}
                            </select>
                        </div>
                    </div>

                    <div className='category-page2'>
                        <label htmlFor='password'>Senha:</label>
                        <input type="password" placeholder='Digite sua Senha' id='password'/>
                    </div>

                    <div className='category-page2'>       
                        <label htmlFor='passwordConfirm'>Confirme sua Senha:</label>
                        <input type="password" placeholder='Confirme sua Senha' id='passwordConfirm'/>
                    </div>    

                    <button type='submit' value="Submit" id='register-button'>Criar Conta</button>
                    
                </form>


            </div>

        </div>

    </div>
    
    )
}

export default Register