package learn.video_games.data;

import learn.video_games.models.User;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface UserRepository {
    //List<User> findAll();

    //User findByName(String userName);

    User add(User user);

    /*

    boolean update(User user);

    @Transactional
    boolean deleteById(int userId);

     */
}

