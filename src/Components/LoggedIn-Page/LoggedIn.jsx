import './loggedIn.css'

import {  useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
;

function LoggedIn (){

    const location = useLocation();
    const navigate = useNavigate();
    // const [userInfo, setUserInfo] = useState(null);



    
    var userInfo  = location.state?.userInfo;
    console.log(userInfo)

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (!storedUser) {
            navigate("/", { replace: true });
        }
    }, [navigate]);

    if (!userInfo) {
        const stored = localStorage.getItem("user");
        if (stored) {
            userInfo = JSON.parse(stored);
        }
    }
    
    const exitButton = () =>{
        localStorage.removeItem("user");

        navigate("/");
    };

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
                                <p id='first'>Nome:</p>
                                <div className='category'>{userInfo.nome}</div>
                            </div>
                            
                            <div className='title'>
                                <p id='p-bottom'>Email:</p>
                                <div className='category'>{userInfo.email}</div>
                            </div>
                           
                        </div>
                        
                        <div className='box'>

                            <div>
                                <p>Data de Nascimento</p>
                                <div className='category'>{dataFormat}</div>
                            </div>
                            
                            <div className='title'>
                                <p id='p-bottom'>Estado:</p>
                                <div className='category'>{userInfo.estado}</div>
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