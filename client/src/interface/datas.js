const data_file = require("../data_files/apr16.json");

for (data in data_file) {
    console.log(data_file[data].temp_out);
}