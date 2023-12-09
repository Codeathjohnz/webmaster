//Master Registration
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/*Authors Details:
Dether John J. Olaguir
BSIT 2B
detherjohnolaguir@gmail.com
detherjohnjolaguir@asscat.edu.ph
deathjohnz123@gmail.com
09105330662*/

const Registration = () => {
  const [formData, setFormData] = useState({
    djoStudID: '',
    djoFullname: '',
    djoCourse: '',
    djoYear: '',
    djoSection: '',
    djoemail: '',
    djocnum: '',
    profilePic: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profilePic: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { djoStudID, djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum, profilePic } = formData;

    // FormData for sending the data including the file to the server
    const data = new FormData();
    data.append('djoStudID', djoStudID);
    data.append('djoFullname', djoFullname);
    data.append('djoCourse', djoCourse);
    data.append('djoYear', djoYear);
    data.append('djoSection', djoSection);
    data.append('djoemail', djoemail);
    data.append('djocnum', djocnum);
    data.append('profilePic', profilePic);

    try {
      // Send the data to the server (replace 'http://localhost:3001/upload' with your server endpoint)
      const response = await fetch('http://localhost:3001/Juniorreg', {
        method: 'POST',
        body: data,
      });

      // Handle the server response
      const result = await response.json();
      console.log(result);

      // Reset the form after successful submission
      setFormData({
        djoStudID: '',
        djoFullname: '',
        djoCourse: '',
        djoYear: '',
        djoSection: '',
        djoemail: '',
        djocnum: '',
        profilePic: null,
      });

      // Show pop-up message
      alert("Junior Registered Successfully!");
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  

  return (
    <div className="container mt-5">
       <h1 className="mb-4" style={{ color: 'white', textAlign: 'center', textShadow: '2px 2px black' }}>Registration for Junior Programmer</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" style={{ color: 'white', textAlign: 'center', textShadow: '2px 2px black' }}>Student ID:</label>
          <input type="text" className="form-control" name="djoStudID" value={formData.djoStudID} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: 'white', textAlign: 'center', textShadow: '2px 2px black' }}>Full Name:</label>
          <input type="text" className="form-control" name="djoFullname" value={formData.djoFullname} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: 'white', textAlign: 'center', textShadow: '2px 2px black' }}>Course:</label>
          <input type="text" className="form-control" name="djoCourse" value={formData.djoCourse} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: 'white', textAlign: 'center', textShadow: '2px 2px black' }}>Year:</label>
          <input type="text" className="form-control" name="djoYear" value={formData.djoYear} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: 'white', textAlign: 'center', textShadow: '2px 2px black' }}>Section:</label>
          <input type="text" className="form-control" name="djoSection" value={formData.djoSection} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: 'white', textAlign: 'center', textShadow: '2px 2px black' }}>Email:</label>
          <input type="text" className="form-control" name="djoemail" value={formData.djoemail} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: 'white', textAlign: 'center', textShadow: '2px 2px black' }}>Contact Number:</label>
          <input type="text" className="form-control" name="djocnum" value={formData.djocnum} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: 'white', textAlign: 'center', textShadow: '2px 2px black' }}>Profile Picture:</label>
          <input type="file" className="form-control" name="profilePic" onChange={handleFileChange} accept="image/*" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Registration;
