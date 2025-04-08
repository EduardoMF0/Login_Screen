using ApiCrud.Data;
using ApiCrud.Models;
using Microsoft.AspNetCore.Mvc;


namespace ApiCrud.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : ControllerBase
    {

        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository) {
            _userRepository = userRepository;
        }


        [HttpPost("register")]
        public IActionResult addDbUser([FromBody] UserAdd userData) {

            var existing = _userRepository.LoginVerifyDb(userData.email);

            if (existing == null)
            {
                return BadRequest(new { Message = userData.nome, userData.email, userData.senha });
            }

            var user = new User(userData.nome ?? "", userData.email, userData.senha, userData.estado ?? "", userData.dta_nascimento);

            return Ok(new { Message = "Funcionando !!!" });
            
        }


        [HttpPost("login")]
        public IActionResult Login([FromBody] UserLogin userLogin)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // Mostra exatamente o que está errado
            }

            var user = _userRepository.LoginVerifyDb(userLogin.email);

            bool senhaValida = PasswordControl.VerifyPassword(userLogin.senha, user.senha);

            if (user == null || !PasswordControl.VerifyPassword(userLogin.senha, user.senha))
            {
                return BadRequest(new { Message = "Email e/ou Senha incorretos" });
            }

            return Ok(user); ;

        }

    }
}
