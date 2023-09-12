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

'</fieldset><div id=groupt-database></div>'

    
}
function pmailAddress(address,pass){
    return'<select class=chat-container id=user-data>'+
    '<option id=useraddress-output onclick=settinguseraddress()>'+address+'</option>'+
    '<option id=address>'+address+'Pmail.com</option>'+
    '<option id=user-pass style=background-color:light-gray onclick=setPass()>'+pass+'</option>'+
    '<option onclick=connect_toAddNews() style=color:red; class=private-menu>berita</option>'+
'<option onclick=loggin_out() class=btn-upload style=border-color:red; color:red>log out</option>'+
    '</select>'+
    '<select id=chat-recenly-list class=chat-container>'+
    '<option> barusan chat</option>'+
    '</select>'+
    '<select id=visitor-view class=chat-container style=color:green>'+
    '<option onclick=addFriendsChat()>teman</option>'+
    '</select>'+
    '<select id=groupt-list class=chat-container>'+
    '<option onclick=connect_ruteGroupt() style=color:orange>grup</option>'+
    '</select>'+'<span id=groupt-bar></span>';

}

function chatFeature_structure(targetaddress){
    return'<fieldset>'+
'<legend style=color:purple onclick=restChat() id=target-address>'+targetaddress+'</legend>'+
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
    return '<fieldset>'+
'<legend>'+address+'</legend>'+
'<input type=text id=input-title class=input-text placeholder=judul-pengumuman><br>'+
'<input type=text id=location-input class=input-set-text placeholder=dimana>'+
'<input type=date id=input-date-release class=input-set-text><br>'+
'<textarea id=input-text-value class=editor placeholder=isi-pembicaraan-'+address+'></textarea><br>'+
'<'
'<button onclick=Post_news() id=btn-private-news class=private-btn>private</button>'+
'<button onclick=Post_news() id=btn-add-news class=public-news>upload</button>'+
    '</fieldset>'
}





function runContainerColor(){
    const inputColor=document.getElementById('input-bordercolor').value;
    document.getElementById('input-data-contain').style.color=inputColor
}

function runStylecol(){
    const color=document.getElementById('input-sign-color').value;
const confirmStyle=confirm('untuk tulisan/background')

if(confirmStyle==true){
    document.getElementById('user-data').style.color=color
}
else{
    document.getElementById('user-data').style.backgroundColor=color
}
    

}
function connect_ruteGroupt(){
    const useraddress=document.getElementById('useraddress-output')
    document.getElementById('data-input').innerHTML=route_grouptAdd(useraddress.innerHTML)
}

function route_grouptAdd(address){
    return '<fieldset>'+
'<input type=text id=input-groupt-name class=groupt-text placeholder=nama-groupt><br>'+
'<select id=input-member class=bar-groupt-container>'+
'<option onclick=add_member()>anggota</option>'+
'<option>'+address+'</option>'+
'</select>'+
'<span onclick=setting_grouptAdmin() class=bar-groupt-container id=admin>sett admin</span><br>'+
'<button onclick=createGroupt() class=btn-upload>buat komunitas</button>'+
    '</fieldset>'
}

function setting_grouptAdmin(){
    const adminsett={
        new:document.getElementById('input-member').value,
        old:document.getElementById('admin')
    }
    adminsett.old.innerHTML=adminsett.new+'(admin)'
}

function add_member(){
    const new_member=prompt('nama anggota');
    const addMember={
        opt:document.createElement('option'),
        val:document.createTextNode(new_member)
    }
    document.getElementById('input-member').appendChild(addMember.opt);
    addMember.opt.appendChild(addMember.val)
}

function connect_grouptDatabase(address,grouptmember,admin){
    const database_connect=document.getElementById('groupt-database')
     database_connect.innerHTML +=
    '<div id=groupt-'+address+'>'+
    '<fieldset>'+
   '<legend id=grouptname-'+address+'>'+address+'</legend>'+
   '<select id=member-'+address+' class=bar-groupt-container>'+grouptmember+'</select>'+
    '<span id=admin-'+address+'>'+admin+'</span>'+
   '</fieldset>'
    '</div>'

}

function grouptdata_res(address){
    const Route={
        grupmember:document.getElementById('member-'+address),
        admin:document.getElementById('admin-'+address)
    }
    return'<select id=input-member class=bar-groupt-container>'+Route.grupmember.innerHTML+'</select>'+
  '<select id=groupt-information class=bar-groupt-container>'+
  '<option>'+Route.admin.innerHTML+'</option>'+
   '<option onclick=chat_room() style=color:red>chat di'+address+'</option>'+
    '<option onclick=call_accesRoom() style=color:green>panggil</option>'+
  '</select><br>'+
  '<div id=call-place-container></div>'+
  '<div id=chat-place-container></div>'
    
}

function chat_room(){
    const address=document.getElementById('groupt-list').value;
    document.getElementById('chat-place-container').innerHTML=chat_groupt(address)
}


function chat_groupt(address){
    return'<fieldset>'+
   '<legend onclick=restChat()>'+address+'</legend>'+
   '<div id=chat-groupt-database class=chat-wrapper></div>'+
   '<textarea id=input-groupt-chat placeholder=chat-sesuatu class=chat-input-container></textarea>'+
   '<button onclick=sentGrouptChat()>kirim</button>'+
    '</fieldset>'
}

function UserInterface_callSystem(useraddress){
    return'<div class=call-room>'+
    '<fieldset id=participant-address class=call-address onclick=resCall()></fieldset>'+
    '<fieldset class=call-address style=color:lightgreen>'+useraddress+'</fieldset>'+
    '</div>'+
    '<div id=call-set-wrapper>'+
    '<button onclick=sound_on() class=call-bar style=color:green;border-color:green id=mic-setting>mic</button>'+
    '<button onclick=call_end() class=call-bar style=color:red;border-color:red>akhiri</button>'+
    '<button onclick=screen_record_on() class=call-bar id=screen-record style=border-color:green;color:green>rekam layar</button>'+
    '</div>'
}



function sound_on(){
    const sett_sound={
        color:'red',
        system:document.getElementById('mic-setting'),
    
    }
    SystemOn(sett_sound.system,sett_sound.color,'mic_off()')
}


function mic_off(){
    const sett_sound={
        color:'green',
        system:document.getElementById('mic-setting'),
    
    }
    SystemOn(sett_sound.system,sett_sound.color,'sound_on()')
}


function screen_record_on(){
    const sett_screenRecord={
        color:'red',
        system:document.getElementById('screen-record'),
    
    }
    SystemOn(sett_screenRecord.system,sett_screenRecord.color,'record_off()')
}


function record_off(){
    const sett_screenRecord={
        color:'green',
        system:document.getElementById('screen-record'),
    
    }
    SystemOn(sett_screenRecord.system,sett_screenRecord.color,'screen_record_on()')
}

function style_data(select){
 select.setAttribute('class','select_dataInformation');
   

}