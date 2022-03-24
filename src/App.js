import React, { useState } from 'react'
import ProfileForm from './components/ProfileForm'
import ProfileCard from './components/ProfileCard'

function App() {
  const[allProfiles, setALLProfiles]=useState([
{
firstname:"Abdul Raqeeb",
lastname:"Yahaya",
email:"yahayaabdulraqeeb363@gmail.com",
phone:"0249265997"
}
])
const updateProfiles =(profile)=>{
let arr =allProfiles;
arr.push(profile);
setALLProfiles([...arr]);
};

  return (
    <div className='app'>
    <h1>Profile Maker</h1>
    <div>
    <ProfileForm submit={updateProfiles}/>
    <hr/>
    <div className='list'>
    {allProfiles.map((person,index)=>(
<ProfileCard key={index} card={person}/>
    ))}
    
    </div>
    </div>
    </div>
  )
}

export default App