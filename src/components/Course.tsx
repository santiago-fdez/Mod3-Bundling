
import React from "react";
import { Link } from "react-router-dom";

function Course({ match: { params } }) {
  const id=params.id;
  const [lessons, setCourses] = React.useState([]);
  let coursename='';
  React.useEffect(() => {
      fetch(`http://localhost:8000/courses/${id}`)
        .then((response) => response.json())
        .then((json) => setCourses(json.data));
    }, []);
    if (typeof(lessons.values().next().value)!= 'undefined')
    {coursename= lessons.values().next().value.coursename;}

  return (
      <div>
          <h1>
            {coursename}
          </h1>
          <ul>
          {lessons.map(item => (
          <li key={item.id}>
           <Link to={`/courses/${id}/lessons/${item.id}`}> {item.id} - {item.name}</Link>
          </li>
        ))}
          </ul>
    </div>
  );
}
 
export default Course;