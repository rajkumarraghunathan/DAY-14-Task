// container
let container = document.createElement("div");
container.setAttribute("class","container color");

//Heading div
let heading = document.createElement("div");
heading.setAttribute("class","text-center p-3");

//Heading 
let h1 = document.createElement("h1");
h1.setAttribute("class","h1");
h1.setAttribute("id","title");
h1.innerText="HTML FORM";

// Paragraph Div
let paraDiv = document.createElement("div");
paraDiv.setAttribute("class","text-center");

// Paragraph
let para=document.createElement("p");
para.setAttribute("id","description");
para.innerText = "This Form to store the value from the give form and added into the respective table";

// form Div
let formDiv = document.createElement("form");
formDiv.setAttribute("class","p-4 formDiv");
formDiv.setAttribute("id","form");

// first name div
let firstNameDiv = document.createElement("div");
firstNameDiv.setAttribute("class","form-group row p-2");

// firstName label create
let firstNameLabel = document.createElement("label");
firstNameLabel.setAttribute("class"," label col form-label col-3");
firstNameLabel.innerText="First Name:";

// firstName input create
let firstName = document.createElement("input");
firstName.setAttribute("type","text");
firstName.setAttribute("class","form-control col ");
firstName.setAttribute("placeholder","First Name");
firstName.setAttribute("id","first-name");
firstName.required = true;

// Address div
let addressDiv = document.createElement("div");
addressDiv.setAttribute("class","form-group row p-2");

// Address label create
let addressLabel = document.createElement("label");
addressLabel.setAttribute("class"," label col form-label col-3");
addressLabel.innerText="Address:";

// Address input create
let address = document.createElement("textarea");
address.setAttribute("type","textarea");
address.setAttribute("class","form-control col ");
address.setAttribute("placeholder","Address");
address.setAttribute("id","address");
address.required = true;

// last name div
let lastNameDiv = document.createElement("div");
lastNameDiv.setAttribute("class","form-group row p-2");

// lasstName label create
let lastNameLabel = document.createElement("label");
lastNameLabel.setAttribute("class"," label col form-label col-3");
lastNameLabel.innerText="Last Name:";

// laststName input create
let lastName = document.createElement("input");
lastName.setAttribute("type","text");
lastName.setAttribute("class","form-control col ");
lastName.setAttribute("placeholder","Last Name");
lastName.setAttribute("id","last-name");
lastName.required = true;

// pin div
let pinCodeDiv = document.createElement("div");
pinCodeDiv.setAttribute("class","form-group row p-2");

// pin label create
let pinCodeLabel = document.createElement("label");
pinCodeLabel.setAttribute("class"," label col form-label col-3");
pinCodeLabel.innerText="PinCode:";

// pin input create
let pinCode = document.createElement("input");
pinCode.setAttribute("type","text");
pinCode.setAttribute("class","form-control col ");
pinCode.setAttribute("placeholder","PinCode");
pinCode.setAttribute("id","pincode");
pinCode.required = true;

// Gender div
let genderDiv = document.createElement("div");
genderDiv.setAttribute("class","form-group row p-2");

// Gender Label
let genderLabel = document.createElement("label");
genderLabel.setAttribute("class"," label col form-label col-3");
genderLabel.innerText="Gender:";

// div 2
let inputDiv = document.createElement("div");
inputDiv.setAttribute("class","col form-check-inline");

// male Input
let male = document.createElement("input");
male.setAttribute("type","radio");
male.setAttribute("class","form-check-input col ");
male.setAttribute("id","male");
male.setAttribute("value","male");
male.setAttribute("name","gender");


// male label
let maleLabel = document.createElement("label");
maleLabel.setAttribute("class"," form-check-label");
maleLabel.setAttribute("for","male");
maleLabel.innerText="Male";

// div 3
let inputDivFemale = document.createElement("div");
inputDivFemale.setAttribute("class","col form-check-inline");

// female Input
let female = document.createElement("input");
female.setAttribute("type","radio");
female.setAttribute("class","form-check-input col ");
female.setAttribute("id","female");
female.setAttribute("value","female");
female.setAttribute("name","gender");


// female label
let femaleLabel = document.createElement("label");
femaleLabel.setAttribute("class"," form-check-label");
femaleLabel.setAttribute("for","female");
femaleLabel.innerText="Female";

// food div
let foodDiv = document.createElement("div");
foodDiv.setAttribute("class","form-group row p-2");

// food Label
let foodLabel = document.createElement("label");
foodLabel.setAttribute("class"," label col form-label col-3");
foodLabel.innerText="Food:";

// div 2
let inputDivFood1 = document.createElement("div");
inputDivFood1.setAttribute("class","col form-check-inline");

// idly Input
let idly = document.createElement("input");
idly.setAttribute("type","checkbox");
idly.setAttribute("class","form-check-input col ");
idly.setAttribute("id","idly");
idly.setAttribute("value","idly");
idly.setAttribute("name","food");


