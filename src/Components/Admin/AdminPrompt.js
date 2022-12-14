import { useNavigate, useParams } from "react-router-dom";

const AdminPrompt = ({ roomID, roomName }, ...props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const prompt = (
    <div>
      <p>Room {id}</p>
      <div className="buttonGroup">
        <button onClick={() => navigate("/adminLogin")}>
          <p>Have Admin Key</p>
        </button>

        <button onClick={() => navigate("/movieRoom")}>
          <p>Enter Room</p>
        </button>
      </div>
    </div>
  );

  return prompt;
};

export default AdminPrompt;
