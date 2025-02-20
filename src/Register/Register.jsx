import './Register.css'

function Register(){

    return(

    <div > 

        <div className="box1">
                 
            <section className='title'>
                <h1>Acesse Sua Conta</h1>
                <h2>Facilite sua compra logando na sua conta</h2>
            </section>

                <form action="">
                    <div>
                        <label htmlFor='name'>Nome:</label>
                        <input type="text" placeholder='Digite seu Nome' id='name'/>
                    </div>
                    
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type="email" placeholder='Digite sua Email' id='email'/>
                    </div>

                    <div>
                        <label htmlFor='state'>Estado:</label>
                        <select name="cars" id="state"></select>
                    </div>

                    <div>
                        <label htmlFor='date'>Data de Nascimento:</label>
                        <input type="date" id='date'/>
                    </div>

                    <div>
                        <label htmlFor='password'>Senha:</label>
                        <input type="password" placeholder='Digite sua Senha' id='password'/>
                    </div>

                    <div>       
                        <label htmlFor='passwordConfirm'>Confirme sua Senha:</label>
                        <input type="password" placeholder='Confirme sua Senha' id='passwordConfirm'/>
                    </div>    
                </form>

            <button type='submit'>Entrar</button>

        </div>

    </div>
    
    )
}

export default Register