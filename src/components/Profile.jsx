const Profile = (props) => {
    const {name, city, email} = props
    return  (
        <div style={{"border":"1px solid black"}}>
            <h1>Profile Functional Component</h1>
            <h3>Name: {name}</h3>
            <h3>City: {city}</h3>
            <h3>Email: {email}</h3>
        </div>
    )
};
export default Profile;