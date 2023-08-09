import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';

const Caard = (props) => {
    let courses = props.course;
    let likedCourse = props.likedCourse;
    let setLikedCourse = props.setLikedCourse;
    function clickHandler()
    {
        //already liked now unliking
       if(likedCourse.includes(courses.id))
       {
        setLikedCourse((prev) => prev.filter((cid) => (cid)!==courses.id));
        toast.warning("Unliked Successfully");
       }
       //previously unliked now liking
       else{
        //if no courses is liked
       if(likedCourse.length === 0)
       {
        setLikedCourse([courses.id]);
       }
       //if some courses are already liked
       else{
        setLikedCourse((prev) => [...prev,courses.id]);
       }
       toast.success("Liked Successfully");
       }
    }
    // console.log(courses);
  return (
    <div className='w-[300px] bg-slate-700 bg-opacity-80 rounded-md overflow-hidden'>
       <div className='relative'>
          <img src={courses.image.url}/>
       

       <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 top-[80%] grid place-items-center'>
          <button onClick={clickHandler}>
             {
                likedCourse.includes(courses.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
             }
          </button>
        </div>
       </div>

       <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{courses.title}</p>
        <p className='text-white mt-2'>
            {
                courses.description.length>100 ? 
                (courses.description.substr(0,100) + "...") : 
                (courses.description)
            }
        </p>
       </div>
    </div>
  )
}
export default Caard;
