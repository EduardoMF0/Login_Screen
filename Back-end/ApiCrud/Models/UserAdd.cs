using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiCrud.Models
{

    public class UserAdd
    {
        public long id { get; private set; }

        public string nome { get; set; }

        public string email { get; set; }

        public string senha { get; set; }

        public string estado { get; set; }
/*
        [DataType(DataType.Date)]
        public DateOnly dta_nascimento { get; set; }*/

        [DataType(DataType.Date)]
        public DateOnly dta_criacaoconta { get; set; }
        public UserAdd()
        {

        }
    }
}
