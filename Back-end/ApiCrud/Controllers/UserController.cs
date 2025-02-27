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
        public IActionResult add()
        {

            var ola = new User();
            return Ok(new { Message = "Funcionando !!!" });
        }
    
}
}
