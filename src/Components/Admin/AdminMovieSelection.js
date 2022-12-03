import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { getDoc, setDoc, doc, collection } from "@firebase/firestore";

export default function AdminMovieSelection() {
  const navigate = useNavigate();
  const movieURL = useRef();
  const ref = doc(db, "room1", "movieURL");

  const handleSave = async (e) => {
    e.preventDefault();

    let data = { currentMovie: movieURL.current.value };
    console.log(Date.now());

    try {
      await setDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
    console.log("Movie updated");
    navigate("/movieRoom");
  };

  const prompt = (
    <form onSubmit={handleSave}>
      <input placeholder="Enter Movie URL" type="URL" ref={movieURL}></input>
      <button
        onClick={() => {
          //  navigate("/movieRoom");
        }}
      >
        Submit
      </button>
    </form>
  );

  return prompt;
}
