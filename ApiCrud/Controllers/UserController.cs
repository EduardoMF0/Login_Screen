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
        public IActionResult add(UserAdd userAdd)
        {

            var user = new User(userAdd.nome, userAdd.email, userAdd.senha, userAdd.estado, userAdd.dta_nascimento);

            _userRepository.add(user);

            return Accepted();

            /*            return Ok(new { Message = "Funcionando !!!" });
            */
        }

    }
}
