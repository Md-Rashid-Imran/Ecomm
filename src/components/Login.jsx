import { useState } from "react"
import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, "Password must be atleast 6 characters")
});

const Login = () => {
    const [error, setError] = useState({});
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    }); //For multiple inputs we dont have to create multiple state variables instaed we can pass an object {}(which is key-value pairs) in one state variable possibly named formData
    //const [email, setEmail] = useState(""); //input field gets bounded with state variable 'email' using 'value={email}'
    //const [password, setPassword] = useState("");
    const changeHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value }); //formData spread
    }
    const submitHandler = (e) => {
        e.preventDefault(); //Prevents page from reloading I guess
        const result = loginSchema.safeParse(formData);
        if (!result.success) {
            const errorField = result.error.formErrors.fieldErrors;
            setError(errorField);
            return; //If Error encountered we return so next line isn't reached
        }
        console.log(formData);
    }
    return (
        <div className="flex items-center justify-center w-full h-[80vh] bg-[#f0f0f0f0]">
            <form onSubmit={submitHandler} className="flex flex-col gap-10 bg-white p-10 rounded-lg shadow-md w-[40%]">
                <div className="flex flex-col">
                    <input value={formData.email} name="email" onChange={changeHandle} className="border border-gray-500 px-3 py-2 rounded-md" type="email" placeholder="Email" />
                    <span className="text-xs text-red-600">{error && error.email}</span>
                </div>
                <div className="flex flex-col">
                    <input value={formData.password} name="password" onChange={changeHandle} className="border border-gray-500 px-3 py-2 rounded-md" type="password" placeholder="Password" />
                    <span className="text-xs text-red-600">{error && error.password}</span>
                </div>
                <button className="bg-purple-600 py-2 rounded-md text-white">Login</button>
            </form>
        </div>
    )
}

export default Login