package learn.video_games.models;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Objects;

public class Preference {
    private int preferencesId;
    private int userId;
    private String genre;
    private String platform;
    private LocalDate startDate;
    private LocalDate endDate;
    int minMetaCritic;
    int maxMetaCritic;

    public Preference() {
    }

    public Preference(int preferencesId, int userId, String genre, String platform,
                      LocalDate startDate, LocalDate endDate, int minMetaCritic, int maxMetaCritic) {
        this.preferencesId = preferencesId;
        this.userId = userId;
        this.genre = genre;
        this.platform = platform;
        this.startDate = startDate;
        this.endDate = endDate;
        this.minMetaCritic = minMetaCritic;
        this.maxMetaCritic = maxMetaCritic;
    }

    public int getPreferencesId() {
        return preferencesId;
    }

    public void setPreferencesId(int preferencesId) {
        this.preferencesId = preferencesId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform;
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

    public void setMinMetaCritic(int minMetaCritic) {
        this.minMetaCritic = minMetaCritic;
    }

    public int getMaxMetaCritic() {
        return maxMetaCritic;
    }

    public void setMaxMetaCritic(int maxMetaCritic) {
        this.maxMetaCritic = maxMetaCritic;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Preference)) return false;
        Preference that = (Preference) o;
        return getPreferencesId() == that.getPreferencesId() && getUserId() == that.getUserId() && getMinMetaCritic() == that.getMinMetaCritic() && getMaxMetaCritic() == that.getMaxMetaCritic() && getGenre().equals(that.getGenre()) && getPlatform().equals(that.getPlatform()) && getStartDate().equals(that.getStartDate()) && getEndDate().equals(that.getEndDate());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPreferencesId(), getUserId(), getGenre(), getPlatform(), getStartDate(), getEndDate(), getMinMetaCritic(), getMaxMetaCritic());
    }

    @Override
    public String toString() {
        return "Preference{" +
                "preferencesId=" + preferencesId +
                ", userId=" + userId +
                ", genre='" + genre + '\'' +
                ", platform='" + platform + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", minMetaCritic=" + minMetaCritic +
                ", maxMetaCritic=" + maxMetaCritic +
                '}';
    }
}
