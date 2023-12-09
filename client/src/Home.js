import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://github.com/DetherCarla/Photo/blob/main/Instructor-removebg-preview.png?raw=true" alt="Instructor" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="book">Mr.Bernie</h1>
          <q className="book">
            "Scores in class records are lies
            i mean not all
            but mostly"
          </q>
        </div>
      </div>
      <div className="sec1 bg p-5">
        <p className="instagramable-text">
          Membership
          <br />
          <br />
          1. Novice Web Developer: Beginner level, suitable for those who are just starting their journey in web development.
          <br />
          Skills: Basic Computer Operation
          <br />
          Badge/Star: 0 Star
          <br />
          <br />
          2. Junior Web Developer: Indicates a step up from novice, suggesting a bit more experience and proficiency.
          <br />
          Skills: Basic Frontend Development
          <br />
          Badges: HTML5 Badge, CSS Badge, Native JavaScript Badge
          <br />
          Star: 1 Star
          <br />
          <br />
          3. Senior Web Developer: Reflects a higher level of expertise and experience, likely with more advanced skills.
          <br />
          Skills: Advanced Frontend and Backend Development, Database Management
          <br />
          Badges: HTML5 Badge, CSS Badge, Native JavaScript Badge
          <br />
          ReactJS Badge and NodeJS Badge OR PHP Badge
          <br />
          MySQL Badge
          <br />
          Star: 2 Stars
          <br />
          <br />
          4. Associate Web Master: A title that suggests a connection to the leadership or more responsible roles within the club. It implies a level of mastery in both technical and organizational aspects.
          <br />
          Skills: Basic Frontend and Backend Development, Database Management, System Analysis and Design
          <br />
          Badges: HTML5 Badge, CSS Badge, Native JavaScript Badge
          <br />
          ReactJS Badge and NodeJS Badge
          <br />
          PHP Badge and (Laravel Badge or CodeIgniter Badge)
          <br />
          MySQL Badge
          <br />
          Star: 3 Stars
          <br />
          <br />
          5. Web Master: The highest level of student Web Masters, indicating a significant level of experience, expertise, and possibly a leadership role within the club.
          <br />
          Skills: Basic Frontend and Backend Development, Database Management, System Analysis and Design
          <br />
          Badges: HTML5 Badge, CSS Badge, Native JavaScript Badge
          <br />
          ReactJS Badge and NodeJS Badge
          <br />
          PHP Badge and (Laravel Badge or CodeIgniter Badge)
          <br />
          MySQL Badge
          <br />
          Web Host CPanel Badge
          <br />
          Additional Badge (Every additional programming languages learned and apply)
          <br />
          Star: 5 Stars (+1 Star in every additional programming languages learned and apply like C# and .Net Programming, Java Programming, Python and Data Analytics Programming)
          <br />
          <br />
          6. Alumni Grand Web Master - The highest level of Web Masters, indicating a significant level of experience, expertise, and possibly a leadership role within the club.
          <br />
          Skills: Basic Frontend and Backend Development, Database Management, System Analysis and Design
          <br />
          Badges: HTML5 Badge, CSS Badge, Native JavaScript Badge
          <br />
          ReactJS Badge and NodeJS Badge
          <br />
          PHP Badge and (Laravel Badge or CodeIgniter Badge)
          <br />
          MySQL Badge
          <br />
          Web Host CPanel Badge
          <br />
          Additional Badge (Every additional programming languages learned and apply)
          <br />
          Star: 5 Stars (+1 Star in every additional programming languages learned and apply like C# and .Net Programming, Java Programming, Python and Data Analytics Programming)
        </p>
      </div>
    </div>
  );
}

export default Home;