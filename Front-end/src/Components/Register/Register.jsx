import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import './Register.css'

function Register(){

    const navigate = useNavigate(); 
    const ToLogin = ()=> {
      navigate("/");
    };

    const [alertTxt, setAlertText] = useState("");
    const [states, setStates] = useState([]);
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        estado: "",
        dta_nascimento: ""
    });
    const [confirmPsw, setConfirmpsw] = useState("");
    const [typeP, setType] = useState("password");
    const [imagem, setImagem] = useState("/eye-slash.svg"); 
    const [loading, setLoading] = useState('Criar Conta');
    const [cursor, setCursor] = useState({cursor:'pointer'})
    

    // ----- Start Get API BR states

    useEffect(() => {
        axios.get("https://brasilapi.com.br/api/ibge/uf/v1")
          .then(res => {
            const statesName = res.data.map(state => state.sigla).sort(); 
            setStates(statesName);
          })
          .catch(error => console.error("Erro ao buscar os estados:", error)); 
    }, []);
    
    // ----- END

    // ----- target input values

    const selectValue = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const selectValuePsw = (e) =>{
        setConfirmpsw(e.target.value);
    }

    // ----- END


    // ----- Start Post to API

    const submitToApi = async (e) => {
        e.preventDefault();

        if(formData.senha != confirmPsw){
            setAlertText(`Erro! "Email e/ou Senha incorretos".`);
            setConfirmpsw("");
            return;
        }
        else{

            // verify date received
            const anoNascimento = new Date(formData.dta_nascimento).getFullYear();
            if (isNaN(anoNascimento) || anoNascimento < 1900 || anoNascimento > 2024) {
                setAlertText("Erro! Data de nascimento inválido.");
                return;
            }    

            setAlertText("")

            // data to API
            const formattedData = {
                nome: formData.nome,
                email: formData.email,
                senha: formData.senha,
                estado: formData.estado,
                dta_nascimento: new Date(formData.dta_nascimento).toISOString()
            };
        
            try {

                setAlertText("Aguarde...")
                setLoading(<><img src={"/load.svg"} alt="Carregando" id='load-svg'/></>)
                setCursor({cursor:'wait'})
                
                const response = await axios.post(
                    "https://backend-api-r4db.onrender.com/api/user/register",
                    formattedData,
                    { headers: { "Content-Type": "application/json" } } 
                );
                        
                console.log(response.status);
                
                // Navigate
                setTimeout(()=>{
                    ToLogin()
                },2000)
                
            }
            catch (error) {            
                if (error.request) {
                    setAlertText("Erro no servidor! Tente novamente mais tarde.");    
                }

                if (error.response) {
                    if (error.response.status == 404 || error.response.status == 400) {
                        setAlertText("Email Já cadastrado no sistema.");
                        
                        //reset inputs
                        setFormData({
                            nome: "",
                            email: "",
                            senha: "",
                            estado: "",
                            dta_nascimento: ""
                        });
                        setConfirmpsw("");

                        } 
                }

                // alterations in button and cursor
                setLoading("Criara Conta")
                setCursor({cursor:'auto'})
                };      
        };
    };

    // ----- END


    // ----- Start Button show password
      
        const trocarImagem = () => {
          if (typeP === "password") {
            setType("text");
            setImagem("/eye.svg");
          } else {
            setType("password");
            setImagem("/eye-slash.svg"); 
          }
        };

    // ----- END

        
    return(

    <div > 
        <div id="background-page2" >

            <div className="box-page2">
                
                <a href="" onClick={(ToLogin)} id='back-button'></a>

                <section className='title-page2'>
                    <h1>Crie Sua Conta</h1>
                    <h2>Facilite seu acesso criando uma conta</h2>
                </section>

                <div id="alert-re">
                        <div id="background"></div>
                        <p style={{ color: alertTxt === "Aguarde..." ? "#d8bf02" : "#ff3d3d" }}>{alertTxt} </p>                    
                </div>

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
                            <option value="" hidden></option>
                            {states.map((state, index) => (
                                <option key={index} value={state}>{state} </option>
                            ))}
                            </select>
                        </div>
                    </div>

                    <div className='category-page2'>
                        <label htmlFor='password'>Senha:</label>
                        <img src={imagem} alt="show" id="show-eye" onClick={trocarImagem}/>
                        <input type={typeP} placeholder='Digite sua Senha' name="senha" id='password' value={formData.senha} onChange={selectValue} required/>
                    </div>
                        
                    <div className='category-page2'>       
                        <label htmlFor='passwordConfirm'>Confirme sua Senha:</label>
                        <input type="password" placeholder='Confirme sua Senha' id='passwordConfirm' value={confirmPsw} onChange={selectValuePsw} required/>
                    </div>    

                    <button type='submit' id='register-button' style={cursor}>{loading}</button>
                    
                </form>
            </div>

        </div>

    </div> 
    )
}

export default Register