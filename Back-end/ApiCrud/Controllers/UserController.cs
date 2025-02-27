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

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpPost]
        public IActionResult add(UserAdd userAdd)
        {

            var user = new User(userAdd.Nome, userAdd.Email);

            _userRepository.add(user);

            return Accepted();

            /*            try
                        {
                            var user = new User(userAdd.Nome, userAdd.Email);
                            _userRepository.add(user);
                            return CreatedAtAction(nameof(add), new { id = user.Id }, user);
                        }
                        catch (Exception ex)
                        {
                            return StatusCode(500, $"Erro no servidor: {ex.Message}");
                        }

                    }*/

        }

    }
}
