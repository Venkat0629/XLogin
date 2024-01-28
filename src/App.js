import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({ name: "", password: "", status: 0 });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [id]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password } = user;
    setUser((prevUser) => ({
      ...prevUser,
      status: name === "user" && password === "password" ? 200 : 400,
    }));
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {user.status === 200 ? (
        <p>Welcome, user!</p>
      ) : (
        <>
          {user.status === 400 && <p>Invalid username or password</p>}
          <form onSubmit={handleSubmit} className="form">
            <div>
              <label htmlFor="name">Username:</label>
              <input
                id="name"
                type="text"
                required
                value={user.name}
                onChange={handleChange}
                placeholder="username"
              ></input>
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="text"
                required
                value={user.password}
                onChange={handleChange}
                placeholder="password"
              ></input>
            </div>

            <button>Submit</button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
