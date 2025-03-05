using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiCrud.Models
{
    [Table("usuariosteste")]

    public class User
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long id { get; private set; }

        public string nome { get; set; }

        public string email { get; set; }

        [DataType(DataType.Date)]
        public DateTime data_c { get; private set; }

        public User(string nome, string email)
        {
            this.nome = nome;
            this.email = email;
            this.email = email;
            data_c = DateTime.Now;
        }
    }
}
