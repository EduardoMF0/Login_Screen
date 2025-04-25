using ApiCrud.Data;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;


namespace ApiCrud.Models
{
    [Table("cadastrados")]

    public class User
    {

        [Key]
        [JsonIgnore]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long id { get; private set; }

        public string? nome { get; set; }

        public string email { get; set; }

        [JsonIgnore]
        public string senha { get; set; }

        public string? estado { get; set; }

        [DataType(DataType.Date)]
        public DateTime dta_nascimento { get; set; }

        [DataType(DataType.Date)]
        [JsonIgnore]
        public DateTime dta_criacaoconta { get; set; }

        public User() { }

        public User(string nome, string email, string senha, string estado, DateTime dta_nascimento)
        {
            this.nome = nome;
            this.email = email;
            this.senha = PasswordControl.HashPassword(senha);
            this.estado = estado;
            this.dta_nascimento = dta_nascimento;
            dta_criacaoconta = DateTime.UtcNow;
        }

    }
}
