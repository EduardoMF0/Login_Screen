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

    [HttpGet]
        public IActionResult GetUser()
        {
            return Ok(new { Message = "Lista de tarefas retornada com sucesso!" });
        }
    
}
}
