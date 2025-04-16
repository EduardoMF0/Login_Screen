import './loggedIn.css'

// import {  useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
;

function LoggedIn (){

    const location = useLocation();
    const navigate = useNavigate();


    const exitButton = () =>{
        localStorage.removeItem("user");

        navigate("/");
    };
    
    var userInfo  = location.state?.userInfo;


    console.log(userInfo)

    if (!userInfo) {
        const stored = localStorage.getItem("user");
        if (stored) {
            userInfo = JSON.parse(stored);
        }
    }

    console.log(userInfo);

    if (userInfo.dta_nascimento && !isNaN(new Date(userInfo.dta_nascimento))) {
        var dataFormat = new Date(userInfo.dta_nascimento);
        dataFormat = new Intl.DateTimeFormat("pt-BR").format(dataFormat);
    }

    return(
        <div>
            <div id="background-page">
                
                <div className="box-page">
                    <img src='/icon.jpg' alt='' id='icon'></img>
                    
                    <div className='data-box'>
                        <div className='box'>

                            <div>
                                <p>Nome:</p>
                                <div className='outro'>{userInfo.nome}</div>
                            </div>
                            
                            <div className='title'>
                                <p>Email:</p>
                                <div className='outro'>{userInfo.email}</div>
                            </div>
                           
                        </div>
                        
                        <div className='box'>

                            <div>
                                <p>Data de Nascimento</p>
                                <div className='outro'>{dataFormat}</div>
                            </div>
                            
                            <div className='title'>
                                <p>Estado:</p>
                                <div className='outro'>{userInfo.estado}</div>
                            </div>
                            
                        </div>

                    </div>

                <button type='submit' value="button" id='exit-button' onClick={exitButton}>Sair</button>
                
                </div>

            </div>
        </div>
    )
    
}


export default LoggedIn