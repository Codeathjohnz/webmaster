const express = require('express');
const mysql = require('mysql2');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 3001;

// MySQL database configuration with connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'dbms1project_olaguir',
  connectionLimit: 10, // Adjust according to your needs
});



// Use cors middleware
app.use(cors());

// Multer configuration for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// API endpoint for file upload
app.post('/upload', upload.single('profilePic'), (req, res) => {
  try {
    const { djoStudID, djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum } = req.body;
    const profilePic = req.file.buffer;

    // Use a connection from the pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error getting MySQL connection from pool:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      // Insert the data into the MySQL table with a parameterized query
      const insertQuery =
        'INSERT INTO tbldether_olaguir (djoStudID, djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum, profile_pic) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

      connection.query(insertQuery, [djoStudID, djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum, profilePic], (err, results) => {
        connection.release(); // Release the connection back to the pool

        if (err) {
          console.error('Error inserting data into MySQL:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          console.log('Data inserted successfully');
          res.status(200).json({ message: 'Data inserted successfully' });
        }
      });
    });
  } catch (error) {
    console.error('Error handling file upload:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint for fetching profiles
app.get('/profiles', (req, res) => {
  // Select all data from the tbldether_olaguir table
  const sql = 'SELECT djoStudID, djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum, profile_pic FROM tbldether_olaguir';

  // Execute the query
  pool.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching profiles:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Convert profile_pic to a base64-encoded string
      const profilesWithBase64Image = results.map((profile) => ({
        ...profile,
        profile_pic: profile.profile_pic?.toString('base64'),
      }));

      res.json(profilesWithBase64Image);
    }
  });
});


//Delete
// API endpoint for deleting a profile by ID
app.delete('/profiles/:id', (req, res) => {
  const profileId = req.params.id;

  // Delete the profile from the MySQL database
  const sql = 'DELETE FROM tbldether_olaguir WHERE djoStudID = ?';

  // Execute the query
  pool.query(sql, [profileId], (err, results) => {
    if (err) {
      console.error('Error deleting profile:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.affectedRows > 0) {
        res.status(200).json({ success: true, message: 'Profile deleted successfully.' });
      } else {
        res.status(404).json({ success: false, message: 'Profile not found.' });
      }
    }
  });
});



// Update a profile by ID
app.put('/profiles/:id', upload.single('profile_pic'), (req, res) => {
  const profileId = req.params.id;

  const { djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum } = req.body;
  const profilePic = req.file?.buffer; // Check if a new profile picture is provided

  // Update the profile in the MySQL table using pool.query instead of db.query
  pool.query(
    'UPDATE tbldether_olaguir SET djoFullname=?, djoCourse=?, djoYear=?, djoSection=?, djoemail=?, djocnum=?, profile_pic=? WHERE djoStudID=?',
    [djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum, profilePic, profileId],
    (err, results) => {
      if (err) {
        console.error('Error updating profile:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (results.affectedRows > 0) {
          res.status(200).json({ success: true, message: 'Profile updated successfully.' });
        } else {
          res.status(404).json({ success: false, message: 'Profile not found.' });
        }
      }
    }
  );
});

/*Authors Details:
Dether John J. Olaguir
BSIT 2B
detherjohnolaguir@gmail.com
detherjohnjolaguir@asscat.edu.ph
deathjohnz123@gmail.com
09105330662*/

//Master Area

// API endpoint for file upload
app.post('/uploaded', upload.single('profilePic'), (req, res) => {
  try {
    const { djoStudID, djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum } = req.body;
    const profilePic = req.file.buffer;

    // Use a connection from the pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error getting MySQL connection from pool:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      // Insert the data into the MySQL table with a parameterized query
      const insertQuery =
        'INSERT INTO tbldc1_olaguir (djoStudID, djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum, profile_pic) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

      connection.query(insertQuery, [djoStudID, djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum, profilePic], (err, results) => {
        connection.release(); // Release the connection back to the pool

        if (err) {
          console.error('Error inserting data into MySQL:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          console.log('Data inserted successfully');
          res.status(200).json({ message: 'Data inserted successfully' });
        }
      });
    });
  } catch (error) {
    console.error('Error handling file upload:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint for fetching profiles
app.get('/prof', (req, res) => {
  // Select all data from the tbldether_olaguir table
  const sql = 'SELECT djoStudID, djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum, profile_pic FROM tbldc1_olaguir';

  // Execute the query
  pool.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching profiles:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Convert profile_pic to a base64-encoded string
      const profilesWithBase64Image = results.map((profile) => ({
        ...profile,
        profile_pic: profile.profile_pic?.toString('base64'),
      }));

      res.json(profilesWithBase64Image);
    }
  });
});

