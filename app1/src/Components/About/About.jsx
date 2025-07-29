import React,{ useState } from "react"
// import './about.css';
import aboutStyle from './about.module.css';

export default function About() {

    // let[age ,setAge] = useState(20);
    // console.log(age);

    // let[username ,setUsername] = useState("Ali");
    // console.log(username);

    // let [user ,setUser] = useState({fname:"Ali",lname:"Khan"});
    // console.log(user.fname);

    // let [friend, setFriend] = useState(["Ali","Ahmed","Tariq"]);
    
    const [count, setcount] = useState(20);
    // eslint-disable-next-line no-unused-vars
    const [DarkStyle, setDarkStyle] = useState("bg-dark text-white");
    // eslint-disable-next-line no-unused-vars
    const [LightStyle, setLightStyle] = useState("bg-light text-dark");
    //binding
    function changeCount(){
        setcount(parseInt(Math.random()*100));
    }
    // function sayHello(){
    //     return "Hello World";
    // }

    return (
        <>
            {/* <h1 style={ {color:"red", fontSize:"50px" , background:"yellow"} }>Hello</h1> */}
            <h1 className={`${aboutStyle.bg} ${aboutStyle.color} p-3`}>Hello</h1>
            <h1 className={count >50 ? DarkStyle : LightStyle}>About {count}</h1>
            <button className="btn btn-danger my-3" onClick={changeCount}>Click</button>
        </>
    )
}

// function useState(initialValue) {
//     // Custom hook logic can be added here
//     let item = initialValue;
//     function setItem(newValue) {
//         item = newValue;
//     }
//     return [item, setItem];  

// }
