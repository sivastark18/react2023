22
import '../assert/regi.css';

function Register() {
 
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form >
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
            
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div className="password-input">
              <input
                
                id="password"
        
                required
              />

            </div>
          </div>
          <div className="form-group">
            <label >Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
            
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Register;
