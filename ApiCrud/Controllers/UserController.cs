using ApiCrud.Models;
using Microsoft.AspNetCore.Mvc;
using BCrypt.Net;


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
        public IActionResult addDbUser([FromBody] UserAdd userAdd) {

            if (userAdd == null)
                return BadRequest("Os dados enviados são inválidos!");

            var user = new User(userAdd.nome, userAdd.email, userAdd.senha, userAdd.estado, userAdd.dta_nascimento);

            var getSeExist =  GetVerify(userAdd.email);

            if (getSeExist is NotFoundResult)
            {
                _userRepository.add(user);

                return Ok(new { Message = "Funcionando !!!" });
            }

            return BadRequest(new { Message = userAdd.nome, userAdd.email, userAdd.senha });

        }

        [HttpGet("verify/{email}")]
        public IActionResult GetVerify(string email)
        {

            var users = _userRepository.GetVerifyDb(email);
            
            if (users.Any())
            {
                return Ok();
            }

            return NotFound();

        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] UserLogin userLogin)
        {

            var users = _userRepository.LoginVerifyDb(userLogin.email, userLogin.senha);

            if (users.Any())
            {
                return Ok(users);
            }

            return NotFound();


        }

    }
}
