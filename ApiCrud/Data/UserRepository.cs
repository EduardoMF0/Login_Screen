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

        /*        public List<User> Get(User email, User senha)
        */
          public List<User> Get(string estado, string senha)
        {
            var query = _context.Users.AsQueryable();

            query = query.Where(u => (u.email == estado) || u.senha.Contains(senha));   

            return query.ToList();

        }
    }
}
