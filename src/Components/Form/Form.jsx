import './form.css'
import { useNavigate } from "react-router-dom";

function Form(){

    const navigate = useNavigate();
  
    const ToRegister = () => {
      navigate("/register"); // Redireciona para a página de produtos
    };

    return(
        
        <div > 

            <div id='background-page1'>

                <div className="box-page1">
                        
                    <section className='title-page1'>
                        <h1>Acesse Sua Conta</h1>
                        <h2>Facilite sua compra logando na sua conta</h2>
                    </section>

                    <form id='form-page1'>
                        <div className='category-page1'>
                            <label htmlFor='name' className='label-page1'>Email:</label>
                            <input type="text" id="name" placeholder='Digite seu Email'/>
                        </div>

                        <div className='category-page1'>
                            <label htmlFor='psw' className='label-page1'>Senha:</label>
                            <input type="text" id='psw' placeholder='Digite sua Senha' />
                        </div>
                    
                        <a href='' id='restore-psw'>Esqueci Minha Senha</a>

                    </form>

                    <button type='submit' value="Submit" id='login-button'>Entrar</button>

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