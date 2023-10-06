package learn.video_games.controllers;

import learn.video_games.domain.Result;
import learn.video_games.domain.UserService;
import learn.video_games.models.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    /*
    @GetMapping("/{userName}")
    public User findByName(@PathVariable String userName) {
        return service.findByName(userName);
    }

     */

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody User user) {
        Result<User> result = service.add(user);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }
/*
    @PutMapping("/{userId}")
    public ResponseEntity<Object> update(@PathVariable int agentId, @RequestBody Agent agent) {
        if (agentId != agent.getUserId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Result<Agent> result = service.update(agent);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ErrorResponse.build(result);

    }

 */
}

