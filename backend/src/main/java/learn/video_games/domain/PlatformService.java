package learn.video_games.domain;

import learn.video_games.data.GenreRepository;
import learn.video_games.data.PlatformRepository;
import learn.video_games.models.Genre;
import learn.video_games.models.Platform;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class PlatformService {

    private final PlatformRepository repository;

    public PlatformService(PlatformRepository repository) {
        this.repository = repository;
    }

    public List<Platform> findAll() {
        return repository.findAll();
    }

    public Platform findById(int platformId) {
        return repository.findById(platformId);
    }

}
