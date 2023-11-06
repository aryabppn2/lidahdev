function logiageStructure(){
    return'<h2 style=color:lightblue>login sekarang</h2> '+
'<input type=text id=input-useraddress class=input-text-loggin placeholder=username><br>'+
'<input type=password id=input-user-pass class=pass-container placeholder=password style=color:red><br>'+
'<textarea id=business-loc class=txt-loc placeholder=lokasi></textarea>'+
'<br><button onclick=Registered_account() class=btn-upload>daftar</button>'+
'<button onclick=SignIn_account() class=btn-upload style=border-color:green;color:white>sign up</button>'
}
function connect_loginPage(){
    document.getElementById('data-input').innerHTML=logiageStructure()
    
}

function structure_accountHeader(address){
    return'<fieldset id=data-field class=dat-private>'+
    '<legend id=useraddress-output onclick=settAccount()>'+address+'</legend>'+
'<div id=uploader-database ></div>'+  
'<div id=market-database></div>'+
'</fieldset><div id=groupt-database-private></div>';

    
}





function pmailAddress(address,pass,location){
    return`<select class=chat-container id=user-data>
    <option id=address >${address}@Pmail.com</option>
    <option id=user-pass style=background-color:light-gray >${pass}</option>
    <option id=location style=color:lightgreen >${location}</option>
    </select>
    <div id=groupt-bar></div>`

}



function connect_toAddNews(){
const address=document.getElementById('useraddress-output');
document.getElementById('data-input').innerHTML=addNews_structure(address.innerHTML)


}

function addNews_structure(address){
    return `<fieldset>
<legend>${address}</legend>
<input type=text id=input-title class=input-text placeholder=judul-pengumuman><br>
<input type=text id=location-input class=input-set-text placeholder=dimana>
<input type=date id=input-date-release class=input-set-text><br>
<textarea id=input-text-value class=editor placeholder=isi-pembicaraan-${address}></textarea>
<textarea id=input-text1-value class=editor placeholder=inti pembahasan></textarea> 
<div class= news-uploader-wrapper>
<button onclick=Post_PublicNews() id=btn-public-news  classbtn-upload>posting</button>
   </div></fieldset>`
}





function style_data(select){
 select.setAttribute('class','select_dataInformation');
   

}



function dataRespont(useraddress,title,location,time,datVal,datVal1){
    return`<fieldset class=dat-post>
    <legend>${useraddress[0]}</legend>
    <select class=select_dataInformation>
   <option>${title[0]}</option>
   <option>${location[0]}</option>
   <option>${time[0]}</option>
   </select>
   <fieldset>${datVal[0]} </fieldset>
   <fieldset>${datVal1[0]}</fieldset>
    </fieldset>
    <fieldset class=dat-post>
    <legend>${useraddress[1]}</legend>
    <select class=select_dataInformation>
   <option>${title[1]}</option>
   <option>${location[1]}</option>
   <option>${time[1]}</option>
   </select>
   <fieldset>${datVal[1]} </fieldset>
   <fieldset>${datVal1[1]}</fieldset>
    </fieldset>
    `
}

function structure_settAccount(useraddress,pass,location){
    return`<fieldset style=border-color:lightgreen;color:whitesmoke onclick=settAddress() id=address-config>
    ${useraddress}</fieldset>
    <fieldset id=pass-config style=border-color:lightblue;color:blue onclick=settPass()>${pass}</fieldset>
    <fieldset style=color:orange onclick=settLoc() id=loc>${location}</fieldset>
    <button onclick=connect_toAddNews() class=bar-account>berita</button>
    <button onclick=connec_addGravity() class=bar-account>gravity</button><br>
    <button onclick=loggin_out() class=LoginOut-container>log out</button>
    `
}

