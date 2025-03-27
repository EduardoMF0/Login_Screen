import './loggedIn.css'

function LoggedIn (){

    return(
        <div>
            <div id="background-page">
                
                <div className="box-page">
                    <img src='./src\assets\icon.jpg' alt='' id='icon'></img>
                    
                    <div className='data-box'>
                        <div className='box'>

                            <div>
                                <p>Nome:</p>
                                <div className='outro'>Nome</div>
                            </div>
                            
                            <div className='title'>
                                <p>Email:</p>
                                <div className='outro'>Email</div>
                            </div>
                           
                        </div>
                        
                        <div className='box'>

                            <div>
                                <p>Data de Nascimento</p>
                                <div className='outro'>Data de Nascimento</div>
                            </div>
                            
                            <div className='title'>
                                <p>Estado:</p>
                                <div className='outro'>Estado</div>
                            </div>
                            
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default LoggedIn