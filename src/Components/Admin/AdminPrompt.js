import { useNavigate } from "react-router-dom";

const AdminPrompt = ({ roomID, roomName }, ...props) => {
  const navigate = useNavigate();

  const prompt = (
    <div>
      <p>
        {roomName}: {roomID}
      </p>
      <button onClick={() => navigate("/adminLogin")}>Have Admin Key</button>
      <button onClick={() => navigate("/movieRoom")}>Enter Room</button>
    </div>
  );

  return prompt;
};

export default AdminPrompt;
