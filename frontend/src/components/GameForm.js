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
              <label htmlFor="genre" className="form-label">
                Genres
              </label>
              <select
                // multiple
                name="genres"
                id="genres"
                className="form-select"
              >
                <option value='' disabled>
                  [Select Genres]
                </option>
                <option value='4'>Action</option>
                <option value='51'>Indie</option>
                <option value='3'>Adventure</option>
                <option value='5'>RPG</option>
                <option value='10'>Strategy</option>
                <option value='2'>Shooter</option>
                <option value='40'>Casual</option>
                <option value='14'>Simulation</option>
                <option value='7'>Puzzle</option>
                <option value='11'>Arcade</option>
                <option value='83'>Platformer</option>
                <option value='59'>Massively Multiplayer</option>
                <option value='1'>Racing</option>
                <option value='15'>Sports</option>
                <option value='6'>Fighting</option>
                <option value='19'>Family</option>
                <option value='28'>Board Games</option>
                <option value='34'>Educational</option>
                <option value='17'>Card</option>
              </select>
            </div>
            <div className="col-12 col-md-8 mb-3">
              <label htmlFor="platforms" className="form-label">
                Platforms
              </label>
              <select
                // multiple
                name="platforms"
                id="platforms"
                className="form-select"
              >
                <option value='' disabled>
                  [Select Platforms]
                </option>
                <option value='4'>PC</option>
                <option value='187'>PlayStation 5</option>
                <option value='1'>Xbox One</option>
                <option value='18'>PlayStation 4</option>
                <option value='186'>Xbox Series S/X</option>
                <option value='7'>Nintendo Switch</option>
                <option value='3'>iOS</option>
                <option value='21'>Android</option>
                <option value='8'>Nintendo 3DS</option>
                <option value='9'>Nintendo DS</option>
                <option value='13'>Nintendo DSi</option>
                <option value='5'>macOS</option>
                <option value='6'>Linux</option>
                <option value='14'>Xbox 360</option>
                <option value='80'>Xbox</option>
                <option value='16'>PlayStation 3</option>
                <option value='15'>PlayStation 2</option>
                <option value='27'>PlayStation</option>
                <option value='19'>PS Vita</option>
                <option value='17'>PSP</option>
                <option value='10'>Wii U</option>
                <option value='11'>Wii</option>
                <option value='105'>GameCube</option>
                <option value='83'>Nintendo 64</option>
                <option value='24'>Game Boy Advance</option>
                <option value='43'>Game Boy Color</option>
                <option value='26'>Game Boy</option>
                <option value='79'>SNES</option>
                <option value='49'>NES</option>
                <option value='79'>SNES</option>
                <option value='55'>Classic Macintosh</option>
                <option value='41'>Apple II</option>
                <option value='166'>Commodore / Amiga</option>
                <option value='28'>Atari 7800</option>
                <option value='31'>Atari 5200</option>
                <option value='23'>Atari 2600</option>
                <option value='22'>Atari Flashback</option>
                <option value='25'>Atari 8-bit</option>
                <option value='34'>Atari ST</option>
                <option value='46'>Atari Lynx</option>
                <option value='50'>Atari XEGS</option>
                <option value='167'>Genesis</option>
                <option value='107'>SEGA Saturn</option>
                <option value='119'>SEGA CD</option>
                <option value='117'>SEGA 32X</option>
                <option value='74'>SEGA Master System</option>
                <option value='106'>Dreamcast</option>
                <option value='111'>3DO</option>
                <option value='112'>Jaguar</option>
                <option value='77'>Game Gear</option>
                <option value='12'>Neo Geo</option>
              </select>
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
