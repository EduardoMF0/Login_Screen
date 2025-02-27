using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiCrud.Models
{
    [Table("usuarios")]

    public class User
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; private set; }

        public string Nome { get; private set; }

        public string Email { get; private set; }

        public string Senha { get; private set; }

        public string Estado { get; private set; }

/*        [Required]
*/        [DataType(DataType.Date)]
        public DateTime Data_nascimento { get; private set; }

/*        [Required]
*/        [DataType(DataType.Date)]
        public DateTime Data_criacaoConta { get; private set; }

        public User(string Nome, string Email, string Senha, string Estado, DateTime Data_nascimento, DateTime Data_criacaoConta)
        {
            this.Nome = Nome;
            this.Email = Email;
            this.Senha = Senha;
            this.Estado = Estado;
            this.Data_nascimento = Data_nascimento;
            this.Data_criacaoConta = Data_criacaoConta;
        }
    }
}
