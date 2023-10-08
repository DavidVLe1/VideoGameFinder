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
    minNumber: "0",
    maxNumber: "100"
  });
  const [hasExistingPreferences, setHasExistingPreferences] = useState(false);
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value, options } = event.target;
    const selectedOptions = [...options].filter((option) => option.selected).map((option) => option.value);
  
    // For multiple selections, use an array to store the selected values
    const updatedFormData = { ...formData, [name]: selectedOptions };
    setFormData(updatedFormData);
    console.log(updatedFormData);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    navigate("/results", { state: { formData } });
  };

  useEffect(() => {
    fetchExistingPreferences();
  }, []);

  const fetchExistingPreferences = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/preferences/${isUserId}`, {
        method: "GET",
      });

      if (response.ok) {
        const existingPreferences = await response.json();
        // Populated  form fields with existing preferences
        setFormData(existingPreferences);
      } else {
        console.error("Error fetching existing preferences:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleSave = async () => {
    try {
      if (hasExistingPreferences) {
        // User has preferences, update them with a PUT request
        const updateResponse = await fetch(`http://localhost:8080/api/preferences/${isUserId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (updateResponse.ok) {
          console.log("Preferences updated successfully");
        } else {
          console.error("Error updating preferences:", updateResponse.statusText);
        }
      } else {
        // User does not have preferences, create them with a POST request
        const createResponse = await fetch(`http://localhost:8080/api/preferences}`, {
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
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  // Conditionally render Save button based on userId
  const renderSaveButton = () => {
    if (isUserId === 0) {
      return null; // Don't render button for guests with id 0
    }
    return (
      <button type="button" className="btn btn-success" onClick={handleSave}>
        Save
      </button>
    );
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
              <GenreList handleChange={handleChange}  formData={formData} style={inputStyle} />
            </div>
            <div className="col-12 col-md-8 mb-3">
              <PlatformList handleChange={handleChange}  formData={formData} style={inputStyle} />
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
          {renderSaveButton}
        </form>
      </div>
    </div>
  );
}
