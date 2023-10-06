package learn.video_games.domain;

import learn.video_games.data.UserRepository;
import learn.video_games.models.Auth;
import learn.video_games.models.User;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }


    public int findByAuth(Auth userToAuth) {
        return repository.findByAuth(userToAuth);
    }


    public Result<User> add(User user) {
        Result<User> result = validate(user);
        if (!result.isSuccess()) {
            return result;
        }

        if (user.getUserId() != 0) {
            result.addMessage("userId cannot be set for `add` operation", ResultType.INVALID);
            return result;
        }

        user = repository.add(user);
        result.setPayload(user);
        return result;
    }

    /*

    public Result<Agent> update(Agent agent) {
        Result<Agent> result = validate(agent);
        if (!result.isSuccess()) {
            return result;
        }

        if (agent.getAgentId() <= 0) {
            result.addMessage("agentId must be set for `update` operation", ResultType.INVALID);
            return result;
        }

        if (!repository.update(agent)) {
            String msg = String.format("agentId: %s, not found", agent.getAgentId());
            result.addMessage(msg, ResultType.NOT_FOUND);
        }

        return result;
    }




    public boolean deleteById(int userId) {
        return repository.deleteById(userId);

    }


     */

    private Result<User> validate(User user) {
        Result<User> result = new Result<>();
        if (user == null) {
            result.addMessage("user cannot be null", ResultType.INVALID);
            return result;
        }

        if (Validations.isNullOrBlank(user.getFirstName())) {
            result.addMessage("firstName is required", ResultType.INVALID);
        }

        if (Validations.isNullOrBlank(user.getLastName())) {
            result.addMessage("lastName is required", ResultType.INVALID);
        }

        if (Validations.isNullOrBlank(user.getEmail())) {
            result.addMessage("Email is required", ResultType.INVALID);
        }

        if (Validations.isNullOrBlank(user.getPasswd())) {
            result.addMessage("Passwd is required", ResultType.INVALID);
        }


        return result;
    }
}