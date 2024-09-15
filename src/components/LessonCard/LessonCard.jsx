
import React from "react";
import styles from "./lesson.module.css";

const LessonCard = ({ id,name,hour,image}) => {
  return (
    <div className={styles.lessonCard}>
        <div className={styles.cardcontainer}>
         <h2>ID: {id}</h2>
         <img src={image} alt="" />
         <h2 className="name1" >Name: {name}</h2>
         <h2>Class Hours: {hour}</h2>
       </div>
    </div>
  );
};

export default LessonCard;
