// src/context/SoundContext.js

import React, { createContext, useContext, useRef, useState } from "react";
import NotificationSound from "../assets/13_ui_space_notification2.wav";
import AbandonedShip from "../assets/3. AbandonedShip.wav";

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const notificationAudioRef = useRef(new Audio(NotificationSound));
  const musicAudioRef = useRef(new Audio(AbandonedShip));

  // Set looping for background music
  musicAudioRef.current.loop = true;

  const toggleSound = () => {
    setIsSoundOn((prev) => !prev);
    if (isSoundOn) {
      musicAudioRef.current.pause();
    } else {
      musicAudioRef.current.play();
    }
  };

  const playNotification = () => {
    if (isSoundOn) {
      notificationAudioRef.current.currentTime = 0;
      notificationAudioRef.current.play();
    }
  };

  return (
    <SoundContext.Provider value={{ isSoundOn, toggleSound, playNotification }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
