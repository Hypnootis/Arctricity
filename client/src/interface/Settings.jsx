import { View } from "react-native";
import { Text, Divider } from "react-native-paper";
import { Switch } from "react-native";
import { useContext, useState } from "react";

import { styling } from "../styles/SettingsStyle";
import { timeStates } from "../api/states.mjs";
import { TimeContext } from "../api/TimeContext.mjs";

export const Settings = ( {navigation, route, options} ) => {
  const [isSwitch1On, setIsSwitch1On] = useState(true);
  const [isSwitch2On, setIsSwitch2On] = useState(false);
  const { currentState, setCurrentState } = useContext(TimeContext);

    const handleCurrentState = () => {
        if (currentState === timeStates.RealTime) {
            setCurrentState(timeStates.Winter);
        } else {
            setCurrentState(timeStates.RealTime);
        }
    };

  const onToggleSwitch1 = () => {
    setIsSwitch1On(!isSwitch1On);
    handleCurrentState(currentState);
    };

  const onToggleSwitch2 = () => {
    setIsSwitch2On(!isSwitch2On);
    };

  return (
    <View style={styling.container}>
      <Text style={styling.legend}>Dataset</Text>
      <View style={styling.settings}>
        <Text>Winter</Text>
        <Switch
          style={styling.switch}
          value={isSwitch1On}
          onValueChange={onToggleSwitch1}
        />
        <Text>Real-time</Text>
      </View>
      <Divider />
      <Text style={styling.legend}>Notifications</Text>
      <View style={styling.settings}>
        <Text>Off</Text>
        <Switch
          style={styling.switch}
          value={isSwitch2On}
          onValueChange={onToggleSwitch2}
        />
        <Text>On</Text>
      </View>
    </View>
  );
};
