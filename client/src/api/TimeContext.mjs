import { createContext } from "react";  

import { timeStates } from "./states.mjs";

export const TimeContext = createContext({
    state: timeStates.RealTime,
    setCurrentState: () => {}
});