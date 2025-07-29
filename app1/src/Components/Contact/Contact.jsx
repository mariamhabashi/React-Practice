import React,{useEffect, useState} from 'react'

export default function Contact() {
  // const [count, setCount] = React.useState(0);
  // const [userName, setuserName] = useState("Mariam")
  // useEffect (() => {
  //   //component did mount
  //   //console.log("Contact Component Mounted");

  //   //component will unmount
  //   // return () => {
  //   //   console.log("Contact Component Unmounted");
  //   // }
  // },[]);

  // useEffect(() => {
  //   //component did update
  //   console.log("UserName Updated");
  // },[userName]);
  // useEffect(() => {
  //   //component did update
  //   console.log("Count Updated");
  // },[count]);
  // function changeCount(){
  //   setCount(Math.round(Math.random()*100));
  // }
  // function changeUser(){
  //   setuserName("Ali");
  // }
  
  return (
    <>
      {/* <h1>Contact {count}{userName}</h1>
      <button onClick={() => changeCount()} className="btn btn-primary">Change Count</button>
      <button onClick={() => changeUser()} className="btn btn-danger">Change UserName</button> */}
      <h1 className="bg color">Contact</h1>
    </>
  )
}
