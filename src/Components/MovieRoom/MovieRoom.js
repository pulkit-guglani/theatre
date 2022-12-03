import { useEffect, useRef, useState } from "react";
import { db } from "../../firebase";
import { getDoc, doc } from "@firebase/firestore";

export default function MovieRoom() {
  const playButtonRef = useRef(null);
  const pauseButtonRef = useRef(null);
  const videoSourceRef = useRef(null);
  const videoRef = useRef(null);

  let currentButtonClicked = "";
  const ref = doc(db, "room1", "movieURL");

  let to = useRef(null);
  console.log("to reset to : " + to);
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
      case "fullscreen":
        videoRef.current.requestFullscreen();
    }
  };

  return (
    <div>
      <video ref={videoRef} id="video" style={{ height: "200px" }} autoPlay>
        <source
          ref={videoSourceRef}
          id="video_source"
          src={""}
          type="video/mp4"
        />
      </video>
      <br />
      <p id="videoPosition"></p>
      <br />
      <button
        id="play"
        onClick={() => {
          currentButtonClicked = "play";
          OnButtonClick();
        }}
      >
        Start
      </button>
      <button
        id="pause"
        onClick={() => {
          currentButtonClicked = "pause";
          OnButtonClick();
        }}
      >
        Pause
      </button>
      <button
        id="restart"
        onClick={() => {
          currentButtonClicked = "restart";
          OnButtonClick();
        }}
      >
        Restart
      </button>
      <button
        id="fullscreen"
        onClick={() => {
          currentButtonClicked = "fullscreen";
          OnButtonClick();
        }}
      >
        FullScreen
      </button>
    </div>
  );
}
