package learn.video_games.domain;

import learn.video_games.data.PreferencesRepository;
import learn.video_games.models.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PreferencesService {
    private final PreferencesRepository repository;

    public PreferencesService(PreferencesRepository repository) {
        this.repository = repository;
    }

    public Preferences queryAll(int userId) {

        List<Preference> preferenceList =  repository.queryAll(userId);
        if (preferenceList.size() >= 0) {

            Preferences result = new Preferences();

            result.setPreferencesId(0);
            result.setUserId(preferenceList.get(0).getUserId());
            result.setStartDate(preferenceList.get(0).getStartDate());
            result.setEndDate(preferenceList.get(0).getEndDate());
            result.setMinMetaCritic(preferenceList.get(0).getMinMetaCritic());
            result.setMaxMetaCritic(preferenceList.get(0).getMaxMetaCritic());

            ArrayList<String> genres = new ArrayList<>();
            ArrayList<String> platforms = new ArrayList<>();

            for (Preference preference : preferenceList) {
                if (!genres.contains(preference.getGenre())) {
                    genres.add(preference.getGenre());
                }
                if (!platforms.contains(preference.getPlatform())) {
                    platforms.add(preference.getPlatform());
                }
            }

            result.setGenres(genres);
            result.setPlatforms(platforms);
            return result;

        }
        else {
            return null;
        }


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
        repository.deleteByUser(preferences.getUserId());

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
