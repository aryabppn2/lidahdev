function logiageStructure(){
    return'<h2 style=color:lightblue>login sekarang</h2> '+
'<input type=text id=input-useraddress class=input-text-loggin placeholder=username><br>'+
'<input type=password id=input-user-pass class=pass-container placeholder=password style=color:red><br>'+
'<button onclick=Registered_account() class=btn-upload>daftar</button>'+
'<button onclick=loggin_account() class=btn-upload style=background-color:green>login</button>'


}


function connect_loginPage(){
    document.getElementById('data-input').innerHTML=logiageStructure()
    
}

function structure_accountHeader(){
    return'<fieldset id=data-field class=dat-private>'+
'<div id=uploader-database ></div>'+  
'<div id=mas-database></div>'+  
'<div>'+

'</fieldset>'
    
}
function pmailAddress(address,pass){
    return'<select class=chat-container id=user-data>'+
    '<option id=useraddress-output onclick=setting_account()>'+address+'</option>'+
    '<option id=address>'+address+'Pmail.com</option>'+
    '<option id=user-pass style=background-color:light-gray>'+pass+'</option>'+
    '</select>'+
    '<select id=chat-recenly-list class=chat-container>'+
    '<option> barusan chat</option>'+
    '</select>'+
    '<select id=visitor-view class=chat-container style=color:green>'+
    '<option onclick=addFriendsChat()>teman</option>'+
    '</select>'
    

}

function chatFeature_structure(targetaddress){
    return'<fieldset class=chat-wrapper id=chat-database>'+
'<legend style=color:purple onclick=restChat() id=target-address>'+targetaddress+'</legend>'+
    '</fieldset>'+
    '<div id=input-chat><textarea id=input-chat-value class=chat-input-container placeholder=ketikan-sesuatu></textarea>'+
    '<button onclick=Sent_ChatData() classs=btn-upload>kirim</button></div>'
}


function structure_settAcount(username,pass){
    return'<fieldset style=border-color:blue>'+
'<fieldset style=boder-color:lightblue;color:blue onclick=settinguseraddress() class=sett-account id=sett-address>'+username+'</fieldset><br>'+
'<fieldset style=border-color:orange;color:lightgray id=set-pass onclick=setPass()>'+pass+'</fieldset><br>'+
'<button onclick=connect_toAddNews() style=color:red; class=private-menu>berita</button>'+
'<button onclick= connect_toaddweb() class=private-menu style=color:blue>web</button>'+
'<button onclick=connect_toaddProduct() class=private-menu style=color:orange>market</button><br>'+
'<button onclick=loggin_out() class=btn-upload style=border-color:red; color:red>log out</button>'+
    '</fieldset>'
}

function connect_toAddNews(){
const address=document.getElementById('useraddress-output');
document.getElementById('data-input').innerHTML=addNews_structure(address.innerHTML)


}
function addNews_structure(address){
    return'<fieldset style=border-color:blue>'+
'<legend id=username-addnews>'+address+'</legend>'+
'<input type=color id=input-signColor onclick=runTitileColor()><input type=color id=input-bordercolor onclick=runContainerColor()><br>'+
'<input type=text id=input-title class=input-text-data placeholder=judul><br>'+
'<textarea id=input-data-contain class=input-prg-data placeholder=isi></textarea><br>'+
'<button onclick=database_connect() class=btn-upload style=color:orange>upload</button>'+
    '</fieldset>'
}

function texteditor_structure(address){
    return'<fieldset style=border-color:blue>'+
'<legend onclick=showhtmlTemplate()>'+address+'</legend>'+
'<input type=text id=input-webname placeholder=nama-mas>'+
'<input type=color id=input-border-color onclick=runBorderStyle() class=sizing-borderstyle=margin-left:100pz><br>'+
'<ul class=editor_text-wrapper>'+
'<textarea id=input-text-edit placeholder=tulis-sesuatu class=editor></textarea>'+
'<button onclick=run() class=editor-bar style=background-color:green;color:whitesmoke>run</button>'+
'<fieldset>'+
'<legend>'+address+'</legend>'+
'<b id=web-address>'+
'<span id=web-name></span>-mas-'+address+
'</b>'+
 '<fieldset id=run-editor-place class=editor></fieldset>'+
'<button onclick=post_web() class=editor-bar-post>posting</button>'+
    '</fieldset>'
}

function runBorderStyle(){
    const inputColor=document.getElementById('input-border-color').value
    document.getElementById('web-address').style.color=inputColor;
    document.getElementById('web-address').style.borderColor=inputColor
}

function showhtmlTemplate(){
  const address={
    user:document.getElementById('useraddress-output'),
    color:document.getElementById('input-border-color').value
  }
  document.getElementById('input-text-edit').innerHTML=html(address.user.innerHTML,address.color)
}


function html(address,color){
    return'<html>'+
    '<body>'+
    '<h1 style=color:'+color+'>hallo '+address+'</h1>'+
    '</body>'+
    '</html>'
}

function run(){
    const dataInput={
        address:document.getElementById('input-webname').value,
        data:document.getElementById('input-text-edit').value,
        color:document.getElementById('input-border-color').value
    }
    document.getElementById('web-name').innerHTML=dataInput.address;
    document.getElementById('web-name').style.color=dataInput.color
    document.getElementById('run-editor-place').innerHTML=dataInput.data;

}



function connect_toaddweb(){
    const address=document.getElementById('useraddress-output');
    const dataInput=document.getElementById('data-input')
    dataInput.innerHTML=texteditor_structure(address.innerHTML)
}




function runTitileColor(){
    const inpuColor=document.getElementById('input-signColor').value
    document.getElementById('input-title').style.color=inpuColor;
    document.getElementById('input-data-contain').style.borderColor=inpuColor
}

function runContainerColor(){
    const inputColor=document.getElementById('input-bordercolor').value;
    document.getElementById('input-data-contain').style.color=inputColor
}

function runStylecol(){
    const inputcolor=document.getElementById('input-sign-color').value;
    const el=[document.getElementById('useraddress-output'),document.getElementById('bar-private'),document.getElementById('visitor-data'),document.getElementById('sett-address'),document.getElementById('username-addnews')]
    for(var i=0; i<=el.length; i++){
        el[i].style.color=inputcolor
    }

    

}



function