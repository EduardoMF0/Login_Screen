using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiCrud.Models
{

    public class UserAdd
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; private set; }

        public string Nome { get; private set; }

        public string Email { get; private set; }

        public string Senha { get; private set; }

        public string Estado { get; private set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime Data_nascimento { get; private set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime Data_criacaoConta { get; private set; }
    }
}
