const file = require("../data_files/apr16.json");

for (data in file) {
    console.log(file[data].total_consumption / 1000);
}