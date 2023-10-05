package learn.video_games.controllers;

import learn.video_games.domain.GenreService;
import learn.video_games.domain.PlatformService;
import learn.video_games.models.Genre;
import learn.video_games.models.Platform;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/platform")
public class PlatformController {

    private final PlatformService service;

    public PlatformController(PlatformService service) {
        this.service = service;
    }

    @GetMapping
    public List<Platform> findAll() {
        return service.findAll();
    }

    @GetMapping("/{platformId}")
    public Platform findById(@PathVariable int platformId) {
        return service.findById(platformId);
    }
}
