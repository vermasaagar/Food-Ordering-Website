
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
            <div>
            <h1>ABout US Page</h1>
          
            <UserClass name={"Sagar"} location = {"Uttar Pradesh"}/>
        </div>
    )


}};


export default About;

