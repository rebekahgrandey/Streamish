using Streamish.Models;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        void Delete(int id);
        List<UserProfile> GetAll();
        void Update(UserProfile userProfile);
        public UserProfile GetUserProfileByIdWithVideos(int id);

    }
}