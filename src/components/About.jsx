import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";
// const About = () => {
//     return (
//         <div>
//             <h1>About Page</h1>
//             <Profile name="Md Rashid Imran" city="Kolkata" email="!@#$%^&*("/>
//             <ProfileClass name="narmI dihsaR dM" city="Mumbai" email="(*&^%$#@!"/>
//         </div>
//     )
// };
// export default About;
class About extends Component {
    constructor(){
        super();
        console.log("Parent constructor is called");
    }
    componentDidMount(){
        console.log("Parent mount is called");
    }
    render(){
        console.log('Parent render is called');
        return (
            <ProfileClass/>
        )
    }
}
export default About;