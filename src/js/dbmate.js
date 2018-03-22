const postURL = 'https://ethercalc.org/_/622t4v2804sk'
const columsArray = ("C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z").split(",");

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



async function CreateData(functionName, col_list) {
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

function ReadDataByID(key) { // use >> var getdata=await GetAllData();
  return new Promise(resolve => {
    $.get(postURL + '/csv.json', function (data, status) {
      resolve(data[key-1]);
    });
  });
}

function UpdateData(key, col_list) {

  var colData = '';
  for (var i = 0; i < col_list.length; i++) {
    $.ajax({
      url: postURL,
      type: 'POST',
      dataType: 'application/json',
      contentType: 'text/plain',
      processData: false,
      data: 'set ' + columsArray[i] + key + ' text t ' + col_list[i]
    }).then(

    );
  }
}

function DeleteData(key) {
  var colData = '';

    $.ajax({
      url: postURL,
      type: 'POST',
      dataType: 'application/json',
      contentType: 'text/plain',
      processData: false,
      data: 'set A' + key +':'+ columsArray[columsArray.length-1] + key+ ' empty ' 
    }).then(

    );
  
}


window.GetInsertKey = GetInsertKey;
window.clsFunction = clsFunction;
window.GetAllData = GetAllData;
window.CreateData = CreateData;
window.ReadDataByID = ReadDataByID;
window.UpdateData = UpdateData;
window.DeleteData = DeleteData;