import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

/* <img
 src="https://cdn-icons-png.flaticon.com/512/8918/8918133.png"
alt="View Icon"
style={{ width: '20px', height: '20px', marginRight: '5px' }}
/>*/ 

/*Authors Details:
Dether John J. Olaguir
BSIT 2B
detherjohnolaguir@gmail.com
detherjohnjolaguir@asscat.edu.ph
deathjohnz123@gmail.com
09105330662*/

const Senior = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  useEffect(() => {
    // Fetch data from the server
    fetch('http://localhost:3001/profiles')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSelect = (profile) => {
    // Redirect to Dether.js with the selected profile details
    history.push({
      pathname: `/dether/${profile.djoStudID}`,
      state: { selectedProfile: profile },
    });
  };

  const handleDelete = (profileId) => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm('Are you sure you want to delete this profile?');

    if (isConfirmed) {
      // Send a DELETE request to the server to delete the profile
      fetch(`http://localhost:3001/profiles/${profileId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            // If deletion is successful, update the local state
            setData((prevData) => prevData.filter((profile) => profile.djoStudID !== profileId));
          } else {
            console.error('Failed to delete profile');
          }
        })
        .catch((error) => console.error('Error deleting data:', error));
    }
  };

  // Filter data based on search term
  const filteredData = data.filter(
    (profile) =>
      profile.djoFullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.djoCourse.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.djoemail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.djocnum.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
       <h1 className="mb-4" style={{ Color: 'white', textAlign: 'center', textShadow: '2px 2px white' }}>List of Senior Programmer</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>View</th>
            <th>Student ID</th>
            <th>Full Name</th>
            <th>Course</th>
            <th>Year</th>
            <th>Section</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Profile Picture</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((profile) => (
            <tr key={profile.djoStudID}>
              <td><button className="btn btn-primary" onClick={() => handleSelect(profile)}>
                  View
                </button>
             </td>
              <td>{profile.djoStudID}</td>
              <td>{profile.djoFullname}</td>
              <td>{profile.djoCourse}</td>
              <td>{profile.djoYear}</td>
              <td>{profile.djoSection}</td>
              <td>{profile.djoemail}</td>
              <td>{profile.djocnum}</td>
              <td>
                <img
                  src={`data:image/jpeg;base64,${profile.profile_pic?.toString('base64')}`}
                  alt="Profile Pic"
                  style={{ width: '50px', height: '50px' }}
                  className="img-fluid rounded-circle"
                />
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(profile.djoStudID)}>
                 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Senior;
