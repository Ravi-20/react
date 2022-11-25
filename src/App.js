import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Registration</h1>
      <div id="userform">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          </div>


          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">User name</label>
            <input type="text" class="form-control" id="exampleInputusername" aria-describedby="emailHelp"></input>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"></input>
          </div>
          <button type="submit" class="btn btn-primary" onclick="submitDetails()">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
