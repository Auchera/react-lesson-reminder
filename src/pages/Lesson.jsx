
import React from "react";
import { data } from "../helper/data";
import LessonCard from "../components/LessonCard/LessonCard";
import "../index.css"


const Lesson = () => {
  console.log(data)
  return (
    <div className="lesson-container">
      {data.map((lesson) => (
        <LessonCard  key={lesson.id} {...lesson} />
      ))}
    </div>
  );
};

export default Lesson;
