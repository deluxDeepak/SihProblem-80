import React,{useState} from "react";
import trainImg from "../../assets/train.png";
import { useNavigate } from "react-router";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();

        // Dummy check
        if (username === "admin" && password === "1234") {
            // Redirect to dashboard
            navigate("/dashboard");
        } else {
            alert("Invalid credentials!");
        }
    };






    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Left Section */}
            <div className="flex items-center justify-center rounded-2xl  p-6">
                <img
                    src={trainImg}
                    alt="Train"
                    className="w-full h-auto object-cover rounded-xl"
                />
            </div>

            {/* 
            Right Section 
            Short-Info and Login
            */}
            <div className="login-page bg-blue-200/10 flex-col ">
                <div className="flex h-[50%] items-center justify-center ">
                    <form
                        onSubmit={handleLogin}
                        className="bg-white p-6 rounded-lg shadow-lg space-y-4"
                    >
                        <h1 className="text-2xl font-bold">Login</h1>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full border p-2 rounded"
                        />
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border p-2 rounded"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
                        >
                            Login
                        </button>
                    </form>
                </div>

                {/* Lower Section */}
                <div className="flex flex-col justify-center items-center p-6 space-y-4 bg-white/40 rounded-t-3xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Kochi Metro Expansion
                    </h1>
                    <p className="text-gray-600 text-lg text-center max-w-md">
                        As KMRL expands its corridor with new depots and technologies like UNS
                        and IoT monitoring, the journey towards a smarter metro continues.
                    </p>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                        Learn More
                    </button>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;