// idly label
let idlyLabel = document.createElement("label");
idlyLabel.setAttribute("class"," form-check-label");
idlyLabel.setAttribute("for","idly");
idlyLabel.innerText="Idly";


// div 3
let inputDivFood2 = document.createElement("div");
inputDivFood2.setAttribute("class","col form-check-inline");

// dosa Input
let dosa = document.createElement("input");
dosa.setAttribute("type","checkbox");
dosa.setAttribute("class","form-check-input col ");
dosa.setAttribute("id","dosa");
dosa.setAttribute("value","dosa");
dosa.setAttribute("name","food");


// dosa label
let dosaLabel = document.createElement("label");
dosaLabel.setAttribute("class"," form-check-label");
dosaLabel.setAttribute("for","dosa");
dosaLabel.innerText="Dosa";

// div 4
let inputDivFood3 = document.createElement("div");
inputDivFood3.setAttribute("class","col form-check-inline");

// poori Input
let poori = document.createElement("input");
poori.setAttribute("type","checkbox");
poori.setAttribute("class","form-check-input col ");
poori.setAttribute("id","poori");
poori.setAttribute("value","poori");
poori.setAttribute("name","food");

// poori label
let pooriLabel = document.createElement("label");
pooriLabel.setAttribute("class"," form-check-label");
pooriLabel.setAttribute("for","poori");
pooriLabel.innerText="Poori";

// div 5
let inputDivFood4 = document.createElement("div");
inputDivFood4.setAttribute("class","col form-check-inline");

// briyani Input
let briyani = document.createElement("input");
briyani.setAttribute("type","checkbox");
briyani.setAttribute("class","form-check-input col ");
briyani.setAttribute("id","briyani");
briyani.setAttribute("value","briyani");
briyani.setAttribute("name","food");


// briyani label
let briyaniLabel = document.createElement("label");
briyaniLabel.setAttribute("class"," form-check-label");
briyaniLabel.setAttribute("for","briyani");
briyaniLabel.innerText="Briyani";

// div 6
let inputDivFood5 = document.createElement("div");
inputDivFood5.setAttribute("class","col form-check-inline");

// chappati Input
let chappati = document.createElement("input");
chappati.setAttribute("type","checkbox");
chappati.setAttribute("class","form-check-input col ");
chappati.setAttribute("id","chappati");
chappati.setAttribute("value","chappati");
chappati.setAttribute("name","food");


// chappati label
let chappatiLabel = document.createElement("label");
chappatiLabel.setAttribute("class"," form-check-label");
chappatiLabel.setAttribute("for","chappati");
chappatiLabel.innerText="Chappati";

// State div
let stateDiv = document.createElement("div");
stateDiv.setAttribute("class","form-group row p-2");

// state label
let stateLabel = document.createElement("label");
stateLabel.setAttribute("class","col form-label col-3");
stateLabel.innerText="State:";

// select
let select = document.createElement("select");
select.setAttribute("class","form-control col");
select.setAttribute("id","state");
// option 
let option = document.createElement("option");
option.innerText="Select the state";


// option 1
let option1 = document.createElement("option");
option1.innerText="Tamil Nadu";
option1.setAttribute("value","Tamil Nadu");

// option 2
let option2 = document.createElement("option");
option2.innerText="Andhra Pradesh";
option2.setAttribute("value","Andhra Pradesh");

// option 3
let option3 = document.createElement("option");
option3.innerText="Kerala";
option3.setAttribute("value","Kerala");

// option 4
let option4 = document.createElement("option");
option4.innerText="Karnataka";
option4.setAttribute("value","Karnataka");

// option 5
let option5 = document.createElement("option");
option5.innerText="Telungana";
option5.setAttribute("value","Telungana");

// country div
let countryDiv = document.createElement("div");
countryDiv.setAttribute("class","form-group row p-2");

// country label
let countryLabel = document.createElement("label");
countryLabel.setAttribute("class","col form-label col-3");
countryLabel.innerText="Country:";

// select
let select1 = document.createElement("select");
select1.setAttribute("class","form-control col");
select1.setAttribute("id","country");
// option 
let option6 = document.createElement("option");
option6.innerText="Select the country";


// option 7
let option7 = document.createElement("option");
option7.innerText="India";
option7.setAttribute("value","India");

// option 8
let option8 = document.createElement("option");
option8.innerText="Pakishtan";
option8.setAttribute("value","Pakishtan");

// option 9
let option9 = document.createElement("option");
option9.innerText="Russia";
option9.setAttribute("value","Russia");

// option 10
let option10 = document.createElement("option");
option10.innerText="China";
option10.setAttribute("value","China");

// option 11
let option11 = document.createElement("option");
option11.innerText="USA";
option11.setAttribute("value","USA");

// button div
let buttonDiv = document.createElement("div");
buttonDiv.setAttribute("class","text-center  ");

