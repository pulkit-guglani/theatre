import { useNavigate } from "react-router-dom";
import theatre_icon from "../media/theater-icon.png";

const RoomsList = ({ count }) => {
  const buttons = [];
  const navigate = useNavigate();
  const roomsNumber = [1, 2, 3, 4, 5, 6];
  for (var i = 0; i < count; i++) {
    buttons.push(
      <button
        id={i + 1}
        key={i}
        className="room button"
        onClick={(e) => {
          const a = i;
          console.log(e.currentTarget.id);
          navigate("/adminPrompt/" + e.currentTarget.id);
        }}
      >
        <p>
          {"Room " + (i + 1)} <img src={theatre_icon}></img>
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
