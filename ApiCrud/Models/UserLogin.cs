using System.ComponentModel.DataAnnotations;

namespace ApiCrud.Models
{
    public class UserLogin
    {
        [Required]
        public string email { get; set; }

        [Required]
        public string senha { get; set; }

        public UserLogin(string email, string senha)
        {
            this.email = email ?? throw new ArgumentNullException(nameof(email)); 
            this.senha = senha ?? throw new ArgumentNullException(nameof(senha)); 
        }
    }
}
