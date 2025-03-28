import './form.css'
import { useNavigate } from "react-router-dom";
import { useState} from "react";
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
    const [userInfo, setuserInfo] = useState({});


    const selectValue = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const funciona = async () => {
        
        const formattedData = {
            email: formData.email,
            senha: formData.senha,
        };
        var user;

        try {
            const response = await axios.post(
                "https://localhost:7107/api/user/login",
                formattedData,
                { headers: { "Content-Type": "application/json" } } 
            ) 
        
            user = response.data[0];

            setuserInfo(user)
            
            console.log(response.data);
            console.log(response.status);

            var status = response.status;

            }
            catch (error) {
                console.error("Erro ao cadastrar usuário", error.response?.data || error.message);
            }
        
        if(status == 200){
            navigate("/loggedIn", { state: { userInfo: user } });
        }
    };
    

    return(
        
        <div > 

            <div id='background-page1'>

                <div className="box-page1">
                        
                    <section className='title-page1'>
                        <h1>Acesse Sua Conta</h1>
                        <h2>Facilite seu acesso logando na sua conta</h2>
                    </section>
                    {/* onSubmit={acessButton} */}
                    <form id='form-page1'  >
                        <div className='category-page1'>
                            <label htmlFor='email' className='label-page1'>Email:</label>
                            <input type="text" name="email" id="email" placeholder='Digite seu Email' value={formData.email} onChange={selectValue} required/>
                        </div>

                        <div className='category-page1'>
                            <label htmlFor='psw' className='label-page1'>Senha:</label>
                            <input type="text" name="senha" id='psw' placeholder='Digite sua Senha' value={formData.senha} onChange={selectValue} required/>
                        </div>
                    
                        <a href='' id='restore-psw'>Esqueci Minha Senha</a>
                    </form>

                    <button type='submit' value="Submit" id='login-button' onClick={funciona}>Entrar</button>

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