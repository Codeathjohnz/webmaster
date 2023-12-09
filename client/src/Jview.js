import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dether.css';

/*Authors Details:
Dether John J. Olaguir
BSIT 2B
detherjohnolaguir@gmail.com
detherjohnjolaguir@asscat.edu.ph
deathjohnz123@gmail.com
09105330662*/

/*<div className="mb-3">
            <label className="form-label">Student ID</label>
            <p className="form-control">{updatedProfile.djoStudID}</p>
          </div>*/


const Dether = (props) => {
  const [updatedProfile, setUpdatedProfile] = useState(props.location.state?.selectedProfile);
  const [newProfilePic, setNewProfilePic] = useState(null);
  const [updateMessage, setUpdateMessage] = useState('');
  const { history } = props; // Destructure history from props

  useEffect(() => {
    setUpdatedProfile(props.location.state?.selectedProfile);
  }, [props.location.state?.selectedProfile]);

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append('djoFullname', updatedProfile.djoFullname);
    formData.append('djoCourse', updatedProfile.djoCourse);
    formData.append('djoYear', updatedProfile.djoYear);
    formData.append('djoSection', updatedProfile.djoSection);
    formData.append('djoemail', updatedProfile.djoemail);
    formData.append('djocnum', updatedProfile.djocnum);
    newProfilePic && formData.append('profile_pic', newProfilePic);

    fetch(`http://localhost:3001/Assprof/${updatedProfile.djoStudID}`, {
      method: 'PUT',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log('Profile updated successfully');
          setUpdateMessage('Profile updated successfully.');
          // Navigate to Senior.js after successful update
          history.push('/Junior'); // Update the path as needed
        } else {
          console.error('Failed to update profile');
          setUpdateMessage('Failed to update profile. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error updating data:', error);
        setUpdateMessage('An error occurred while updating the profile.');
      });
  };

  const handleFileChange = (e) => {
    setNewProfilePic(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    setUpdatedProfile({
      ...updatedProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setUpdatedProfile({
      ...updatedProfile,
      editable: !updatedProfile.editable,
    });
  };

  return (
    <div className="container mt-5 bg-dark text-light p-4">
      <h1 className="text-center mb-4">Junior Profile</h1>
      {updatedProfile ? (
        <div>
          <div className="text-center mb-4">
            <img
              src={`data:image/jpeg;base64,${updatedProfile.profile_pic?.toString('base64')}`}
              alt="Profile Pic"
              className="img-fluid rounded-circle"
              style={{ width: '250px', height: '250px' }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">New Profile Picture</label>
            <input type="file" accept="image/*" className="form-control" onChange={handleFileChange} />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            {updatedProfile.editable ? (
              <input type="text" name="djoFullname" value={updatedProfile.djoFullname} onChange={handleInputChange} className="form-control" />
            ) : (
              <p className="form-control">{updatedProfile.djoFullname}</p>
            )}
          </div>
          {/* Add similar blocks for other profile details */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            {updatedProfile.editable ? (
              <input type="text" name="djoemail" value={updatedProfile.djoemail} onChange={handleInputChange} className="form-control" />
            ) : (
              <p className="form-control">{updatedProfile.djoemail}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Contact Number</label>
            {updatedProfile.editable ? (
              <input type="text" name="djocnum" value={updatedProfile.djocnum} onChange={handleInputChange} className="form-control" />
            ) : (
              <p className="form-control">{updatedProfile.djocnum}</p>
            )}
          </div>
          <p className="text-danger">{updateMessage}</p>
          <div className="text-center">
            {updatedProfile.editable ? (
              <button className="btn btn-warning" onClick={handleUpdate}>
                Update
              </button>
            ) : (
              <button className="btn btn-info" onClick={handleEdit}>
                Edit
              </button>
            )}
          </div>
        </div>
      ) : (
        <p>No profile selected</p>
      )}
    </div>
  );
};

export default withRouter(Dether);
