const postURL = 'https://ethercalc.org/_/622t4v2804sk'


var clsFunction = Object.freeze
  ({
    "menu": "menu",
    "people": "people",
    "question": "question"
  })


function GetAllData() { // use >> var getdata=await GetAllData();
  return new Promise(resolve => {
    $.get(postURL + '/csv.json', function (data, status) {
      resolve(data);
    });
  });
}


function GetInsertKey() {
  return new Promise(resolve => {
    $.get(postURL + '/csv.json', function (data, status) {
      resolve((data.length + 1).toString());
    });
  });
}

async function insertData(functionName, col_list) {
  var colData = '';
  col_list.forEach(element => {
    colData += ',' + element;
  });
  var key = await GetInsertKey();

  $.ajax({
    url: postURL,
    type: 'POST',
    dataType: 'application/json',
    contentType: 'text/csv',
    processData: false,
    data: key + ',' + functionName + colData
  }).then(

  );
}

window.GetInsertKey = GetInsertKey;
window.clsFunction = clsFunction;
window.GetAllData = GetAllData;
window.insertData = insertData;
