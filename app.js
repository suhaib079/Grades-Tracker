
'use strict';

var table = document.getElementById('tables');

function Course(studentname,courcename){
  this.studentname = studentname;
  this.courcename = courcename;
  this.mark = generateRandommark();
  cource.prototype.allCource.push(this);
}
Course.prototype.allCource = [];
Course.prototype.display = function(){
  var courceRow = document.createElement('tr');
  table.appendChild(courceRow);

  var studentnamevalue = document.createElement('td');
  studentnamevalue.textContent = this.studentname;
  courceRow.appendChild(studentnamevalue);

  var courcenamevalue = document.createElement('td');
  courcenamevalue.textContent = this.cource;
  courceRow.appendChild(courcenamevalue);

  var markdata = document.createElement('td');
  markdata.textContent = this.mark;
  courceRow.appendChild(markdata);

};


if(localStorage.getItem('courceObjects')){
  var lsArray = JSON.parse(localStorage.getItem('courceObjects'));
  for(var i = 0; i < lsArray.length; i++){
    new Course(lsArray[i].studentname, lsArray[i].courcename, lsArray[i].mark);
  }
}
createTable();


var form = document.getElementById('myForm');
form.addEventListener('submit',addcource);

function addcource(event){
  event.preventDefault();
  var studentnamevalue = event.target.studentname.value;
  var courcenameValue = event.target.courcenameValue.value;
  var marksvalue = event.target.marks.value;

  var usercource = new Course(studentnamevalue, courcenameValue,marksvalue);

  localStorage.setItem('courceObjects', JSON.stringify(Course.prototype.allCource));
  // userCar.display();
  createTable();

  console.log(Course.prototype.allCource);
}



function generateRandommark(){
  return Math.floor(Math.random() * (100 - 0) + 0);
}


function createTable(){
  table.innerHTML = '';
  createHeader();
  for(var i = 0; i < Course.prototype.allCource.length; i++){
    Course.prototype.allCource[i].display();
  }
}

function createHeader(){
  var headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  var studentnameheader = document.createElement('th');
  studentnameheader.textContent = 'student name';
  headerRow.appendChild(studentnameheader);

  var courcenameheader = document.createElement('th');
  courcenameheader.textContent = 'cource name';
  headerRow.append(courcenameheader);

  var markheader = document.createElement('th');
  markheader.textContent = 'mark';
  headerRow.append(markheader);

}


