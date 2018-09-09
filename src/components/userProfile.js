import React from "react";

class UserForm extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      password: ""
    };
  }

  render() {
    return (
      <div>
        <form className="text-center border border-light p-5">
          <p className="h4 mb-4">Login</p>

          <div className="form-row mb-4">
            <div className="col">
              <input
                type="text"
                id="defaultRegisterFormFirstName"
                className="form-control"
                placeholder="Display Name"
              />
            </div>
          </div>

          <input
            type="password"
            id="defaultRegisterFormPassword"
            className="form-control"
            placeholder="Password"
            aria-describedby="defaultRegisterFormPasswordHelpBlock"
          />

          <button className="btn btn-info my-4 btn-block" type="submit">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default UserForm;
