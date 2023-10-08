package learn.video_games.data;
import learn.video_games.data.mappers.UserMapper;
import learn.video_games.models.Auth;
import learn.video_games.models.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.sql.Statement;

@Repository
public class UserRepositoryJdbcTemplateRepository implements UserRepository {

    private final JdbcTemplate jdbcTemplate;

    public UserRepositoryJdbcTemplateRepository (JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    @Transactional
    public User findByAuth(Auth userToAuth) {

        final String sql = "select user_id, first_name, last_name, email, passwd  "
                + "from users "
                + "where email = ? and passwd = ?;";

       return jdbcTemplate.query(sql, new UserMapper(), userToAuth.getEmail(), userToAuth.getPasswd()).stream()
                .findFirst().orElse(null);

    }



    @Override
    public User add(User user) {

        final String sql = "insert into users (first_name, last_name, email, passwd) "
                + " values (?,?,?,?);";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, user.getFirstName());
            ps.setString(2, user.getLastName());
            ps.setString(3, user.getEmail());
            ps.setString(4, user.getPasswd());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        user.setUserId(keyHolder.getKey().intValue());
        return user;
    }


    /*
    @Override
    public boolean update(Agent agent) {

        final String sql = "update agent set "
                + "first_name = ?, "
                + "middle_name = ?, "
                + "last_name = ?, "
                + "dob = ?, "
                + "height_in_inches = ? "
                + "where agent_id = ?;";

        return jdbcTemplate.update(sql,
                agent.getFirstName(),
                agent.getMiddleName(),
                agent.getLastName(),
                agent.getDob(),
                agent.getHeightInInches(),
                agent.getAgentId()) > 0;
    }

    @Override
    @Transactional
    public boolean deleteById(int agentId) {
        //System.out.println(jdbcTemplate.update("delete from agency_agent where agent_id = ?;", agentId));
        return jdbcTemplate.update("delete from agent where agent_id = ?;", agentId) > 0;
    }

    private void addAgencies(Agent agent) {

        final String sql = "select aa.agency_id, aa.agent_id, aa.identifier, aa.activation_date, aa.is_active, "
                + "sc.security_clearance_id, sc.name security_clearance_name, "
                + "a.short_name, a.long_name "
                + "from agency_agent aa "
                + "inner join agency a on aa.agency_id = a.agency_id "
                + "inner join security_clearance sc on aa.security_clearance_id = sc.security_clearance_id "
                + "where aa.agent_id = ?;";

        var agentAgencies = jdbcTemplate.query(sql, new AgentAgencyMapper(), agent.getAgentId());
        agent.setAgencies(agentAgencies);
    }

     */
}