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

          public List<User> GetVerifyDb(string email)
        {

            var query = _context.Users.AsQueryable();

            query = query.Where(u => (u.email == email));

            return query.ToList();
        }

        public List<User> LoginVerifyDb(string email, string senha)
          {
            var query = _context.Users.AsQueryable();

/*            query = query.Where(u => (u.email == email) && (u.senha == senha));*/

            return query.ToList();
          }
    }
}
