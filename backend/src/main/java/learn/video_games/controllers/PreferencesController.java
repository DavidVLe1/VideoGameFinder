package learn.video_games.controllers;

import learn.video_games.domain.Result;
import learn.video_games.domain.PreferencesService;
import learn.video_games.models.Auth;
import learn.video_games.models.Preferences;
import learn.video_games.models.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.cors.reactive.PreFlightRequestHandler;

import java.util.List;

@RestController
@RequestMapping("/api/preferences")
public class PreferencesController {

    private final PreferencesService service;

    public PreferencesController(PreferencesService service) {
        this.service = service;
    }


    //@GetMapping("/{authenticate}")


    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Preferences preferences) {
        Result<Preferences> result = service.add(preferences);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @GetMapping("/{userId}")
    public Preferences getPreferences(@PathVariable int userId) {
        return service.queryAll(userId);
    }

}
