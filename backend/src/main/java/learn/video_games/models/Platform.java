package learn.video_games.models;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Platform {
    private int platformId;
    private String platformName;

    public Platform() {}

    public Platform(int platformId, String platformName) {
        this.platformId = platformId;
        this.platformName = platformName;
    }

    public int getPlatformId() {
        return platformId;
    }

    public void setPlatformId(int platformId) {
        this.platformId = platformId;
    }

    public String getPlatformName() {
        return platformName;
    }

    public void setPlatformName(String platformName) {
        this.platformName = platformName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Platform)) return false;
        Platform platform = (Platform) o;
        return getPlatformId() == platform.getPlatformId() && getPlatformName().equals(platform.getPlatformName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPlatformId(), getPlatformName());
    }

    @Override
    public String toString() {
        return "Platform{" +
                "platformId=" + platformId +
                ", platformName='" + platformName + '\'' +
                '}';
    }

}
