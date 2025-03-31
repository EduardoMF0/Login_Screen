using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiCrud.Models
{
    [Table("usuarios_registrados")]
    public class UserAdd
    {
        public long id { get; private set; }

        public string nome { get; set; }

        public string email { get; set; }

        public string senha { get; set; }

        public string estado { get; set; }

        public DateTime dta_nascimento { get; set; }

        public DateTime dta_criacaoconta { get; set; }

        public UserAdd(string senha)
        {

        }

    }
}
