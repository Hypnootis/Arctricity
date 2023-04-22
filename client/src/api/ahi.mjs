function getVPositionFromAHI(ahi) {
    if (ahi == 100) {
        return 14;
      } else if (ahi >= 80 && ahi < 100) {
        return 20;
      } else if (ahi >= 60 && ahi <= 79) {
        return 45;
      } else if (ahi >= 40 && ahi <= 59) {
        return 73;
      } else if (ahi >= 20 && ahi <= 39) {
        return 96;
      } else if (ahi >= 0 && ahi <= 19) {
        return 115;
      } else {
        throw new Error("Invalid AHI value, must be between 0 and 100.");
      }
}

function getColorFromAHI() {
    if (ahi == 100) {
        return [200, 200, 0, 0];
      } else if (ahi >= 80 && ahi <= 99) {
        return [255, 200, 0, 0];
      } else if (ahi >= 60 && ahi <= 79) {
        return [255, 200, 100, 0];
      } else if (ahi >= 40 && ahi <= 59) {
        return [255, 230, 220, 0];
      } else if (ahi >= 20 && ahi <= 39) {
        return [255, 150, 200, 0];
      } else if (ahi >= 0 && ahi <= 19) {
        return [255, 0, 200, 0];
      } else {
        throw new Error('Invalid AHI value. Must be between 0 and 100.');
      }
}

export { getVPositionFromAHI, getColorFromAHI };