// Submit button
let button = document.createElement("button");
button.setAttribute("class","btn btn-primary");
button.setAttribute("type","submit");
button.setAttribute("value","Submit");
button.setAttribute("id","submit");
button.innerText = "Submit";
button.addEventListener("click",(event) => {
    event.preventDefault();
})

// Table div
let tableDiv = document.createElement("div");
tableDiv.setAttribute("class","");

// table create
let table = document.createElement("table");
table.setAttribute("class","table table-success table-striped table-bordered");

// table head
let tableHead = document.createElement("thead");

// table row
let tableRow = document.createElement("tr");

// table cell 1
let th1 = document.createElement("th");
th1.innerText = "First Name";
th1.setAttribute("scope","col");

// table cell 2
let th2 = document.createElement("th");
th2.innerText = "Last Name";
th2.setAttribute("scope","col");

// table cell 3
let th3 = document.createElement("th");
th3.innerText = "Address";
th3.setAttribute("scope","col");

// table cell 4
let th4 = document.createElement("th");
th4.innerText = "Pincode";
th4.setAttribute("scope","col");

// table cell 5
let th5 = document.createElement("th");
th5.innerText = "Gender";
th5.setAttribute("scope","col");

// table cell 6
let th6 = document.createElement("th");
th6.innerText = "Food";
th6.setAttribute("scope","col");

// table cell 7
let th7 = document.createElement("th");
th7.innerText = "State";
th7.setAttribute("scope","col");

// table cell 8
let th8 = document.createElement("th");
th8.innerText = "Country";
th8.setAttribute("scope","col");

// table body
var tbody = document.createElement('tbody');

tableHead.append(tableRow);
tableRow.append(th1,th2,th3,th4,th5,th6,th7,th8);
table.append(tableHead,tbody);
tableDiv.append(table);
buttonDiv.append(button);
select1.append(option6,option7,option8,option9,option10,option11);
countryDiv.append(countryLabel,select1);
select.append(option,option1,option2,option3,option4,option5);
stateDiv.append(stateLabel,select);
inputDivFood5.append(chappati,chappatiLabel);
inputDivFood4.append(briyani,briyaniLabel);
inputDivFood3.append(poori,pooriLabel);
inputDivFood2.append(dosa,dosaLabel);
inputDivFood1.append(idly,idlyLabel);
foodDiv.append(foodLabel,inputDivFood1,inputDivFood2,inputDivFood3,inputDivFood4,inputDivFood5);
inputDivFemale.append(female,femaleLabel);
inputDiv.append(male,maleLabel);
genderDiv.append(genderLabel,inputDiv,inputDivFemale);
pinCodeDiv.append(pinCodeLabel,pinCode);
addressDiv.append(addressLabel,address);
lastNameDiv.append(lastNameLabel,lastName);
firstNameDiv.append(firstNameLabel,firstName);
formDiv.append(firstNameDiv,lastNameDiv,addressDiv,pinCodeDiv,genderDiv,foodDiv,stateDiv,countryDiv,buttonDiv,);
paraDiv.append(para);
heading.append(h1);
container.append(heading,paraDiv,formDiv,tableDiv);
document.body.append(container);

const formClickHandler=(e) =>{
    e.preventDefault();
}
button.addEventListener("click",() => {
    var fn = document.getElementById("first-name").value;
    var ln = document.getElementById("last-name").value;
    var ad = document.getElementById("address").value;
    var pc = document.getElementById("pincode").value;
  
    

        let tablebody = document.querySelector('tbody');
        var trow2 = tablebody.insertRow(0);
        var cell1 = trow2.insertCell(0);
        var cell2 = trow2.insertCell(1);
        var cell3 = trow2.insertCell(2);
        var cell4 = trow2.insertCell(3);
        var cell5 = trow2.insertCell(4);
        var cell6 = trow2.insertCell(5);
        var cell7 = trow2.insertCell(6);
        var cell8 = trow2.insertCell(7);
        cell1.innerHTML = fn;
        cell2.innerHTML = ln;
        cell3.innerHTML = ad;
        cell4.innerHTML = pc;


// gender value added
        var data = document.getElementsByName('gender');
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked)
                cell5.innerHTML = data[i].value;
        }

       
// food value added
let food = document.getElementsByName("food");
let box =[];
let count =0;
for(let i=0;i<food.length;i++){
    if(food[i].checked){
        box.push(food[i].value);
        
        // output =box.join(","); 
        count++;    
   
    }
}

if (box.length>=2)
{
   //alert("Food select");
    
}
else
{
    let output= alert("Choose atleast 2 foods");
}
   

      // document.getElementsByName("food").innerHTML=result;
       cell6.innerHTML = box;
      
        
  // state value added      
        let a = document.getElementById('state');
        cell7.innerHTML = document.getElementById('state').value;

        // country value added
        cell8.innerHTML = document.getElementById('country').value;

        alert('Thanks for submitting the form!!')
   

});