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
          public List<User> Get(string email)
        {

            /*var query = _context.Users.ToList();
*/
            var query = _context.Users.AsQueryable();

            query = query.Where(u => (u.email == email));

            return query.ToList();

        }
    }
}
