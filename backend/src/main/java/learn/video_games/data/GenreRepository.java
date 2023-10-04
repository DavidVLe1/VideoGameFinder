package learn.video_games.data;

import learn.video_games.models.Genre;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface GenreRepository {

    List<Genre> findAll();

    Genre findById(int genreId);
}
