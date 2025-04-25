namespace ApiCrud.Models
{
    public interface IUserRepository
    {
        public void add(User user);
        public User LoginVerifyDb(string email);

    }
}
