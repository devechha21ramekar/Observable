var promise = new Promise(function(resolve, reject){
  
    var xhr = new XMLHttpRequest();

  xhr.open('GET', "https://angular2-1138d.firebaseio.com/data.json");

// Part 4 - Defining callbacks that XHR object will call for us
xhr.onload = function(){
if (xhr.status === 200) {
        resolve(xhr.response);
    }
  if(xhr.status === 401){
  reject('error found');
  
}
}


xhr.onerror = function(err) {
  console.log(err);
    reject("Unable to load data");
}

// Part 5 - Starting the process
xhr.send();
  
});

var processJSON = function (json) {
var result = JSON.parse(json);
  console.log(result);
    var myArr = [];
            for(var key in result){
                myArr.push(result[key]);
            }
            
            console.log(myArr);
     var student;
            for (var j = 0; j < myArr.length; j++) {
                student = {
                    name: "Name: " + myArr[j].username,
                    mail: "Email: " + myArr[j].email
                    
                };
                var table = document.getElementById("myTable");
                var row = table.insertRow(j);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                

                cell1.innerHTML = student.name,
                cell2.innerHTML = student.mail
                
            }
    
}

promise.then(function(value){
  
  processJSON(value);
},function(value){
  console.log(value);
  var table = document.getElementById("myTable");
  table.innerHTML = value;
})

