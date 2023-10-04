package learn.video_games.models;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Genre {
    private int genreId;
    private String genreName;

    public Genre() {

    }

    public Genre(int genreId, String genreName) {
        this.genreId = genreId;
        this.genreName = genreName;
    }

    public int getGenreId() {
        return genreId;
    }

    public void setGenreId(int genreId) {
        this.genreId = genreId;
    }

    public String getGenreName() {
        return genreName;
    }

    public void setGenreName(String genreName) {
        this.genreName = genreName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Genre)) return false;
        Genre genre1 = (Genre) o;
        return getGenreId() == genre1.getGenreId() && getGenreName().equals(genre1.getGenreName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getGenreId(), getGenreName());
    }

    @Override
    public String toString() {
        return "Genre{" +
                "genreId=" + genreId +
                ", genreName='" + genreName + '\'' +
                '}';
    }
}
