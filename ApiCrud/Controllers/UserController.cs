using ApiCrud.Models;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;

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


        [HttpPost]
        public async Task<IActionResult> addDbUser([FromBody] UserAdd userAdd) {

            if (userAdd == null)
                return BadRequest("Os dados enviados são inválidos!");

            var user = new User(userAdd.nome, userAdd.email, userAdd.senha, userAdd.estado, userAdd.dta_nascimento);

            var getSeExist = await GetVerify(userAdd.email);

            if (getSeExist is NotFoundResult)
            {
                _userRepository.add(user);

                return Ok(new { Message = "Funcionando !!!" });
            }

            return BadRequest(new { Message = "Esse email já está cadastrado!" });

        }

        [HttpGet("verify/{email}")]
        public async Task<IActionResult> GetVerify(string email)
        {

            var users = _userRepository.GetVerify(email);

            if (users.Any())
            {
                return Ok();
            }

            return NotFound(users);

        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserLogin userLogin)
        {

            var users = _userRepository.LoginVerifyDb(userLogin.email, userLogin.senha);

            if (users.Any())
            {
                return Ok(users);
            }

            return NotFound(new { Message = "Problemas" });


        }

    }
}
