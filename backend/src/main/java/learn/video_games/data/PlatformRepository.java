package learn.video_games.data;

import learn.video_games.models.Genre;
import learn.video_games.models.Platform;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface PlatformRepository {

    List<Platform> findAll();

    Platform findById(int platformId);
}
