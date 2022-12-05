import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const adminKey = useRef();
  const authenticate = (e) => {
    e.preventDefault();
    validateKey(adminKey.current.value) && navigate("/adminMovieSelection");
  };
  const prompt = (
    <form className="inputDiv" onSubmit={authenticate}>
      <h2>Enter Admin Key ( Hint: 1234 )</h2>
      <input placeholder="Enter Key" type="text" ref={adminKey}></input>
      <button onClick={{}}>
        <p>Submit</p>
      </button>
    </form>
  );

  return prompt;
};

const validateKey = (key) => (key === "1234" ? true : false);

export default AdminLogin;
