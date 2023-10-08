package learn.video_games.models;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Objects;

public class Preferences {
    private int preferencesId;
    private int userId;
    ArrayList<String> genres = new ArrayList<>();
    ArrayList<String> platforms = new ArrayList<>();
    LocalDate startDate;
    LocalDate endDate;
    int minMetaCritic;
    int maxMetaCritic;

    public Preferences() {
    }

    public Preferences(int preferencesId,  int userId, ArrayList<String> genres, ArrayList<String> platforms,
                       LocalDate startDate, LocalDate endDate, int minMetaCritic, int maxMetaCritic) {
        this.preferencesId = preferencesId;
        this.userId = userId;
        this.genres = genres;
        this.platforms = platforms;
        this.startDate = startDate;
        this.endDate = endDate;
        this.minMetaCritic = minMetaCritic;
        this.maxMetaCritic = maxMetaCritic;
    }

    public int getPreferencesId() {
        return preferencesId;
    }

    public void setPreferencesId(int userId) {
        this.preferencesId = preferencesId;
    }


    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public ArrayList<String> getGenres() {
        return genres;
    }

    public void setGenres(ArrayList<String> genres) {
        this.genres = genres;
    }

    public ArrayList<String> getPlatforms() {
        return platforms;
    }

    public void setPlatforms(ArrayList<String> platforms) {
        this.platforms = platforms;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public int getMinMetaCritic() {
        return minMetaCritic;
    }

    public void setMinMetaCritic(int startMetaCritic) {
        this.minMetaCritic = startMetaCritic;
    }

    public int getMaxMetaCritic() {
        return maxMetaCritic;
    }

    public void setMaxMetaCritic(int finalMetaCritic) {
        this.maxMetaCritic = finalMetaCritic;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Preferences)) return false;
        Preferences that = (Preferences) o;
        return getPreferencesId() == that.getPreferencesId() && getUserId() == that.getUserId()
                && getMinMetaCritic() == that.getMinMetaCritic()
                && getMaxMetaCritic() == that.getMaxMetaCritic() && getGenres().equals(that.getGenres())
                && getPlatforms().equals(that.getPlatforms()) && getStartDate().equals(that.getStartDate())
                && getEndDate().equals(that.getEndDate());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPreferencesId(), getUserId(), getGenres(),
                getPlatforms(), getStartDate(), getEndDate(), getMinMetaCritic(), getMaxMetaCritic());
    }

    @Override
    public String toString() {
        return "Preferences{" +
                "preferencesId=" + preferencesId +
                ", userId=" + userId +
                ", genres=" + genres +
                ", platforms=" + platforms +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", minMetaCritic=" + minMetaCritic +
                ", maxMetaCritic=" + maxMetaCritic +
                '}';
    }
}
