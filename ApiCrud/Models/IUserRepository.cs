namespace ApiCrud.Models
{
    public interface IUserRepository
    {
        public void add(User user);
        public List<User> GetVerify(string email);
        public List<User> LoginVerifyDb(string email, string senha);

    }
}
