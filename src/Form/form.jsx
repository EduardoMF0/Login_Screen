import './Form.css'

function Form(){

    return(
        
        <div > 

            <div id='background'></div>

            <div className="box1">
                     
                <section className='title'>
                    <h1>Acesse Sua Conta</h1>
                    <h2>Facilite sua compra logando na sua conta</h2>
                </section>

                <section>
                    <p>Email:</p>
                    <input type="text" placeholder='Digite seu Email'/>

                    <p>Senha:</p>
                    <input type="text" placeholder='Digite sua Senha'/>

                    <a href=''>Esqueceu sua Senha?</a>
                </section>

                <button type='submit'>Entrar</button>
            </div>

        </div>

    );
};

export default Form