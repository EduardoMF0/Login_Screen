using ApiCrud.Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace ApiCrud.Data
{
    public class UserRepository : IUserRepository
    {

        private readonly DataContext _context;

        public UserRepository(DataContext context) 
        {
            _context = context;
        }

        public void add(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }        

        public User? LoginVerifyDb(string email)
        {
            return _context.Users.FirstOrDefault(u => u.email == email);

        }
    }
}
