import { useState } from "react"
const User = (props)=>{
    const [count1] = useState(1)
    const [count2]= useState(2)
    const {name,location,email}= props
    return(
        
        <div className="user-info">
            <h1>count1:{count1}</h1>
            <h1>count2:{count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>email: {email}</h3>
        </div>
    )
}

export default User