const data_file = require("./test_data.json");

for (data in data_file) {
    console.log(data_file[data].avgValues.temp_out);
}