import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Form = () => (
  <React.Fragment>
  <div class="col-md-6">
  <h1>Welcome!</h1>
  <h2>Register here</h2>
  <form>
  <label for="fn">First Name </label>
  <input id="fn" name="fn" type="text"/>
  <br/>
  <label for="ln">Last Name </label>
  <input id="ln" name="ln" type="text"/>
  <br/>
  <label for="email">Email </label>
  <input id="email" name="email" type="text"/>
  <br/>
  <label for="password">Password: </label>
  <input type="password" name="password"/>
  <br/>
  <label for="b ">Password Confirmation: </label>
  <input type="password" name="password_confirmation"/>
  <br/>
  <input type="submit" class = "btn btn-primary" value="Submit"/>
  </form> 
  </div>
 
 <div class="col-md-6">
 <br/>
 <br/>
 <br/>
 <h2>Login here</h2>
 <form>
 <label for="email">Email </label>
 <input id="email" name="email" type="text"/>
 <br/>
 <label for="password">Password: </label>
 <input type="password" name="password"/>
 <br/>
 <input type="submit" name="login" class = "btn btn-primary" value="Login"/>
</form>
</div>
</React.Fragment>
);



  // ========================================
  
  ReactDOM.render(
    <Form />,
    document.getElementById('root')
  );
  