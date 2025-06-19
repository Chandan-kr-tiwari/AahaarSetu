import React from "react";


// Never compare React-lifecycle method from functional component

class UserClass extends React.Component{
    constructor(){
        super()
        this.state={
            userInfo:{
            name:"Dummy",
            location:"xyz",
            public_repos:"dummy"
        }
        }
         
    }  
    async componentDidMount(){
        const data = await fetch (" https://api.github.com/users/Chandan-kr-tiwari")
        const json = await data.json()
        // console.log(json)
        this.setState({
           userInfo:json
        })
    }

    componentDidUpdate(){
        // console.log("Component has updated")
    }

    componentWillUnmount(){
        // console.log("Component has unmounted or removed from the ui")
    }
    render(){
        const {name,location,public_repos}=this.state.userInfo
        return (
            <div className="user-info">
                <h1>Name:{name}</h1>
                <h2>Location:{location}</h2>
                <h3>Public-Repo:{public_repos}</h3>
            </div>
        )
    }
        

        
    
}



















// class UserClass extends React.Component{
//  constructor(props){
//     super(props)
//     this.state= {
//         count1:1,
//         count2:2
//     }
//     console.log(this.props.name+"constructor")
//  }

//  componentDidMount(){
//     console.log(this.props.name+"Component Mount")
//  }
// render(){
//     const {name,location,email}=this.props
//     const {count1,count2} = this.state

//     console.log(this.props.name+" Render")
//     return(
//          <div className="user-info">
//             <h1>count1:{count1}</h1>
//             <button onClick={()=>{
//                 this.setState({
//                     count1:this.state.count1+1
//                 })
//             }}>Count increase</button>
//             <h1>count2:{count2}</h1>
//             <h2>Name:{name}</h2>
//             <h3>Location:{location}</h3>
//             <h3>email: {email}</h3>
//         </div>
//     )
// }

// }

export default UserClass