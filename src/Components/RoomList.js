import { useNavigate } from "react-router-dom";
import theatre_icon from "../media/theater-icon.png";

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
        <p>
          {"Room " + i} <img src={theatre_icon}></img>
        </p>
      </button>
    );
  }

  return (
    <>
      <div className="buttonGroup">
        <h1>Choose a Room</h1>
        {buttons}
      </div>
      ;
    </>
  );
};

export default RoomsList;
