import './form.css'
import imgLoad from '/src/assets/load.svg';
import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from 'axios'


function Form(){

    const navigate = useNavigate(); 
    const ToRegister = () => {
      navigate("/register");
    };

    const [formData, setFormData] = useState({
        email: "",
        senha: "",
    });
    const [, setuserInfo] = useState({});
    const [loading, setLoading] = useState('Entrar');
    const [alertTxt, setAlertText] = useState("");


    const selectValue = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }



    var user;

    const funciona = async () => {

        setLoading(<><img src={imgLoad} alt="Carregando" id='load-svg'/></>)
        setAlertText("")
        
        const formattedData = {
            email: formData.email,
            senha: formData.senha,
        };

        try {
            const response = await axios.post(
                "https://localhost:7107/api/user/login",
                formattedData,
                { headers: { "Content-Type": "application/json" } } 
            ) 
        
            user = response.data[0];

            setuserInfo(user)
            
            localStorage.setItem("user", JSON.stringify(user));

            console.log(response.data);
            console.log(response.status);

            var status = response.status;

            }
            catch (error) {
                console.error("Erro ao cadastrar usuário", error.response?.data || error.message);
                
                if (error.response || error.request) {
                    setAlertText("Erro no servidor! Tente novamente mais tarde.");    
                }

                if (error.response) {
                    if (error.response.status === 404) {
                        setAlertText("Erro! Email e/ou Senha não encontrados.");
                    } 
                }

            setLoading("Entrar")
        }

        if(status == 200){
            navigate("/loggedIn", { state: { userInfo: user } });
        }
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);

            navigate("/loggedIn", { state: { userInfo: parsedUser }, replace: true });
        }
    }, [navigate]);


    return(
        
        <div > 

            <div id='background-page1'>

                <div className="box-page1">
                        
                    <section className='title-page1'>
                        <h1>Acesse Sua Conta</h1>
                        <h2>Facilite seu acesso logando na sua conta</h2>
                    </section>

                    <div id="alert-login">
                        <div id="background"></div>
                        <p>{alertTxt}</p>
                    </div>

                    <form id='form-page1'  >
                        <div className='category-page1'>
                            <label htmlFor='email' className='label-page1'>Email:</label>
                            <input type="text" name="email" id="email" placeholder='Digite seu Email' value={formData.email} onChange={selectValue} required/>
                        </div>

                        <div className='category-page1'>
                            <label htmlFor='psw' className='label-page1'>Senha:</label>
                            <input type="text" name="senha" id='psw' placeholder='Digite sua Senha' value={formData.senha} onChange={selectValue} required/>
                        </div>
                    
                        {/* <a href='' id='restore-psw'>Esqueci Minha Senha</a> */}
                    </form>

                    <button type='submit' value="Submit" id='login-button' onClick={funciona}>{loading}</button>
                    {/* <button type='submit' value="Submit" id='login-button2' onClick={funciona}>{loading}</button> */}


                    <div className='register-div'>
                        <h3>Não tem conta? Cadastre-se</h3>
                        <button type='text' onClick={ToRegister} id='register-page'>Cadastre-se</button>
                    </div>
                </div>

            </div>
        </div>

    );

};
    


export default Form