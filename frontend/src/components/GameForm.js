import GenreList from "./GenreList";
import PlatformList from "./PlatformList";


export default function GameForm() {
  


  return (
    <>
      <div>
        <h2>Get User Preferences into data form.</h2>
        <form>
          <h1>Game Preferences</h1>
          <div className="row">
            <div className="col-12 col-md-8 mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8 mb-3">
              <GenreList/>
            </div>
            <div className="col-12 col-md-8 mb-3">
              <PlatformList/>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mb-3">
              <label htmlFor="dateRange">Release Date Range:</label>
              <div className="d-flex">
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  required
                  className="me-2"
                />
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mb-3">
              <label htmlFor="minNumber">Minimum MetaCritic Rating:</label>
              <input
                type="number"
                id="minNumber"
                name="minNumber"
                min="0"
                max="100"
                required
              />
            </div>
            <div className="col-12 col-md-4 mb-3">
              <label htmlFor="maxNumber">Maximum MetaCritic Rating:</label>
              <input
                type="number"
                id="maxNumber"
                name="maxNumber"
                min="0"
                max="100"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