//Master Delete
// API endpoint for deleting a profile by ID
app.delete('/prof/:id', (req, res) => {
  const profileId = req.params.id;

  // Delete the profile from the MySQL database
  const sql = 'DELETE FROM tbldc1_olaguir WHERE djoStudID = ?';

  // Execute the query
  pool.query(sql, [profileId], (err, results) => {
    if (err) {
      console.error('Error deleting profile:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.affectedRows > 0) {
        res.status(200).json({ success: true, message: 'Profile deleted successfully.' });
      } else {
        res.status(404).json({ success: false, message: 'Profile not found.' });
      }
    }
  });
});



// Update a profile by ID
app.put('/prof/:id', upload.single('profile_pic'), (req, res) => {
  const profileId = req.params.id;

  const { djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum } = req.body;
  const profilePic = req.file?.buffer; // Check if a new profile picture is provided

  // Update the profile in the MySQL table using pool.query instead of db.query
  pool.query(
    'UPDATE tbldc1_olaguir SET djoFullname=?, djoCourse=?, djoYear=?, djoSection=?, djoemail=?, djocnum=?, profile_pic=? WHERE djoStudID=?',
    [djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum, profilePic, profileId],
    (err, results) => {
      if (err) {
        console.error('Error updating profile:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (results.affectedRows > 0) {
          res.status(200).json({ success: true, message: 'Profile updated successfully.' });
        } else {
          res.status(404).json({ success: false, message: 'Profile not found.' });
        }
      }
    }
  );
});


//Associate

// API endpoint for file upload
app.post('/Assreg', upload.single('profilePic'), (req, res) => {
  try {
    const { djoStudID, djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum } = req.body;
    const profilePic = req.file.buffer;

    // Use a connection from the pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error getting MySQL connection from pool:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      // Insert the data into the MySQL table with a parameterized query
      const insertQuery =
        'INSERT INTO tblc2_olaguir (djoStudID, djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum, profile_pic) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

      connection.query(insertQuery, [djoStudID, djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum, profilePic], (err, results) => {
        connection.release(); // Release the connection back to the pool

        if (err) {
          console.error('Error inserting data into MySQL:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          console.log('Data inserted successfully');
          res.status(200).json({ message: 'Data inserted successfully' });
        }
      });
    });
  } catch (error) {
    console.error('Error handling file upload:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint for fetching profiles
app.get('/Assprof', (req, res) => {
  // Select all data from the tbldether_olaguir table
  const sql = 'SELECT djoStudID, djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum, profile_pic FROM tblc2_olaguir';

  // Execute the query
  pool.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching profiles:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Convert profile_pic to a base64-encoded string
      const profilesWithBase64Image = results.map((profile) => ({
        ...profile,
        profile_pic: profile.profile_pic?.toString('base64'),
      }));

      res.json(profilesWithBase64Image);
    }
  });
});


// API endpoint for deleting a profile by ID
app.delete('/Assprof/:id', (req, res) => {
  const profileId = req.params.id;

  // Delete the profile from the MySQL database
  const sql = 'DELETE FROM tblc2_olaguir WHERE djoStudID = ?';

  // Execute the query
  pool.query(sql, [profileId], (err, results) => {
    if (err) {
      console.error('Error deleting profile:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.affectedRows > 0) {
        res.status(200).json({ success: true, message: 'Profile deleted successfully.' });
      } else {
        res.status(404).json({ success: false, message: 'Profile not found.' });
      }
    }
  });
});



