using System.ComponentModel.DataAnnotations;

namespace ApiCrud.Models
{
    public class UserLogin
    {
        [Required]
        public string email { get; set; }

        [Required]
        public string senha { get; set; }

    }
}
