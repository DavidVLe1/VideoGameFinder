package learn.video_games.domain;

import learn.video_games.data.GenreRepository;
import learn.video_games.models.Genre;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class GenreService {

    private final GenreRepository repository;

    public GenreService(GenreRepository repository) {
        this.repository = repository;
    }

    public List<Genre> findAll() {
        return repository.findAll();
    }

    public Genre findById(int genreId) {
        return repository.findById(genreId);
    }

}
