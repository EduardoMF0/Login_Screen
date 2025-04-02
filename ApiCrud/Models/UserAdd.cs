using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiCrud.Models
{

    [Table("cadastrados")]

    public class UserAdd
    {
        public long id { get; private set; }

        public string? nome { get; set; }

        [Required]
        public string email { get; set; }

        [Required]
        public string senha { get; set; }

        public string? estado { get; set; }

        [Required]
        public DateTime dta_nascimento { get; set; }

        public DateTime dta_criacaoconta { get; set; }

        public UserAdd(string email, string senha)
        {
            this.email = email ?? throw new ArgumentNullException(nameof(email));
            this.senha = senha ?? throw new ArgumentNullException(nameof(senha));
        }

    }
}
