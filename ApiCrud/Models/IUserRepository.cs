namespace ApiCrud.Models
{
    public interface IUserRepository
    {
        public void add(User user);

/*        public List<User> Get(User email, User senha);
*/
        public List<User> Get(string email);
    }
}
