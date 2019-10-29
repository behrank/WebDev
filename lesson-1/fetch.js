
/*function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(-1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
};
 myFunction();*/

function getJson() {

    var tableRef = document.getElementById("myTable");//yeni row ve cell eklenecek olan table
    var newRow = tableRef.insertRow(tableRef.rows.length); // yeni row eklemece
    var newCell = newRow.insertCell(0); // sona cell eklemece
    var newText  = document.createTextNode(''); // cell içerisindeki data
    newCell.appendChild(newText); // sırayla cell ekleme

    fetch("https://reqres.in/api/users?page=1").then(function (response) {

        return response.json();

    }).then(function (users) {
        console.log(users);


        users.data.forEach(function (user_info) {

            var email_info = (user_info.email);
           // document.write(email_info);
            newText = (email_info);
        });

        users.data.forEach(element => {

            //document.write("her bir üyenin idsi :" + " " + element.id + "<br>");
        });

    });

}
getJson();
