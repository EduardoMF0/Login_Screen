using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiCrud.Models
{
    [Table("usuariosteste")]
    public class UserAdd
    {

        public long id { get; private set; }

        public string Nome { get;  set; }

        public string Email { get;  set; }

        public DateTime data_c { get; set; }

        public UserAdd() { 
        
        }
    }
}
