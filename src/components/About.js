
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{

    constructor(props){
        super(props);

        console.log("parent constructor")
    }


    componentDidMount(){
        console.log("Parent DidMount");
    }




render(){

    console.log("Parent render");

    return(
            <div
            className="text-center p-20 bg-slate-400 h-screen"
            >
            <h1
            className="text-lg font-semibold
            p-4"
            >About Us Page</h1>
          
            <UserClass name={"Sagar"} location = {"Uttar Pradesh"}/>
        </div>
    )


}};


export default About;

