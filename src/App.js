import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import {Filter} from './components/Filter'
import { Cards } from './components/Cards';
import { Spinner } from './components/Spinner';
import { filterData,apiUrl } from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
function App() {
const [courses,setCourses] = useState(null);
const [loading,setLoading] = useState(true);
const [category,setCategory] = useState(filterData[0].title);
  async function fetchData()
  {
    setLoading(true);
    try {
      let response =await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
      // console.log(courses);
    } catch (error) {
      toast.error("Problem in network");
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div className=' flex flex-col min-h-screen'>
         <div>
          <Navbar/>
         </div>
        <div className=' bg-slate-600 min-h-screen'>
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}/>
         </div>
         <div>
            {
              loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
            }
         </div>
        </div>
    </div>
  );
}


export default App;
