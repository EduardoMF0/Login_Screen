using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiCrud.Models
{
    [Table("usuarios_registrados")]

    public class User
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long id { get; private set; }

        public string nome { get; private set; }

        public string email { get; private set; }

        public string senha { get; private set; }

        public string estado { get; private set; }

        
/*        [DataType(DataType.Date)]
        public DateOnly dta_nascimento { get; set; }
*/
/*        [Required]*/
        [DataType(DataType.Date)]
        public DateOnly dta_criacaoconta { get; private set; }

        public User(string nome, string email, string senha, string estado)
        {
            this.nome = nome;
            this.email = email;
            this.senha = senha;
            this.estado = estado;
/*            this.dta_nascimento = dta_nascimento;
*/            dta_criacaoconta = DateOnly.FromDateTime(DateTime.Now);
        }
    }
}
