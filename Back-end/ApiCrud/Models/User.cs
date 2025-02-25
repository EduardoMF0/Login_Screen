using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiCrud.Models
{
    [Table("Users")]

    public class User
    {
        /*        [Key] */
        public int Id { get; private set; }

        public string Nome { get; private set; }

        public string Email { get; private set; }

        public string Senha { get; private set; }

        public string Estado { get; private set; }

        public string Data_nascimento { get; private set; }

        public string Data_criaçãoConta { get; private set; }
    }
}
