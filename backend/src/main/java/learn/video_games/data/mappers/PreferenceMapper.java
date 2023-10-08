package learn.video_games.data.mappers;

import learn.video_games.models.Preference;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PreferenceMapper implements RowMapper<Preference> {

    @Override
    public Preference mapRow(ResultSet resultSet, int i) throws SQLException {
        Preference preference = new Preference();
        preference.setPreferencesId(resultSet.getInt("preference_id"));
        preference.setUserId(resultSet.getInt("user_id"));
        preference.setGenre(resultSet.getString("genre"));
        preference.setPlatform(resultSet.getString("platform"));
        if (resultSet.getDate("start_date") != null) {
            preference.setStartDate(resultSet.getDate("start_date").toLocalDate());
        }
        if (resultSet.getDate("end_date") != null) {
            preference.setEndDate(resultSet.getDate("end_date").toLocalDate());
        }
        preference.setMinMetaCritic(resultSet.getInt("min_score"));
        preference.setMaxMetaCritic(resultSet.getInt("max_score"));
        return preference;
    }
}
