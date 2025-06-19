import User from "./User"
import UserClass from "./UserClass"
import React from "react"
import Usercontext from "../Utils/Usercontext"


class About extends React.Component{
    constructor(props){
        super(props)
        // console.log("Parent constructor")
    }

    componentDidMount(){
        // console.log("Parent Component Mount")
    }
    render(){
        // console.log("Parent Render")
          return (
        <div>
            <h1>Abouts us page</h1>
            <h2> 
                Welcome!!
            </h2>
            <div>
                {/* LoggedInUser */}
                <Usercontext.Consumer>
                    {
                      ({loggedInUser})=>(
                        <h1>{loggedInUser}</h1>
                      )
                    }
                </Usercontext.Consumer>
            </div>
        
            {/* <UserClass name={"First-Child"} location={"Delhi"} email={"chandan.kr.tiwarii@gmail.com"} /> */}
            {/* <UserClass name={"Second-Child"} location={"Delhi"} email={"chandan.kr.tiwarii@gmail.com"} /> */}
            <UserClass />

        </div>
    )
    }
}

export default About

/*  React Component Cycle
       
   - Parent Contructor
   - Parent Render

        -First Child Constructor
        -First Child Render

        -Second Child Constructor 
        -Second Child Render
        
        DOM updated here in single batch

        -First Child Component
        Second Child Component

   - Parent Component Render     

    





*/