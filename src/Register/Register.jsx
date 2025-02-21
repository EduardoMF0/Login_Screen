import './Register.css'

function Register(){

    return(

    <div > 

        <div id="background-page2">

            <div className="box-page2">
                    
                <section className='title-page2'>
                    <h1>Crie Sua Conta</h1>
                    <h2>Facilite sua compra Criando uma conta</h2>
                </section>

                <form action="" id='form-page2'>

                    <div className='category-page2'>
                        <label htmlFor='name'>Nome:</label>
                        <input type="text" placeholder='Digite seu Nome' id='name'/>
                    </div>
                    
                    <div className='category-page2'>
                        <label htmlFor='email'>Email:</label>
                        <input type="email" placeholder='Digite sua Email' id='email'/>
                    </div>

                    <div id='state-date'>
                        <div id='date-div'>
                            <label htmlFor='date'>Data de Nascimento:</label>
                            <input type="date" id='date'/>
                        </div>

                        <div>
                            <label htmlFor='state'>Estado:</label>
                            <select name="cars" id="state"></select>
                        </div>
                    </div>

                    <div className='category-page2'>
                        <label htmlFor='password'>Senha:</label>
                        <input type="password" placeholder='Digite sua Senha' id='password'/>
                    </div>

                    <div className='category-page2'>       
                        <label htmlFor='passwordConfirm'>Confirme sua Senha:</label>
                        <input type="password" placeholder='Confirme sua Senha' id='passwordConfirm'/>
                    </div>    

                    <button type='submit' value="Submit">Criar Conta</button>
                    
                </form>


            </div>

        </div>

    </div>
    
    )
}

export default Register