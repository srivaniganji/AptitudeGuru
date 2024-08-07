import { useState } from "react";
import mainUrl from "../services/MainUrl";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const url = `${mainUrl}/login/${role}`;
    console.log(url);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const { jwtToken } = await response.json();
      Cookies.set("jwtToken", jwtToken);
      console.log(jwtToken);
      navigate(`/${role}`);
    } else {
    }
  };

  return (
    <main className="flex flex-col max-w-[300px]">
      <form onSubmit={loginUser} className="flex flex-col">
        <select onChange={(e) => setRole(e.target.value)} value={role}>
          <option value="user">User</option>
          <option value="recruiter">Recruiter</option>
        </select>
        <input
          type="text"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <a href="/signup">Don't have an account? Sign Up</a>
      </form>
    </main>
  );
};

export default SignUp;
