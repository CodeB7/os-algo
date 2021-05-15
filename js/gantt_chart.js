
function plotGanttChart (algo_value) {

switch(algo_value) {
  case 0:
    dataPointsList = fcfs();
    break;
  case 1:
    dataPointsList = sjf();
    break;
  case 2:
    dataPointsList = priority_scheduling();    
    break;
  default:
    dataPointsList = fcfs();
}


var chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  animationDuration: 1000,
  zoomEnabled: true, 
  zoomType: "xy",
  theme: "dark2",
  exportEnabled: true,
  title: {
    text: "Process Scheduling Gantt Chart"
  },
  axisX: {
    title: "Process",
    // startValue: 0
  },
  axisY: {
    title: "Time (s)",
    interval: 5,
    suffix: "s",
    // prefix: "$"
  }, 
  data: [{
    type: "rangeBar",
    showInLegend: true,
    // yValueFormatString: "$#0.#K",
    yValueFormatString: "#0.#s",
    indexLabel: "{y[#index]}",
    legendText: "",
    showInLegend: false,
    toolTipContent: "<b>{label}</b>: {y[0]} to {y[1]}",
    dataPoints: dataPointsList
  }]
});
chart.render();
}
