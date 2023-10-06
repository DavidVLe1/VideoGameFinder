import GenreList from "./GenreList";
import PlatformList from "./PlatformList";
import GameList from "./GameList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function GameForm() {
  const [formData, setFormData] = useState({
    name: "",
    genres: "",
    platforms: "",
    startDate: "1996-01-01",
    endDate: "2023-01-01",
    minNumber: "0",
    maxNumber: "100"
  });

  function handleChange(event) {
    const { name, value } = event.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    console.log(updatedFormData);
  }

  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    navigate("/results", { state: { formData } });
  };

  return (
    <>
      <div>
        <h2>Get User Preferences into data form.</h2>
        <form onSubmit={handleFormSubmit}>
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
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8 mb-3">
              <GenreList handleChange={handleChange}/>
            </div>
            <div className="col-12 col-md-8 mb-3">
              <PlatformList handleChange={handleChange}/>
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
                  className="me-2"
                  onChange={handleChange}
                  required
                  defaultValue={formData.startDate}
                />
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  onChange={handleChange}
                  required
                  defaultValue={formData.endDate}
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
                onChange={handleChange}
                required
                defaultValue={formData.minNumber}
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
                onChange={handleChange}
                defaultValue={formData.maxNumber}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
                Submit
              </button>
        </form>
      </div>

    </>
  );
}
