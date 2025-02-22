import { createContext } from "react";
const UserContext = createContext({
    name: 'Sharon',
    email: 'sharon@gmail.com'
});
export default UserContext;