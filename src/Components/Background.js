import "../CSS/mainbackground.css";
import shootingStar from "../media/shooting_star.png";
export default function Background() {
  return (
    <div className="parent">
      <div className="stars"></div>
      <div className="twinkling"> </div>
      <img src={shootingStar} className="shootingStar"></img>
    </div>
  );
}
