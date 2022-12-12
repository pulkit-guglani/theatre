import { useEffect, useRef, useState } from "react";
import { db } from "../../firebase";
import { getDoc, doc } from "@firebase/firestore";
import { BsPlayFill, BsPauseFill, BsFullscreen } from "react-icons/bs";
import {
  AiFillStepForward,
  AiFillStepBackward,
  AiOutlineReload,
} from "react-icons/ai";
export default function MovieRoom() {
  const videoSourceRef = useRef(null);
  const videoRef = useRef(null);
  const ref = doc(db, "room1", "movieURL");
  let to = useRef(null);

  let currentButtonClicked = "";
  let url =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    videoRef.current.pause();

    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      url = docSnap.data().currentMovie;
      videoSourceRef.current.src = url;
      await videoRef.current.load();
      setTimeout(() => {
        videoRef.current.play();
      }, 100);
    }

    var APPID_MCORP = "8534527755652116330";
    console.log(global);
    var app = global.MCorp.app(APPID_MCORP, { anon: true });
    app.run = function () {
      //console.log(app.motions.shared);
      if (document.readyState === "complete") {
        run(app.motions.shared);
      } else
        window.onload = function () {
          run(app.motions.shared);
        };
    };
    app.init();
  };

  var run = (timingProvider) => {
    // timing object
    to = new global.TIMINGSRC.TimingObject({
      provider: timingProvider,
      range: [0, 100],
    });
    // set up refresh of timingobject position
    to.on("timeupdate", function () {
      document.getElementById("videoPosition").innerHTML = to
        .query()
        .position.toFixed(2);
    });
    console.log(to);
    // set up video sync
    var sync1 = global.MCorp.mediaSync(document.getElementById("video"), to);

    // set up video sync
  };

  const OnButtonClick = () => {
    console.log(to);
    switch (currentButtonClicked) {
      case "play":
        to.update({ velocity: 1.0 });
        break;
      case "pause":
        to.update({ velocity: 0.0 });
        break;
      case "restart":
        to.update({ position: 0.0, velocity: 1.0 });
        break;
      case "backward":
        to.update({ position: Math.max(0, to.query().position - 5) });
        break;
      case "forward":
        to.update({ position: to.query().position + 5 });
        break;
      case "fullscreen":
        videoRef.current.requestFullscreen();
    }
  };

  return (
    <div>
      <video ref={videoRef} id="video" style={{ width: "55%" }} autoPlay>
        <source
          ref={videoSourceRef}
          id="video_source"
          src={""}
          type="video/mp4"
        />
      </video>
      <br />

      <div className="controls">
        <button
          style={{ marginLeft: "20%" }}
          id="play"
          onClick={() => {
            currentButtonClicked = "play";
            OnButtonClick();
          }}
        >
          <BsPlayFill />
        </button>
        <button
          id="pause"
          onClick={() => {
            currentButtonClicked = "pause";
            OnButtonClick();
          }}
        >
          <BsPauseFill />
        </button>
        <button
          id="restart"
          onClick={() => {
            currentButtonClicked = "restart";
            OnButtonClick();
          }}
        >
          <AiOutlineReload />
        </button>

        <p
          id="videoPosition"
          style={{ marginTop: "11px", marginLeft: "10px", width: "70px" }}
        ></p>

        <button
          style={{ marginLeft: "auto" }}
          id="backward"
          onClick={() => {
            currentButtonClicked = "backward";
            OnButtonClick();
          }}
        >
          <AiFillStepBackward />
        </button>
        <p>5s</p>
        <button
          style={{}}
          id="forward"
          onClick={() => {
            currentButtonClicked = "forward";
            OnButtonClick();
          }}
        >
          <AiFillStepForward />
        </button>

        <button
          style={{ marginLeft: "auto", marginRight: "20%" }}
          id="fullscreen"
          onClick={() => {
            currentButtonClicked = "fullscreen";
            OnButtonClick();
          }}
        >
          <BsFullscreen />
        </button>
      </div>
    </div>
  );
}
