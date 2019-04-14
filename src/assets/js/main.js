
var dataset_final;
var aval_final;
function getDataset(dataset) {
	dataset_final = dataset;
	console.log(dataset_final);
}
function show(dfhskj) {
	aval_final = dfhskj;
	console.log(aval_final);
}
function validate() {
	
	if (aval_final == "2016" && dataset_final == "activity.csv") {
		console.log(aval_final);
		readCSV();
	} else if (aval_final == "2016" && dataset_final == "asset.csv") {
		console.log(aval_final);
		console.log(dataset_final);
		readCSV_2();
	} else if (aval_final == "2016" && dataset_final == "Transaction.csv") {
		console.log(aval_final);
		console.log(dataset_final);
		readCSV_3();
	} else if (aval_final == "2016" && dataset_final == "Experience.csv") {
		console.log(aval_final);
		console.log(dataset_final);
		readCSV_4();
	} else{
		hiddenDiv.style.display='none';
		console.log('Failed');
	}

	if (aval_final == "2017" && dataset_final == "activity.csv") {
		console.log(aval_final);
		hiddenDiv2017.style.display='inline-block';
	} else if (aval_final == "2017" && dataset_final == "asset.csv") {
		console.log(aval_final);
		console.log(dataset_final);
		hiddenDiv2017.style.display='inline-block';
	} else if (aval_final == "2017" && dataset_final == "Transaction.csv") {
		console.log(aval_final);
		console.log(dataset_final);
		hiddenDiv2017.style.display='inline-block';
	} else if (aval_final == "2017" && dataset_final == "Experience.csv") {
		console.log(aval_final);
		console.log(dataset_final);
		hiddenDiv2017.style.display='inline-block';
	} else{
		hiddenDiv2017.style.display='none';
	}
}


function readCSV() {
	$.ajax({
		type: "GET",
		url: "http://localhost:4200/assets/main/Activity.csv",
		success: function (data) {
			var employee_data = data.split(/\r?\n|\r/);
			var table_data = '<table class="table table-bordered table-striped">';
			for(var count = 0; count<employee_data.length; count++)
			{
				var cell_data = employee_data[count].split(",");
				table_data += '<tr>';
				for(var cell_count=0; cell_count<cell_data.length; cell_count++)
				{
					if(count === 0)
					{
						table_data += '<th>'+cell_data[cell_count]+'</th>';
					}
					else
					{
						table_data += '<td>'+cell_data[cell_count]+'</td>';
					}
				}
				table_data += '</tr>';
			}
			table_data += '</table>';
			$('#activity_table').html(table_data);
		}
	});
}

function readCSV_2() {
	$.ajax({
		type: "GET",
		url: "http://localhost:4200/assets/main/asset.csv",
		success: function (data) {
			var employee_data = data.split(/\r?\n|\r/);
			var table_data = '<table class="table table-bordered table-striped">';
			for(var count = 0; count<employee_data.length; count++)
			{
				var cell_data = employee_data[count].split(",");
				table_data += '<tr>';
				for(var cell_count=0; cell_count<cell_data.length; cell_count++)
				{
					if(count === 0)
					{
						table_data += '<th>'+cell_data[cell_count]+'</th>';
					}
					else
					{
						table_data += '<td>'+cell_data[cell_count]+'</td>';
					}
				}
				table_data += '</tr>';
			}
			table_data += '</table>';
			$('#asset_table').html(table_data);
		}
	});
}

function readCSV_3() {
	$.ajax({
		type: "GET",
		url: "http://localhost:4200/assets/main/Transaction.csv",
		success: function (data) {
			var employee_data = data.split(/\r?\n|\r/);
			var table_data = '<table class="table table-bordered table-striped">';
			for(var count = 0; count<employee_data.length; count++)
			{
				var cell_data = employee_data[count].split(",");
				table_data += '<tr>';
				for(var cell_count=0; cell_count<cell_data.length; cell_count++)
				{
					if(count === 0)
					{
						table_data += '<th>'+cell_data[cell_count]+'</th>';
					}
					else
					{
						table_data += '<td>'+cell_data[cell_count]+'</td>';
					}
				}
				table_data += '</tr>';
			}
			table_data += '</table>';
			$('#Transaction_table').html(table_data);
		}
	});
}

function readCSV_4() {
	$.ajax({
		type: "GET",
		url: "http://localhost:4200/assets/main/Experience.csv",
		success: function (data) {
			var employee_data = data.split(/\r?\n|\r/);
			var table_data = '<table class="table table-bordered table-striped">';
			for(var count = 0; count<employee_data.length; count++)
			{
				var cell_data = employee_data[count].split(",");
				table_data += '<tr>';
				for(var cell_count=0; cell_count<cell_data.length; cell_count++)
				{
					if(count === 0)
					{
						table_data += '<th>'+cell_data[cell_count]+'</th>';
					}
					else
					{
						table_data += '<td>'+cell_data[cell_count]+'</td>';
					}
				}
				table_data += '</tr>';
			}
			table_data += '</table>';
			$('#Experience_table').html(table_data);
		}
	});
}
