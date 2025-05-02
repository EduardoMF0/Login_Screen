# 📋 Página de Login e Cadastro
### Projeto de autenticação de usuários, incluindo desenvolvimento de página de login e cadastro, criação de API REST e estruturação de banco de dados.

### ⚠️ Avisos!
**1º -** Como tanto a API quanto o banco de dados estão hospedados remotamente, pode haver um tempo de resposta de até 30 segundos para conclusão de algumas ações. 

**2º -** Por segurança, não utilize e-mails ou senhas reais ao testar a aplicação.

**3º -** Se aparecer uma mensagem de erro do servidor, aguarde alguns minutos e tente novamente. Caso o erro persista, aguarde algumas horas antes de tentar novamente.

❗ **Se tiver sugestões de melhorias, ficarei muito grato em recebê-las e conversar a respeito.
Sinta-se à vontade para entrar em contato comigo pelo LinkedIn, disponível no meu perfil!** ❗

### :wrench: Tecnologias/Linguagens:
**Front:** Html, Css, Javascript, React.

**Back-end:** C#.

**Banco de dados:** PostegreSQL.

**Hospedagens:** Vercel(Aplicação), Render(API), Tembo(PostgreSQL).

 ## Aplicação:

Este projeto consiste em uma página de login e cadastro com uma interface simples, desenvolvida em React, com foco em testar requisições HTTP para uma API construída em C# utilizando o Entity Framework.O armazenamento dos dados é feito em um banco de dados PostgreSQL.
Durante o desenvolvimento, busquei aplicar boas práticas de segurança em todas as partes da aplicação, garantindo a proteção dos dados dos usuários.

 ### 💾 Cadastro
• Formulário com envio de dados para a API, incluindo verificação de e-mail e armazenamento no banco de dados.

• As senhas são criptografadas utilizando o pacote BCrypt.Net, garantindo maior segurança no armazenamento.

• Os campos "Nome" e "Estado" são opcionais.

<img src="/Front-end/public/cadastro.gif">


### 🔒 Login
• Os dados enviados pelo formulário são verificados no banco de dados. A comparação da senha é feita entre a informada pelo usuário e a versão criptografada armazenada, garantindo a segurança da autenticação.

• O formulário realiza validação e não permite o envio de campos vazios.

<img src="/Front-end/public/login.gif">


## 🔓 Pagina do Usuário
• Alguns dados retornados na resposta da requisição de login são armazenados no LocalStorage. Com isso, ao acessar novamente a página de login no mesmo navegador, o usuário é redirecionado automaticamente para sua área autenticada.

<img src="/Front-end/public/tela_usuario.png">
