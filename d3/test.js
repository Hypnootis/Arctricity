import {Histogram} from "@d3/histogram";

const VALUES = [-3.14, -0.01, 3.76];

let myGram = Histogram(VALUES);

d3.select("div")
    .enter()
    .append(myGram);