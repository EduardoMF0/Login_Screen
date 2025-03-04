using ApiCrud.Models;

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
    }
}
