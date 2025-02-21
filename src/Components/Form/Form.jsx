import './form.css'

function Form(){

    return(
        
        <div > 

            <div id='background'></div>

            <div className="box-page1">
                     
                <section className='title'>
                    <h1>Acesse Sua Conta</h1>
                    <h2>Facilite sua compra logando na sua conta</h2>
                </section>

                <form id='form-page1'>
                    <label htmlFor='name' className='label-page1'>Email:</label>
                    <input type="text" id="name" className='input-page1' placeholder='Digite seu Email'/>

                    <label htmlFor='psw' className='label-page1'>Senha:</label>
                    <input type="text" id='psw' className='input-page1' placeholder='Digite sua Senha' />
                </form>

                <button type='submit'>Entrar</button>
            </div>

        </div>

    );
};

export default Form