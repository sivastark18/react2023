
import "../assert/login.css";

const Login = () => {
  

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Izy Event Management Company</h2>
        <form  className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              
              required
            />
        
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
            
          </div>
        </form>
      
      </div>
    </div>
  );
};

export default Login;
