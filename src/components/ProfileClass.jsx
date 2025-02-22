import React from "react";
import UserContext from "../utils/UserContext";
class ProfileClass extends React.Component {
    constructor() {
        super();
        this.state = {
            userDetails: null
        }
        console.log("Child constructor called");

    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Md-Rashid-Imran");
        const responseData = await data.json();
        this.setState({ userDetails: responseData });
        console.log('Child mount is called');
    }
    render() {
        console.log('Child render is called');
        // const setCount = ()=>{
        //     this.setState({
        //         count:this.state.count + 1
        //     })
        // }
        // const setCountMinus = ()=>{
        //     this.setState({
        //         count:this.state.count - 1
        //     })
        // }
        return this.state.userDetails === null ? <h1>Loading...</h1> : (
            <div className="h-screen w-screen flex items-center justify-center">
                <div className="w-100 flex flex-col items-center justify-center border p-5 bg-white rounded-lg shadow-lg transition duration-300">
                    <h1>Profile Class Based Component</h1>
                    {/* Using .Consumer to use contextData since hook functions can't be used in class based components */}
                    <UserContext.Consumer>
                        {
                            (data) => (<h1 className="text-lg">Name: {data.name}</h1>)
                        }
                    </UserContext.Consumer>
                    <img src={this.state.userDetails.avatar_url} />

                    {/* <button onClick={setCount} className="p-1 border-black border-2 rounded-md bg-gray-500">Increment</button>
                    <h1>{this.state.count}</h1>
                    <button onClick={setCountMinus} className="p-1 border-black border-2 rounded-md bg-gray-500">Decrement</button> */}
                </div>
            </div>
        )
    }
};
export default ProfileClass;