﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using BCrypt.Net;
using static BCrypt.Net.BCrypt;


namespace ApiCrud.Models
{
    [Table("usuarios_registrados")]

    public class User
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long id { get; private set; }

        public string? nome { get; set; }

        [Required]
        public string email { get; set; }

        [Required]
        [JsonIgnore]
        public string senha { get;  private set; }

        public string? estado { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime dta_nascimento { get; set; }

        [DataType(DataType.Date)]
        [JsonIgnore]
        public DateTime dta_criacaoconta { get; set; }

        public User(string nome, string email, string senha, string estado, DateTime dta_nascimento)
        {
            this.nome = nome;
            this.email = email ?? throw new ArgumentNullException(nameof(email)); ;
            this.senha = senha ?? throw new ArgumentNullException(nameof(senha)); ;
            this.estado = estado ?? throw new ArgumentNullException(nameof(estado)); ;
            this.dta_nascimento = dta_nascimento;
            dta_criacaoconta = DateTime.UtcNow;
        }

    }
}
