package learn.video_games.data;

import learn.video_games.models.Auth;
import learn.video_games.models.User;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface UserRepository {
    //List<User> findAll();

    int findByAuth(Auth userToAuth);

    User add(User user);

    /*

    boolean update(User user);

    @Transactional
    boolean deleteById(int userId);

     */
}

