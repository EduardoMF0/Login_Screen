using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiCrud.Models
{
    [Table("usuariosteste")]
    public class UserAdd
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long id { get; private set; }

        public string Nome { get;  set; }

        public string Email { get;  set; }

        public UserAdd() { 
        
        }
    }
}
