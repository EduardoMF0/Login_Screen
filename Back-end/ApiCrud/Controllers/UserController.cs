﻿using ApiCrud.Models;
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

            var user = new User(userAdd.Nome, userAdd.Email, userAdd.Senha, userAdd.Estado, userAdd.Data_nascimento, userAdd.Data_criacaoConta);

            _userRepository.add(user);
            return Ok();

            /*            return Ok(new { Message = "Funcionando !!!" });
            */
        }

    }
}
