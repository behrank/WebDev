
/* 
Tablo bilgilerini buraya tanımlıyorum. 
Böylece tüm fonksiyonlardan erişebilirim. 
Fonksiyon içinde tanımlarsam sadece o fonksiyon içinde erişebilirim. 
*/

//Table'da birden fazla tablebody olabilir. O nedenle bu sonuç array döner. 0. element yani ilkini aldım.
var usersTable = document.getElementById("myTable").getElementsByTagName('tbody')[0]; 

function getJson() {
    fetch("https://reqres.in/api/users?page=1").then(function (response) {
        return response.json();//fetch edilen dosyajson olarak response içine atıldı
    }).then(function (users) { //json olan response users içerisinde.
        users.data.forEach(function (user_info) {//users arrayı içerisindeki her bilgi ayrı ayrı user_info içerisinde
            /*
                Buradaki işlemleri ayırdım. Öbür türlü en alttaki gibi yazmak gerekirdi. 
                O zamanda okunabilirliği ve debug etmesi zorlaşırdı.
            */

            addNewRow(user_info); //addnewrow fonksiyonu elementi user_info arrayı
             let sayi = (users.data.length);
             document.getElementById("count").innerHTML = "listenen üye sayisi : " + sayi;
        });
        
    });
    
}

function addNewRow(newRowObjectFromJson) { //users_info -> newRowObjectFromJson
    //Eklenecek cell'leri oluşturalım. Index'e göre soldan sağa doğru
    var newUserRow = usersTable.insertRow() // userstable tablosuna row atar
    var newIdCell = newUserRow.insertCell(0);// array olduğu için 0 dan başlıyor.
    var newEmailCell = newUserRow.insertCell(1); //userstable tablosuna row atar ve email sırasına yeni bir cell atar
    var newFirstNameCell = newUserRow.insertCell(2);
    var newLastNameCell = newUserRow.insertCell(3);
    var newAvatarCell = newUserRow.insertCell(4);
    /*
        Aynı kodu tekrar yazmak yerine yeni textnode yaratmayı ayırdım. O fonksiyondan dönen değeri de appendChild'e verdim.
    */
    newIdCell.appendChild(addTextNodeToCell(newRowObjectFromJson.id));//newidcelli atandıktan sonra yeni gelen datalar hep devam edecek biçimde aynı sıradan eklenecek.
    newEmailCell.appendChild(addTextNodeToCell(newRowObjectFromJson.email));
    newFirstNameCell.appendChild(addTextNodeToCell(newRowObjectFromJson.first_name));
    newLastNameCell.appendChild(addTextNodeToCell(newRowObjectFromJson.last_name));

    //cell in içine text yazarken yukarıdaki textnode u kullanabilirsin. ama için img, paragraf gibi html element i ekleyeceksen 
    // innerHTML'ini değiştirmen gerekiyor. Öbür türlü işe yaramaz. Deneyip gör.
    
    //newAvatarCell.appendChild(addTextNodeToCell(newRowObjectFromJson.avatar));
    newAvatarCell.innerHTML = addImageNodeToCell(newRowObjectFromJson.avatar);
   
   /* let say = newRowObjectFromJson.length;
    document.getElementById("count").innerHTML = "listelenen element sayisi : " +  say;*/
}
function addTextNodeToCell(newText) { //fonksiyon çağırıldığında belirtilen element yeni bir textnode olacak, içerisindeki yeni bilgi yeni bir cell.
    //Yeni text node'u yarattım.
    var newTextNode = document.createTextNode(newText);
    return newTextNode;
}
function addImageNodeToCell(imageUrl) {
    var imageNode = '<img src="' + imageUrl + '"/>'
    return imageNode;
} 
function clearTable() {
    /* içeriği silmek için yine innerHTML'imi silmek yeterli */
    usersTable.innerHTML = "";
}
/*
    Tabloya eklemeleri ayrı fonksiyonlara bölmeseydim şöyle olurdu:
    function getJson() {
    fetch("https://reqres.in/api/users?page=1").then(function (response) {
        return response.json();
    }).then(function (users) {
        users.data.forEach(function (user_info) {
                var newUserRow = usersTable.insertRow()
                var newIdCell = newUserRow.insertCell(0);
                var newEmailCell = newUserRow.insertCell(1);
                var newFirstNameCell = newUserRow.insertCell(2);
                var newLastNameCell = newUserRow.insertCell(3);
                var newAvatarCell = newUserRow.insertCell(4);
            
                newIdCell.appendChild(document.createTextNode(newRowObjectFromJson.id));
                newEmailCell.appendChild(document.createTextNode(newRowObjectFromJson.email));
                newFirstNameCell.appendChild(document.createTextNode(newRowObjectFromJson.first_name));
                newLastNameCell.appendChild(document.createTextNode(newRowObjectFromJson.last_name));
                newAvatarCell.appendChild(document.createTextNode(newRowObjectFromJson.avatar));
        });
    });
}
*/