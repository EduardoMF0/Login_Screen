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

        public DateTime data_c { get; set; }

        public UserAdd()
        {

        }

    }
}
