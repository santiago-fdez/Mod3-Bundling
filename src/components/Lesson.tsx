
import React from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser, {convertNodeToElement,processNodes} from "react-html-parser";

function Lesson({ match: { params } }) {
  const courseid=params.id;
  const lessonId=params.lessonId;
  const lessonName=params.name;
  const [lesson, setCourses] = React.useState([]);
  const archivo=require(`../assets/courses/${courseid}/${lessonId}.html`);
  console.log(archivo);
  
  function transform(node,index) {
     if (node.type==='tag' && node.name==="input" && typeof(node['attribs'])!='undefined' && node['attribs'].type==='text')
    {node.attribs.value = "Escribe aquí tu respuesta";
    return convertNodeToElement(node, index, transform)}

  }

  const options = {
    decodeEntities: true,
    transform
  };

  React.useEffect(() => {
      fetch(`http://localhost:8000/courses/${courseid}/lessons/${lessonId}`)
        .then((response) => response.json())
        .then((json) => setCourses(json.data));
    }, []);
  return (
      <div>
        {lesson.map(item => (
         <h1 key={item.id}> {item.name} </h1>
        ))}    
            { ReactHtmlParser(archivo,options) }

        </div>
  );
}
 
export default Lesson;