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
    '<legend id=useraddress-output onclick=settinguseraddress()>'+address+'</legend>'+
'<div id=uploader-database ></div>'+  
'<div id=market-database></div>'+
'</fieldset><div id=groupt-database-private></div>';

    
}





function pmailAddress(address,pass,location){
    return`<select class=chat-container id=user-data>
    <option id=address>${address}Pmail.com</option>
    <option id=user-pass style=background-color:light-gray onclick=setPass()>${pass}</option>
    <option id=location style=color:lightgreen onclick=setLoc()>${location}</option>
    <option onclick=connect_toAddNews() style=color:red; class=private-menu>berita</option>
    <option onclick=loggin_out() class=btn-upload style=border-color:red; color:red>log out</option>
    </select>
    <select id=chat-recenly-list class=chat-hreff>
    <option> barusan chat</option>
    </select>
    <select id=visitor-view class=chat-hreff style=color:lightgreen>
    <option onclick=addFriendsChat()>kenalan</option>
    </select>
    <select id=groupt-view class=chat-hreff style=color:lightgreen>
    <option onclick=addGroupt() style=color:orange>komunitas</option>
    </select>
    <div id=groupt-bar></div>`

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

function addGroupt(){
    const interface={
        datainput:document.getElementById('data-input'),
        address:document.getElementById('useraddress-output')
    };
    interface.datainput.innerHTML=CreateGrouptPage(interface.address.innerHTML)
}

function CreateGrouptPage(useraddress){
    return`<input type=text id=input-Groupt-name class=input-groupt-container placeholder=nama groupt>
    <select id=groupt-member-input class=member-container>
    <option onclick=addMember()>${useraddress}</option>
    </select>
    <span id=admin-sett onclick=settAdmin() style=color:lightgreen>admin group</span><br>
    <button onclick=CreateFail() class=btn-create id=create-groupt>buat groupt</button>
    `
}

function CreateFail(){
    alert('maaf anggota belum ada')
}
function settAdmin(){
    const admin={
        adminOld:document.getElementById('admin-sett'),
        adminNew:document.getElementById('groupt-member-input').value
    }
    admin.adminOld.innerHTML=admin.adminNew
}

function addMember(){
    const member={
        list:document.getElementById('groupt-member-input'),
        add:prompt('nama orang')
    };
    const add={
        opt:document.createElement('option'),
        val:document.createTextNode(member.add)
    }
    member.list.appendChild(add.opt);
    add.opt.appendChild(add.val)
    document.getElementById('create-groupt').setAttribute('onclick','create()')
}





