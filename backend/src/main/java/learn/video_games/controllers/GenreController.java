package learn.video_games.controllers;

import learn.video_games.domain.GenreService;
import learn.video_games.models.Genre;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/genre")
public class GenreController {

    private final GenreService service;

    public GenreController(GenreService service) {
        this.service = service;
    }

    @GetMapping
    public List<Genre> findAll() {
        return service.findAll();
    }

    @GetMapping("/{genreId}")
    public Genre findById(@PathVariable int genreId) {
        return service.findById(genreId);
    }
}
