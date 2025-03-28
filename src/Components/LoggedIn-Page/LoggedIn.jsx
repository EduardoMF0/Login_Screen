import './loggedIn.css'

import { useEffect } from 'react'
import { useLocation } from "react-router-dom";
;

function LoggedIn (){

    const location = useLocation();

    useEffect(() => {
        // console.log(userInfo.nome)
    });
    const userInfo  = location.state?.userInfo || "Não encontrado";

    const dataOriginal = new Date(userInfo.dta_nascimento);
    const dataFormat = new Intl.DateTimeFormat("pt-BR").format(dataOriginal);
    
    return(
        <div>
            <div id="background-page">
                
                <div className="box-page">
                    <img src='./src\assets\icon.jpg' alt='' id='icon'></img>
                    
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

                </div>

            </div>
        </div>
    )
    
}


export default LoggedIn