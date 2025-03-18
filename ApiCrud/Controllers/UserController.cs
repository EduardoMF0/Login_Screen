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
        public IActionResult add([FromBody] UserAdd userAdd) {

            if (userAdd == null)
                return BadRequest("Os dados enviados são inválidos!");


            var user = new User(userAdd.nome, userAdd.email, userAdd.senha, userAdd.estado, userAdd.dta_nascimento);

            _userRepository.add(user);

            return Ok(new { Message = "Funcionando !!!" });

        }

        [HttpGet("{email}/{senha}")]
        public async Task <IActionResult> Get(string email, string senha)
        {
            var User = _userRepository.Get(email, senha);

            return Conflict(User);
        }
    }
}
