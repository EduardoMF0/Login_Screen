using BCrypt.Net;

namespace ApiCrud.Data
  
{
    public static class PasswordControl
    {
        public static string HashPassword(string senha)
        {
            return BCrypt.Net.BCrypt.HashPassword(senha, 11);
        }

        public static bool VerifyPassword(string userSenha, string senhaHash)
        {
            return BCrypt.Net.BCrypt.Verify(userSenha, senhaHash);
        }
    }
}
