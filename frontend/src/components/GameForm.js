import GenreList from "./GenreList";
import PlatformList from "./PlatformList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../App.css";

export default function GameForm({ isUserId }) {
  const [formData, setFormData] = useState({
    userId: isUserId,
    genres: "",
    platforms: "",
    startDate: "1958-01-01",
    endDate: "2023-01-01",
    minMetaCritic: 0,
    maxMetaCritic: 100
  });
  const [hasExistingPreferences, setHasExistingPreferences] = useState(false);
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value, options } = event.target;

    // Check if the target element is a select element
    if (event.target.tagName === "SELECT") {
      const selectedOptions = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      const updatedFormData = { ...formData, [name]: selectedOptions };
      setFormData(updatedFormData);
      console.log(updatedFormData);
    } else {
      // Handle other input elements (e.g., text inputs)
      const updatedFormData = { ...formData, [name]: value };
      setFormData(updatedFormData);
      console.log(updatedFormData);
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    try {
      navigate("/results", { state: { formData } });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const fetchExistingPreferences = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/preferences/${isUserId}`, {
        method: "GET",
      });

      if (response.ok) {
        return response.json(); // Parse and return JSON data
      } else if (response.status >= 500) {
        return response.json()
          .then((error) => Promise.reject(new Error(error.message)))
          .then(console.log("No Preferences Found"));
      } else {
        return Promise.reject(new Error(`Unexpected status code ${response.status}`));
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  // Then, in your useEffect, handle the result:
  useEffect(() => {
    fetchExistingPreferences()
      .then((existingPreferences) => {
        // Populated form fields with existing preferences
        console.log("Existing preferences are:", existingPreferences);
        setFormData(existingPreferences);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  const handleSave = async () => {
    console.log(formData);
    try {
      // User does not have preferences, create them with a POST request
      const createResponse = await fetch(`http://localhost:8080/api/preferences`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (createResponse.ok) {
        console.log("Preferences created successfully");
        setHasExistingPreferences(true); // Set the flag to true after creating preferences
      } else {
        console.error("Error creating preferences:", createResponse.statusText);
      }
      // }
    } catch (error) {
      console.error("An error occurred:", error);
    }
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
    <div className="game-form-background">
      <div style={containerStyle}>
        <form onSubmit={handleFormSubmit}>
          <h2 style={{ textAlign: "center", fontFamily: "'Press Start 2P', sans-serif" }}>Game Preferences</h2>
          <div className="row">
            <div className="col-12 col-md-8 mb-3">
              <GenreList handleChange={handleChange} formData={formData} style={inputStyle} />
            </div>
            <div className="col-12 col-md-8 mb-3">
              <PlatformList handleChange={handleChange} formData={formData} style={inputStyle} />
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
                  value={formData.startDate}
                  defaultValue={formData.startDate}
                  style={inputStyle}
                />
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  onChange={handleChange}
                  required
                  value={formData.endDate}
                  defaultValue={formData.endDate}
                  style={inputStyle}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mb-3">
              <label htmlFor="minMetaCritic">Minimum MetaCritic Rating:</label>
              <input
                type="number"
                id="minMetaCritic"
                name="minMetaCritic"
                min="0"
                max="100"
                onChange={handleChange}
                required
                value={formData.minMetaCritic}
                defaultValue={0}
                style={inputStyle}
              />
            </div>
            <div className="col-12 col-md-4 mb-3">
              <label htmlFor="maxMetaCritic">Maximum MetaCritic Rating:</label>
              <input
                type="number"
                id="maxMetaCritic"
                name="maxMetaCritic"
                min="0"
                max="100"
                onChange={handleChange}
                value={formData.maxMetaCritic}
                defaultValue={100}
                required
                style={inputStyle}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" style={buttonStyle}>
            Submit
          </button>
          <button type="button" className="btn btn-success" onClick={handleSave}>
            Save
          </button>
          
        </form>
      </div>
    </div>
  );
}
