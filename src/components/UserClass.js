

import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
       

        this.state = {
            count : 0,
            userInfo:{
                name: "dummyname",
                location: "dummylocation"
            }
            
        };

        console.log("Child constructor")
    
    }



    async componentDidMount(){
        console.log("child constructor did mount");

        const data = await fetch("https://api.github.com/users/akshaymarch7");

        const json = await data.json();



        this.setState({
            userInfo:json,
        });

        console.log(json);
    }


    


    render(){

        
      const {name, location} = this.state.userInfo;


        return(


            <div className="user-card">
           

                <h1>Name : {name}</h1>
                <h3>Location : {location}</h3>
                <h4>Gmail : sagar12@gmail.com</h4>
            </div>

        )
        }

}

export default UserClass;