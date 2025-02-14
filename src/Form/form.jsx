import './Form.css'

function Form(){

    return(
        <div className="box1">
            <h1>Acesse Sua Conta</h1>
            <h2>Facilite sua compra logando na sua conta</h2>

            <section>
                <p>Email:</p>
                <input type="text" />
            </section>

            <section>
                <p>Senha:</p>
                <input type="text" />
            </section>

            <a href=''>Esqueceu sua Senha?</a>

            <button type='submit'>Entrar</button>
        </div>

    );
};

export default Form