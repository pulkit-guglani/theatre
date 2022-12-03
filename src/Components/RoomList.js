import { useNavigate } from "react-router-dom";

const RoomsList = ({ count }) => {
  const buttons = [];
  const navigate = useNavigate();
  for (var i = 0; i < count; i++) {
    buttons.push(
      <button
        key={i}
        className="room button"
        onClick={() => {
          navigate("/adminPrompt");
        }}
      >
        Room {i}
      </button>
    );
  }

  return buttons;
};

export default RoomsList;
