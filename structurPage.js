function logiageStructure(){
    return'<h2 style=color:lightblue>login sekarang</h2> '+
'<input type=text id=input-useraddress class=input-text-loggin placeholder=username><br>'+
'<input type=password id=input-user-pass class=pass-container placeholder=password style=color:red><br>'+
'<textarea id=business-loc class=txt-loc placeholder=lokasi></textarea>'+
'<br><button onclick=Registered_account() class=btn-upload>daftar</button>'+
'<button onclick=bussiness_loggin() class=btn-upload>bisnis</button>'
}
function connect_loginPage(){
    document.getElementById('data-input').innerHTML=logiageStructure()
    
}

function structure_accountHeader(address){
    return'<fieldset id=data-field class=dat-private>'+
    '<legend id=useraddress-output onclick=settinguseraddress()>'+address+'</legend>'+
'<div id=uploader-database ></div>'+  
'<div id=market-database></div>'+
'</fieldset><div id=groupt-database-private></div>';

    
}





function pmailAddress(address,pass,location){
    return'<select class=chat-container id=user-data>'+
    '<option id=address>'+address+'Pmail.com</option>'+
    '<option id=user-pass style=background-color:light-gray onclick=setPass()>'+pass+'</option>'+
    '<option id=location style=color:lightgreen onclick=setLoc()>'+location+'</option>'+
    '<option onclick=connect_toAddNews() style=color:red; class=private-menu>berita</option>'+
'<option onclick=loggin_out() class=btn-upload style=border-color:red; color:red>log out</option>'+
    '</select>'+
    '<select id=chat-recenly-list class=chat-hreff>'+
    '<option> barusan chat</option>'+
    '</select>'+
    '<select id=visitor-view class=chat-hreff style=color:lightgreen>'+
    '<option onclick=addFriendsChat()>kenalan</option>'+
    '</select>'+
    '<div id=groupt-bar></div>'

}
function chatFeature_structure(targetaddress){
    return'<fieldset>'+
'<legend style=color:lightblue onclick=restPrivateChat()() id=target-address>'+targetaddress+'</legend>'+
'<div id=chat-database class=chat-wrapper></div>'+
'<div id=input-chat><textarea id=input-chat-value class=chat-input-container placeholder=ketikan-sesuatu></textarea>'+
    '<button onclick=Sent_ChatData() classs=btn-upload>kirim</button></div>'+
'</fieldset>'

}



function connect_toAddNews(){
const address=document.getElementById('useraddress-output');
document.getElementById('data-input').innerHTML=addNews_structure(address.innerHTML)


}

function addNews_structure(address){
    return '<fieldset >'+
'<legend>'+address+'</legend>'+
'<input type=text id=input-title class=input-text placeholder=judul-pengumuman><br>'+
'<input type=text id=location-input class=input-set-text placeholder=dimana>'+
'<input type=date id=input-date-release class=input-set-text><br>'+
'<textarea id=input-text-value class=editor placeholder=isi-pembicaraan-'+address+'></textarea><br>'+
'<div class= news-uploader-wrapper>'+
'<button onclick=Post_PublicNews() id=btn-public-news  classbtn-upload>posting</button>'+
   '</div>'+ 
    '</fieldset>'
}





function style_data(select){
 select.setAttribute('class','select_dataInformation');
   

}



function dataRespont(useraddress,title,location,time,datVal){
    return`<fieldset>
    <legend>${useraddress}</legend>
    <select class=select_dataInformation>
   <option>${title}</option>
   <option>${location}</option>
   <option>${time}</option>
   </select><br>
   ${datVal} 
    </fieldset>
    `
}








