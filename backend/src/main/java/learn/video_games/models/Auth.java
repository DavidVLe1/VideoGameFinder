package learn.video_games.models;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Auth {
    private String email;
    private String passwd;

    public Auth() {
    }

    public Auth(String email, String passwd) {
        this.email = email;
        this.passwd = passwd;
    }




    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Auth)) return false;
        Auth auth = (Auth) o;
        return getEmail().equals(auth.getEmail()) && getPasswd().equals(auth.getPasswd());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getEmail(), getPasswd());
    }

    @Override
    public String toString() {
        return "Auth{" +
                "email='" + email + '\'' +
                ", passwd='" + passwd + '\'' +
                '}';
    }
}
