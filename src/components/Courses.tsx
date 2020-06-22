import React, { Component } from 'react';
import { Link } from "react-router-dom";


function Courses() {
    const [courses, setCourses] = React.useState([]);
   
    React.useEffect(() => {
        fetch(`http://localhost:8000/courses`)
          .then((response) => response.json())
          .then((json) => setCourses(json.data));
      }, []);
      //console.log(courses);
   
    return (
        <div>
            <h1>Courses</h1>
      <ul>
        {courses.map(item => (
          <li key={item.id}>
           <Link to={`/courses/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      </div>
    );
  }
   
  export default Courses;