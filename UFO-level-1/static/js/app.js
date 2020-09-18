// from data.js
var tableData = data;

var tbody = d3.select("tbody");
function alienData(data){
    tbody.html("");
    data.forEach((datarow) => {
        var row = tbody.append("tr");
        Object.values(datarow).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

alienData(tableData);

function dateFilter(){
    var filterData = tableData;
    var date = d3.select("#datetime").property("value");
    filterData = filterData.filter(row => row.datetime === date);
    alienData(filterData);
}

d3.selectAll("#filter-btn").on("click",dateFilter);