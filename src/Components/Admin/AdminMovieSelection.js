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
    if (!movieURL.current.value) {
      return;
    }
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
    <form onSubmit={handleSave} className="inputDiv">
      <h2>Enter movie URL</h2>
      <input placeholder="Enter Movie URL" type="URL" ref={movieURL}></input>
      <button
        onClick={() => {
          //  navigate("/movieRoom");
        }}
      >
        <p>Submit</p>
      </button>
    </form>
  );

  return prompt;
}
