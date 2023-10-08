package learn.video_games.data;

import learn.video_games.models.Preferences;
import learn.video_games.models.User;

public interface PreferencesRepository {

    boolean add(Preferences preferences);
}
