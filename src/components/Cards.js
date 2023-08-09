import React, { useState } from 'react';
import Caard from './Caard';


export const Cards = (props) => {
  let courses = props.courses;
  let category=props.category;
  const[likedCourses,setLikedCourses] = useState([]);
  // console.log(courses)
  function getCourses(){
    if(category === "All")
    {
      let allCourses = [];
      Object.values(courses).forEach((array) =>{
        array.forEach((courseData) => {
          allCourses.push(courseData);
          // console.log(allCourses);
        })
      })
      // console.log(allCourses)
      return allCourses;
    }
    else
    {
        return courses[category];
    }
  }
  return (
    <div className='flex flex-wrap justify-center mb-4 gap-4'>
        {
        getCourses().map((course) => {
          return (
            <div>
            <Caard key={course.id}  course = {course} likedCourse={likedCourses} setLikedCourse={setLikedCourses}/>
            </div>
          )
        })
       }
    </div>
  )
}

