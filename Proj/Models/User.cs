using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiCrud.Models
{
    [Table("usuariosteste")]

    public class User
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; private set; }

        public string Nome { get; private set; }

        public string Email { get; private set; }

        public string Ola { get; private set; }



        [DataType(DataType.Date)]
        public DateOnly data_c { get; private set; }


        public User(string Nome, string Email)
        {
            this.Nome = Nome;
            this.Email = Email;
            data_c = DateOnly.FromDateTime(DateTime.Now);
        }
    }
}
