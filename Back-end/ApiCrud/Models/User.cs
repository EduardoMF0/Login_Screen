using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiCrud.Models
{
    [Table("usuarios")]

    public class User
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long id { get; private set; }

        public string nome { get; private set; }

        public string email { get; private set; }

        public string senha { get; private set; }

        public string estado { get; private set; }

/*        [Required]
*/        [DataType(DataType.Date)]
        public DateOnly data_nascimento { get; private set; }

/*        [Required]
*/      [DataType(DataType.Date)]
        public DateOnly data_criacaoconta { get; private set; }

        public User(string nome, string email, string senha, string estado, DateOnly data_nascimento)
        {
            this.nome = nome;
            this.email = email;
            this.senha = senha;
            this.estado = estado;
            this.data_nascimento = data_nascimento;
            data_criacaoconta = DateOnly.FromDateTime(DateTime.Now);
        }
    }
}
