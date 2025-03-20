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
        public async Task<IActionResult> add([FromBody] UserAdd userAdd) {

            if (userAdd == null)
                return BadRequest("Os dados enviados são inválidos!");

            var user = new User(userAdd.nome, userAdd.email, userAdd.senha, userAdd.estado, userAdd.dta_nascimento);

            var getSeExist = await Get(userAdd.email);

            if (getSeExist is NotFoundResult)
            {
                _userRepository.add(user);

                return Ok(new { Message = "Funcionando !!!" });
            }

            return BadRequest(new { Message = "Esse email já está cadastrado!" });

        }

        [HttpGet("{email}")]
        public async Task<IActionResult> Get(string email) {

            var users = _userRepository.Get(email);

            if (users.Any())
            {
                return Ok(users);
            }
            
            return NotFound();
            
        }

    }
}
