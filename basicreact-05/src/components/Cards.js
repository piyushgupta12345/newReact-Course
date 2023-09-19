import React from 'react';


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
        <Card course={course}/>
      })}
    </div>
  )
}

export default Cards