// Update a profile by ID
app.put('/Assprof/:id', upload.single('profile_pic'), (req, res) => {
  const profileId = req.params.id;

  const { djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum } = req.body;
  const profilePic = req.file?.buffer; // Check if a new profile picture is provided

  // Update the profile in the MySQL table using pool.query instead of db.query
  pool.query(
    'UPDATE tblc2_olaguir SET djoFullname=?, djoCourse=?, djoYear=?, djoSection=?, djoemail=?, djocnum=?, profile_pic=? WHERE djoStudID=?',
    [djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum, profilePic, profileId],
    (err, results) => {
      if (err) {
        console.error('Error updating profile:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (results.affectedRows > 0) {
          res.status(200).json({ success: true, message: 'Profile updated successfully.' });
        } else {
          res.status(404).json({ success: false, message: 'Profile not found.' });
        }
      }
    }
  );
});


//Junior Area

// API endpoint for file upload
app.post('/Juniorreg', upload.single('profilePic'), (req, res) => {
  try {
    const { djoStudID, djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum } = req.body;
    const profilePic = req.file.buffer;

    // Use a connection from the pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error getting MySQL connection from pool:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      // Insert the data into the MySQL table with a parameterized query
      const insertQuery =
        'INSERT INTO tblc3_olaguir (djoStudID, djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum, profile_pic) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

      connection.query(insertQuery, [djoStudID, djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum, profilePic], (err, results) => {
        connection.release(); // Release the connection back to the pool

        if (err) {
          console.error('Error inserting data into MySQL:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          console.log('Data inserted successfully');
          res.status(200).json({ message: 'Data inserted successfully' });
        }
      });
    });
  } catch (error) {
    console.error('Error handling file upload:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint for fetching profiles
app.get('/Juniorprof', (req, res) => {
  // Select all data from the tbldether_olaguir table
  const sql = 'SELECT djoStudID, djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum, profile_pic FROM tblc3_olaguir';

  // Execute the query
  pool.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching profiles:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Convert profile_pic to a base64-encoded string
      const profilesWithBase64Image = results.map((profile) => ({
        ...profile,
        profile_pic: profile.profile_pic?.toString('base64'),
      }));

      res.json(profilesWithBase64Image);
    }
  });
});


// API endpoint for deleting a profile by ID
app.delete('/Juniorprof/:id', (req, res) => {
  const profileId = req.params.id;

  // Delete the profile from the MySQL database
  const sql = 'DELETE FROM tblc3_olaguir WHERE djoStudID = ?';

  // Execute the query
  pool.query(sql, [profileId], (err, results) => {
    if (err) {
      console.error('Error deleting profile:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.affectedRows > 0) {
        res.status(200).json({ success: true, message: 'Profile deleted successfully.' });
      } else {
        res.status(404).json({ success: false, message: 'Profile not found.' });
      }
    }
  });
});



// Update a profile by ID
app.put('/Juniorprof/:id', upload.single('profile_pic'), (req, res) => {
  const profileId = req.params.id;

  const { djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum } = req.body;
  const profilePic = req.file?.buffer; // Check if a new profile picture is provided

  // Update the profile in the MySQL table using pool.query instead of db.query
  pool.query(
    'UPDATE tblc3_olaguir SET djoFullname=?, djoCourse=?, djoYear=?, djoSection=?, djoemail=?, djocnum=?, profile_pic=? WHERE djoStudID=?',
    [djoFullname, djoCourse, djoYear, djoSection, djoemail, djocnum, profilePic, profileId],
    (err, results) => {
      if (err) {
        console.error('Error updating profile:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (results.affectedRows > 0) {
          res.status(200).json({ success: true, message: 'Profile updated successfully.' });
        } else {
          res.status(404).json({ success: false, message: 'Profile not found.' });
        }
      }
    }
  );
});

/*Authors Details:
Dether John J. Olaguir
BSIT 2B
detherjohnolaguir@gmail.com
detherjohnjolaguir@asscat.edu.ph
deathjohnz123@gmail.com
09105330662*/

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
