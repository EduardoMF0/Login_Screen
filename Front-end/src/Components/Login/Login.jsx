import './login.css'
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
    const [imagem, setImg] = useState("/eye-slash.svg"); 
    const [typeP, setType] = useState("password");
    const [cursorLogin, setCursorLogin] = useState({cursor:'pointer'})
    const [isSubmitting, setIsSubmitting] = useState(false);
    var user;


    // ----- target input values

    const selectValue = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    // ----- END

    // ----- Start Post to API

    const Login_function = async () => {

        const formattedData = {
            email: formData.email,
            senha: formData.senha,
        };

        if( !formattedData.email?.trim() || !formattedData.senha?.trim()){
            setAlertText(`Erro! "Email e/ou Senha estão vazios!".`);
            return;
        }

        // alterations in button, alert message and cursor
        setLoading(<><img src={"/load.svg"} alt="Carregando" id='load-svg'/></>)
        setAlertText("Aguarde...")
        setCursorLogin({cursor:'wait'})
  
        if (isSubmitting) return;
        setIsSubmitting(true); 

        try {
            const response = await axios.post(
                "https://backend-api-r4db.onrender.com/api/user/login",
                formattedData,
                { headers: { "Content-Type": "application/json" } } 
            ) 
        
            const user = response.data;

            setuserInfo(user)
            
            localStorage.setItem("user", JSON.stringify(user));

            var status = response.status;

            }
            catch (error) {                
                if (error.request) {
                    setAlertText("Erro no servidor! Tente novamente mais tarde.");    
                }

                if (error.response) {
                    if (error.response.status == 404 || error.response.status == 400) {
                        setAlertText("Email e/ou Senha incorretos.");
                    } 
                }

            // alterations in button and cursor
            setCursorLogin({cursor:'auto'})
            setLoading("Entrar")
        }
        
        // Navigate
        if(status == 200){
            navigate("/loggedIn", { state: { userInfo: user } });
        }
    };

    // ----- END

    // ----- Auto login if already logged

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);

            navigate("/loggedIn", { state: { userInfo: parsedUser }, replace: true });
        }
    }, [navigate]);

    // ----- END
    

    // ----- Start Button show password

    const ChangeImg = () => {
        if (typeP === "password") {
          setType("text");
          setImg("/eye.svg");
        } else {
          setType("password");
          setImg("/eye-slash.svg"); 
        }
      };

    // ----- END

    const AlertColorBgd = () => {
        if (!alertTxt) return "var(--color-white-page)";
        if (alertTxt === "Aguarde...") return "#ffe40f59";
        return "#f5232342";
    };

    return(
        
        <div > 

            <div id='background-page1'>

                <div className="box-page1">
                        
                    <section className='title-page1'>
                        <h1>Acesse Sua Conta</h1>
                        <h2>Facilite seu acesso logando na sua conta</h2>
                    </section>

                    <div id="alert-login" style={{ backgroundColor: AlertColorBgd() }}>
                        <div id="background"></div>
                        <p style={{ color: alertTxt === "Aguarde..." ? "#d8bf02" : "#ff3d3d" }}>
                            {alertTxt}
                        </p>                    
                    </div>

                    <form id='form-page1'  >
                        <div className='category-page1'>
                            <label htmlFor='email' className='label-page1'>Email:</label>
                            <input type="text" name="email" id="email" placeholder='Digite seu Email' value={formData.email} onChange={selectValue} required/>
                        </div>

                        <div className='category-page1'>
                            <label htmlFor='psw' className='label-page1'>Senha:</label>
                            <div className='input-container'>
                                <img src={imagem} alt="show" id="show-eye" onClick={ChangeImg}/>
                                <input type={typeP} name="senha" id='psw' placeholder='Digite sua Senha' value={formData.senha} onChange={selectValue} required/>
                            </div>
                        </div>
                    
                        {/* <a href='' id='restore-psw'>Esqueci Minha Senha</a> */}
                    </form>

                    <button type='submit' value="Submit" id='login-button' onClick={Login_function} 
                    style={cursorLogin}>{loading}</button>

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