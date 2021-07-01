import { useState } from "react";
const Auth = (props) => {
  const [loginForm, setLoginForm] = useState({});
  const changeInputHandler = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    console.log(loginForm);
  };
  return (
    <div className="df jcsc plr10 ptb50">
      <form className="pa10 shadow bra5" onSubmit={login}>
        <div className="fwb ttu tac fs2 cl1 mb40">Đăng nhập</div>
        <div className="mb10">
          <div className="mb5">Email:</div>
          <input
            type="text"
            className="pa5 bra5 bw1 bss bce"
            style={{ minWidth: "300px" }}
            name="email"
            onChange={changeInputHandler}
          />
        </div>
        <div className="mb10">
          <div className="mb5">Password:</div>
          <input
            type="text"
            className="pa5 bra5 bw1 bss bce"
            style={{ minWidth: "300px" }}
            name="password"
            onChange={changeInputHandler}
          />
        </div>
        <div className="grid tar">
          <button className="pa10 bg1 cf bn bra5 cpi">Đăng nhập</button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
