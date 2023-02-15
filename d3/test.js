const DUMMY_DATA = [
    {id: "d1", value: 10, region: "USA"},
    {id: "d2", value: 11, region: "India"},
    {id: "d3", value: 12, region: "China"},
    {id: "d4", value: 13, region: "Germany"},

];


d3.select("#data")
    .style("border", "1px solid red")
    .classed("container", true);

container
    .selectAll(".bar")
    .data(DUMMY_DATA)
    .enter()
    .append("div")
    .classed("bar", true)
    .style("background-color", "#720570")
    .style("width", "50px")
    .style("height", "150px")
    .style("display", "flex")
    .style("justify-content", "around");