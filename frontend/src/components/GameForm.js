import GenreList from "./GenreList";
import PlatformList from "./PlatformList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GameForm() {
  const [formData, setFormData] = useState({
    name: "",
    genres: "",
    platforms: "",
    startDate: "1958-01-01",
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

  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    maxWidth: "600px",
    margin: "auto", 
    minHeight: "50vh",
    marginTop: "20vh"
  };

  const inputStyle = {
    backgroundColor: "#D3D4D9",
    color: "#2e282a",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    width: "100%",
    marginBottom: "15px",
  };

  const buttonStyle = {
    backgroundColor: "#ff6600",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleFormSubmit}>
      <h2 style={{ textAlign: "center", fontFamily: "'Press Start 2P', sans-serif" }}>Game Preferences</h2>
        <div className="row">
          <div className="col-12 col-md-8 mb-3">
            <GenreList handleChange={handleChange} style={inputStyle} />
          </div>
          <div className="col-12 col-md-8 mb-3">
            <PlatformList handleChange={handleChange} style={inputStyle} />
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
                style={inputStyle}
              />
              <input
                type="date"
                id="endDate"
                name="endDate"
                onChange={handleChange}
                required
                defaultValue={formData.endDate}
                style={inputStyle}
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
              style={inputStyle}
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
              style={inputStyle}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
}
