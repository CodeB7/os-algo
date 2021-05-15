function sjf () {
	MAX_NUMBER_OF_PROCESSES = 5;
	var processList = [];
	// console.log("SJF");
	function populateProcessList () {
		for (i = 0; i < MAX_NUMBER_OF_PROCESSES; i++) {
			time_taken = document.getElementById('time_taken_' + i);
			if (time_taken != null) {
				var time_taken_value = parseInt(time_taken.value);
				var processName = i;
				var arrival = document.getElementById('arrival_' + i).value;
				processDict = {'name': 'p' + processName, 'arrival': arrival, 'process_time': time_taken_value, 'y0': null, 'y1': null};
				processList.push(processDict);
			}
		}
	}
	populateProcessList();

	processList.sort((a, b) => {
		let keyA = a.process_time;
		let keyB = b.process_time;
		if (keyA < keyB) return -1;
		if (keyA > keyB) return 1;
		return 0;
	});

	var counter = 0;
	var interval = 0;
	let dataPointsList = [];
	for (i = 0; i < processList.length; i++) {
		processList[i].y0 = counter;
		counter += parseInt(processList[i].process_time);
		processList[i].y1 = counter;
		dataPointsDict = {x: interval, y:[processList[i].y0, processList[i].y1], label: processList[i].name};
		dataPointsList.push(dataPointsDict);
	}
	return dataPointsList;
}
