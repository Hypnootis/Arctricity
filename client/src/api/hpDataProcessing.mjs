import "./ahi.mjs";
import { convertToInt, countConsecutiveOnValues } from "./ahi.mjs";
import "./getFromDatabase.mjs";

function processData(docs, currentPrice) {
    const field = "HP_compressor_on_off";
    let compressorInfo = "Current compressor status unknown";
    let adviceHeating = "No need for additional heating";
    let adviceElectricity = "Electricity is normal";
    let priceIndex = 0;
    let compressorTime = countConsecutiveOnValues(docs, field);
    let tempLast = convertToInt(docs, 0, "temp_watertank_lower");
    let tempFirst = tempLast;
    let heatingRate = 0;
    let hpMultiplier = 1.0;

    if (compressorTime === 0) {
        tempFirst = convertToInt(docs, 5, "temp_watertank_lower");
    } else if (compressorTime <= 20) {
        tempFirst = convertToInt(docs, compressorTime, "temp_watertank_lower");
    } else {
        tempFirst = convertToInt(docs, 20, "temp_watertank_lower");
    }

    value = getField(docs, 0, "temp_out");

    let tempDelta = (tempLast - tempFirst) / 10;
    if (compressorTime === 0) {
        compressorInfo = "Compressor is currently off";
        heatingRate = tempDelta / 5;
        console.log(tempFirst);
        console.log(tempLast);
    } else if (compressorTime <= 15) {
        compressorInfo = `Compressor has been on for ${compressorTime} minutes`;
        heatingRate = tempDelta / compressorTime;
    } else if (compressorTime === 1) {
        compressorInfo = "Compressor has been on for one minute";
        heatingRate = tempDelta;
    } else {
        compressorInfo = "Compressor has been on for over 15 minutes";
    }
    let standardPrice = 5;
    let ahiValue = 50;
    let priceFactor = 10;
    let tempFactor = 0;
    let outsideTemp = convertToInt(docs, 0, "temp_out");
    let tankTemp = convertToInt(docs, 0, "temp_watertank_lower");

    if (compressorTime > 15 && heatingRate < 0) {
        ahiValue = 100;
      } else {
        if (compressorTime > 15 && heatingRate < 0.3) {
          hpMultiplier = 1.5;
        }
        if (outsideTemp < -250) {
          tempFactor = 100;
          if (currentPrice < standardPrice) {
            ahiValue =
                hpMultiplier * tempFactor + 30 * Math.log((currentPrice / standardPrice));
          }
        } else if (outsideTemp > 250) {
          tempFactor = 0;
          ahiValue = tempFactor;
        } else {
          tempFactor = (-0.2) * outsideTemp + 50;
          ahiValue =
              hpMultiplier * tempFactor + 30 * Math.log((currentPrice / standardPrice));
        }
      }

      if (ahiValue < 0) {
        ahiValue = 0;
      } else if (ahiValue == 0) {
      } else if (ahiValue <= 30) {
        advice = "Additional heating probably not necessary.";
      } else if (ahiValue <= 50) {
        advice = "Additional heating might be a good idea.";
      } else if (ahiValue <= 70) {
        advice = "Additional heating is recommended.";
      } else if (ahiValue <= 90) {
        advice = "Additional heating is advised.";
      } else if (ahiValue <= 100) {
        advice = "Additional heating strongly advised!";
      } else {
        ahiValue = 100;
        advice = "Time to go burn some firewood!";
      }


  if ((currentPrice / standardPrice) < 1) {
    priceIndex = (1 - currentPrice / standardPrice) * 100;
    advice2 = `Electricity is ${priceIndex}% cheaper than average.`;
  } else if ((currentPrice / standardPrice) > 1) {
    priceIndex = (currentPrice / standardPrice - 1) * 100;
    advice2 = `Electricity is ${priceIndex}% more expensive than average.`;
  }

  return {
    'outsideTemp': outsideTemp,
    'tankTemp': tankTemp,
    'compressorInfo': compressorInfo,
    'tempDelta': tempDelta,
    'tempLast': tempLast,
    'tempFirst': tempFirst,
    'ahiValue': ahiValue,
    'heatingRate': heatingRate,
    'advice': advice,
    'advice2': advice2,
  };
    
}


export { processData };