import React from 'react';
import Card from './Card';

function Cards({courses}) {

  let allCourses = [];

  // return you a list of all courses received from the api response
  const getCourses = () =>{
    Object.values(courses).forEach((courseCategory)=>{
      courseCategory.forEach((course)=>{
        allCourses.push(course);
      })
    })
    return allCourses;
  }

  return (
    <div>
      {getCourses().map((course) =>{
        return(
          <Card course={course} key={course.id}/>
        )
      })}
    </div>
  )
}

export default Cards
