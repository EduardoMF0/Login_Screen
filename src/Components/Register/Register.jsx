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
    

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        estado: "",
        dta_nascimento: ""
    });

    const selectValue = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const submitToApi = async (e) => {
        e.preventDefault();
        console.log("Botão submit clicado! Enviando requisição...");

        console.log("Estado atual do formData:", formData);

        const formattedData = {
            nome: formData.nome,
            email: formData.email,
            senha: formData.senha,
            estado: formData.estado,
            dta_nascimento: new Date(formData.dta_nascimento).toISOString()
        };
    
        try {
            const response = await axios.post(
                "https://localhost:7107/api/user",
                formattedData,
                { headers: { "Content-Type": "application/json" } } 
            );
            
            console.log(response.data);
            alert("deu certo");

            }catch (error) {
                console.error("Erro ao cadastrar usuário", error.response?.data || error.message);
            }
    };

        const [type, setTipo] = useState("password");
        const [imagem, setImagem] = useState("src/assets/eye-slash.svg"); 
      
        const trocarImagem = () => {
          if (type === "password") {
            setTipo("text");
            setImagem("src/assets/eye.svg");
          } else {
            setTipo("password");
            setImagem("src/assets/eye-slash.svg"); 
          }
        };



    return(

    <div > 
        <div id="background-page2">

            <div className="box-page2">
                
                <a href="" onClick={(ToLogin)} id='back-button'></a>

                <section className='title-page2'>
                    <h1>Crie Sua Conta</h1>
                    <h2>Facilite sua compra Criando uma conta</h2>
                </section>

                <form onSubmit={submitToApi} id='form-page2'>

                    <div className='category-page2'>
                        <label htmlFor='nameId'>Nome:</label>
                        <input type="text" placeholder='Digite seu Nome' name="nome" id='nameId' value={formData.nome} onChange={selectValue}/>
                    </div>
                    
                    <div className='category-page2'>
                        <label htmlFor='email'>Email:</label>
                        <input type="email" placeholder='Digite sua Email' name="email" id='email' value={formData.email} onChange={selectValue} required/>
                    </div>

                    <div id='state-date'>
                        <div id='date-div-page2'>
                            <label htmlFor='date'>Data de Nascimento:</label>
                            <input type="date" id='date' name="dta_nascimento" value={formData.dta_nascimento} onChange={selectValue} required/>
                    </div>

                        <div>
                            <label htmlFor='state'>Estado:</label>
                            <select id="state" name="estado" value={formData.estado} onChange={selectValue}> 
                            {states.map((state, index) => (
                                <option key={index} value={state}>{state} </option>
                            ))}
                            </select>
                        </div>
                    </div>

                    <div className='category-page2'>
                        <label htmlFor='password'>Senha:</label>
                        <img src={imagem} alt="show" id="show-eye" onClick={trocarImagem}/>
                        <input type={type} placeholder='Digite sua Senha' name="senha" id='password' onChange={selectValue} required/>
                    </div>
                        
                    <div className='category-page2'>       
                        <label htmlFor='passwordConfirm'>Confirme sua Senha:</label>
                        <input type="password" placeholder='Confirme sua Senha' id='passwordConfirm' required/>
                    </div>    

                    <button type='submit' id='register-button'>Criar Conta</button>
                    
                </form>
            </div>

        </div>

    </div> 
    )
}

export default Register