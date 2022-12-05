import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const adminKey = useRef();

  const prompt = (
    <div>
      <input placeholder="Enter Key" type="text" ref={adminKey}></input>
      <button
        onClick={() =>
          validateKey(adminKey.current.value) &&
          navigate("/adminMovieSelection")
        }
      >
        <p>Submit</p>
      </button>
    </div>
  );

  return prompt;
};

const validateKey = (key) => (key === "1234" ? true : false);

export default AdminLogin;
