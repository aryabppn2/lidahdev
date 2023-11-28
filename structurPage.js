function logiageStructure(){
    return`<div class=input-body><h1>login sekarang</h1>
   <input type=text id=input-useraddress class=input-text-login placeholder="username"
    style=boder-color:lightblue;color:lightblue><br>
    <input type=password id=input-user-pass 
    class=input-text-login placeholder=password style=border-color:lightgreen;color:lightgreen><br>
    <textarea id=business-loc class=txt-loc placeholder=lokasi></textarea><br>
    <button onclick=Registered_account() class=btn-upload>daftar</button>
    </div>    
    
    
    
    
    
    `
}
function connect_loginPage(){
    document.getElementById('data-input').innerHTML=logiageStructure()
    document.getElementById('search-eigine').innerHTML=null;
    document.getElementById('search-container').innerHTML=null
    
}

function structure_accountHeader(address,money){
    return`<fieldset id=data-field class=dat-private>
    <legend id=useraddress-output onclick=settAccount()>${address}</legend>
    <select id=chat-recently class=menu-navigation-private style=border-color:gray>
   <option>pesan baru</option>
    </select>
    <select id=friends-list class=menu-navigation-private>
    <option onclick=addteman()>panutan</option>
    </select>
    <select id=friends-like-list class=menu-navigation-private style=color:lightgreen>
   <option onclick=addgemar()>penggemar</option> 
    </select>
<button onclick=connect_toAddNews() class=menu-navigation-private>+</button>
<div id=uploader-database ></div>
<div id=market-database></div>
<div id=jasa-database></div>
</fieldset><div id=groupt-database-private></div>`;

    
}









function structure_settAccount(useraddress,pass,location){
    return`<fieldset style=border-color:lightblue>
   <select class=bar-account>
   <option>${useraddress}</option>
   <option>${pass}</option>
   <option>${location}</option>
   <option onclick=loggin_out() style=color:lightgray>log out</option>
   </select>

    </fieldset>
    `
}



function ChatFiturApp(TargetAddress){
    return`<fieldset style=border-color:green >
    <legend style=color:lightblue onclick=ChatRes() id=target-address>${TargetAddress}</legend>
    <div id=chat-body-page class=chat-body-container></div>
    <textarea id=input-messeage-text class=messeage-container placeholder='masukan pesan'></textarea>
    <button onclick=SENT_MESSEAGE_DATA() class=btn-chat>kirim</button>
    </fieldset>
    
    `
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
    <button onclick=Post_PublicNews() id=btn-public-news  class=btn-upload>posting</button>
       </div></fieldset>
       
       `
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
    

    
    function dataTextShow(useraddress,title,location,time,datVal,datVal1){
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
        <fieldset class=dat-post>
        <legend>${useraddress[2]}</legend>
        <select class=select_dataInformation>
       <option>${title[2]}</option>
       <option>${location[2]}</option>
       <option>${time[2]}</option>
       </select>
       <fieldset>${datVal[2]} </fieldset>
       <fieldset>${datVal1[2]}</fieldset>
        </fieldset>
        
        
        
        `
    }
     

function others_interface(address,location){
    return`<fieldset>
    <legend>${address}</legend>
    
    
    
    
    
    
    </fieldset>
    `
}


