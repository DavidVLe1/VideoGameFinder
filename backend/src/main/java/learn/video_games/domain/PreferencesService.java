package learn.video_games.domain;

import learn.video_games.data.PreferencesRepository;
import learn.video_games.models.Preferences;
import learn.video_games.models.User;
import org.springframework.stereotype.Service;

@Service
public class PreferencesService {
    private final PreferencesRepository repository;

    public PreferencesService(PreferencesRepository repository) {
        this.repository = repository;
    }

    public Result<Preferences> add(Preferences preferences) {
        Result<Preferences> result = validate(preferences);
        if (!result.isSuccess()) {
            return result;
        }

        if (preferences.getPreferencesId() != 0) {
            result.addMessage("Preference already exists - cannot be set for `add` operation", ResultType.INVALID);
            return result;
        }

        boolean success = repository.add(preferences);
        if (!success) {
            result.addMessage("Add operation added no result", ResultType.INVALID);
            return result;
        }
        return result;
    }






    private Result<Preferences> validate(Preferences preferences) {
        Result<Preferences> result = new Result<>();
        if (preferences == null) {
            result.addMessage("user preferences cannot be null", ResultType.INVALID);
            return result;
        }

        if (preferences.getUserId() == 0) {
            result.addMessage("need a valid positive user id", ResultType.INVALID);
        }

        return result;
    }
}
