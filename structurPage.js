function logiageStructure(){
    return`<div class=input-body><h1>login sekarang</h1>
   <input type=text id=input-useraddress class=input-text-login placeholder="username"
    style=boder-color:lightblue;color:lightblue ><br>
    <input type=password id=input-user-pass 
    class=pass-container placeholder=password style=border-color:lightgreen;color:lightgreen><br>
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
    <button onclick=recently_chatShow() class=menu-navigation-private>barusan </button>
    <button onclick=Show_friends() class=menu-navigation-private>teman</button>
    <button onclick=connect_toAddNews() class=menu-navigation-private>tambah berita </button>
    <button onclick=route_inputShort() class=menu-navigation-private>tambah short</button>

<div id=uploader-Shorttext></div>
<div id=uploader-database></div>
</fieldset><div id=groupt-database-private></div>`;

    
}









function structure_settAccount(useraddress,pass,location){
    return`<fieldset style=border-color:lightblue>
   <select class=bar-account>
   <option>${useraddress}</option>
   <option>${pass}</option>
   <option>${location}</option>
   </select>
 <button onclick=loggin_out() style=color:lightgray>log out</button>
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
    <input type=text id=input-title class=input-text placeholder=judul-pengumuman required><br>
    <input type=text id=location-input class=input-set-text placeholder=dimana required>
    <input type=date id=input-date-release class=input-set-text required><br>
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
        <select class=data-editor>
       <option>${title[0]}</option>
       <option>${location[0]}</option>
       <option>${time[0]}</option>
       </select>
       <div>${datVal[0]} </div>
       <div>${datVal1[0]}</div>
        </fieldset>
        <fieldset class=dat-post>
        <legend>${useraddress[1]}</legend>
        <select class=data-editor>
       <option>${title[1]}</option>
       <option>${location[1]}</option>
       <option>${time[1]}</option>
       </select>
       <div>${datVal[1]} </div>
       <div>${datVal1[1]}</div>
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
       <div>${datVal[0]} </div>
       <div>${datVal1[0]}</div>
        </fieldset>
        <fieldset class=dat-post>
        <legend>${useraddress[1]}</legend>
        <select class=select_dataInformation>
       <option>${title[1]}</option>
       <option>${location[1]}</option>
       <option>${time[1]}</option>
       </select>
       <div>${datVal[1]} </div>
       <div>${datVal1[1]}</div>
        </fieldset>
        <fieldset class=dat-post>
        <legend>${useraddress[2]}</legend>
        <select class=select_dataInformation>
       <option>${title[2]}</option>
       <option>${location[2]}</option>
       <option>${time[2]}</option>
       </select>
       <div>${datVal[2]} </div>
       <div>${datVal1[2]}</div>
        </fieldset>
        
        
        
        `
    }
     

function others_interface(address,location){
    return`<fieldset>
    <select class=menu-navigation-container>
   <option>${address}</option>
   <option>${location}</option>
   <option onclick=visitingAddress()>postingan</option>  
    </select>
    <button onclick=chatOpened() class=menu-navigation-container>chat</button>
    
    <div id=chat-body></div>
    <div id=content-place></div>
    
    </fieldset>
    `
}

function dataPmailRespont(address,title,location,time,text,text1){
    return`<fieldset class=dat-post>
    <legend>${address}</legend>
    <select class=select_dataInformation>
   <option>${title}</option>
   <option>${location}</option>
   <option>${time}</option>
   </select>
   <fieldset>${text} </fieldset>
   <fieldset>${text1}</fieldset>
    </fieldset>





    `
}

function route_inputShort(){
    const address={
        ip:document.getElementById('useraddress-output'),
        page:document.getElementById('data-input')
    }
    address.page.innerHTML=shortText_input(address.ip.innerHTML)
}


function shortText_input(address){
    return`<fieldset>
<legend id=ip>${address}</legend>
<input tyoe=text id=input-short1-varChar class=input-text-login placeholder='masukan teks 1' style=color:lightgreen><br>
<input type=text id=input-short2-varChar class=input-text-login placeholder='masukan teks 2' style=color:whitesmoke><br>
<input type=text id=input-short3-varChar class=input-text-login placeholder='masukan teks 3' style=color:lightgray><br>
<input type=text id=input-short4-varChar class=input-text-login placeholder='masukan teks 4' style=color:orange><br>
<input type=text id=input-short5-varChar class=input-text-login placeholder='masukan teks 5' style=color:aqua><br>
<input type=text id=input-short6-varChar class=input-text-login placeholder='masukan teks 6' style=color:yellow><br>
<button onclick=POST_shortdata()> posting short</button>
</fieldset>

    `
}


function show_shortData(ipaddress,text1,text2,text3,text4,text5,text6){
return`<fieldset class=this-short-container>
<legend>${ipaddress[0]}</legend>
<h2 style=color:lightgreen>${text1[0]}</h2>
<h2 style=color:whitesmoke>${text2[0]}</h2>
<h2 style=color:lightgray>${text3[0]}</h2>
<h2 style=color:orange>${text4[0]}</h2>
<h2 style=color:aqua>${text5[0]}</h2>
<h2 style=color:yellow>${text6[0]}</h2>
</fieldset>
<fieldset class=this-short-container>
<legend>${ipaddress[1]}</legend>
<h2 style=color:lightgreen>${text1[1]}</h2>
<h2 style=color:whitesmoke>${text2[1]}</h2>
<h2 style=color:lightgray>${text3[1]}</h2>
<h2 style=color:orange>${text4[1]}</h2>
<h2 style=color:aqua>${text5[1]}</h2>
<h2 style=color:yellow>${text6[1]}</h2>
</fieldset>
`
    
}

function show_filterDataShort(ip,txt1,txt2,txt3,txt4,txt5,txt6){
    return`<fieldset class=this-short-container>
    <legend>${ip[0]}</legend>
    <h2 style=color:lightgreen>${txt1[0]}</h2>
    <h2 style=color:whitesmoke>${txt2[0]}</h2>
    <h2 style=color:lightgray>${txt3[0]}</h2>
    <h2 style=color:orange>${txt4[0]}</h2>
    <h2 style=color:aqua>${txt5[0]}</h2>
    <h2 style=color:yellow>${txt6[0]}</h2>
    </fieldset>
    <fieldset class=this-short-container>
<legend>${ip[1]}</legend>
<h2 style=color:lightgreen>${txt1[1]}</h2>
<h2 style=color:whitesmoke>${txt2[1]}</h2>
<h2 style=color:lightgray>${txt3[1]}</h2>
<h2 style=color:orange>${txt4[1]}</h2>
<h2 style=color:aqua>${txt5[1]}</h2>
<h2 style=color:yellow>${txt6[1]}</h2>
</fieldset>
<fieldset class=this-short-container>
<legend>${ip[2]}</legend>
<h2 style=color:lightgreen>${txt1[2]}</h2>
<h2 style=color:whitesmoke>${txt2[2]}</h2>
<h2 style=color:lightgray>${txt3[2]}</h2>
<h2 style=color:orange>${txt4[2]}</h2>
<h2 style=color:aqua>${txt5[2]}</h2>
<h2 style=color:yellow>${txt6[2]}</h2>

</fieldset>
    `
}


function others_interfaceList(class_this,ip,location){
    return`
   <div id=others-get>
   <fieldset class=others-item-container >
   <legend id=others-name1>${ip[0]}</legend>
   <select class=menu-navigation-private>
   <option>${location[0]}</option>
   </select>
<button onclick=Show_detail1() class=btn-show-container>lihat</button>
</fieldset>
<fieldset class=others-item-container >
   <legend id=others-name2>${ip[1]}</legend>
   <select class=menu-navigation-private>
   <option>${location[1]}</option>
   </select>
<button onclick=Show_detail2() class=btn-show-container>lihat</button>
</fieldset>
<fieldset class=others-item-container >
   <legend id=others-name3>${ip[2]}</legend>
   <select class=menu-navigation-private>
   <option>${location[2]}</option>
   </select>
<button onclick=Show_detail2() class=btn-show-container>lihat</button>
</fieldset>
<fieldset class=others-item-container >
   <legend id=others-name4>${ip[3]}</legend>
   <select class=menu-navigation-private>
   <option>${location[4]}</option>
   </select>
<button onclick=Show_detail4() class=btn-show-container>lihat</button>
</fieldset>
   </div>


    `
  
    





}



function friends_interfaceList(address,location){
        return`
  <button onclick=addFriends() class=btn-upload>tambah teman</button>
<div id=others-get-friends>
   <fieldset class=others-item-container >
   <legend id=others-name1>${address[0]}</legend>
   <select class=menu-navigation-private>
   <option>${location[0]}</option>
   </select>
<button onclick=Show_detail1() class=btn-show-container>lihat</button>
</fieldset>
<fieldset class=others-item-container >
   <legend id=others-name2>${address[1]}</legend>
   <select class=menu-navigation-private>
   <option>${location[1]}</option>
   </select>
<button onclick=Show_detail2() class=btn-show-container>lihat</button>
</fieldset>
<fieldset class=others-item-container >
   <legend id=others-name3>${address[2]}</legend>
   <select class=menu-navigation-private>
   <option>${location[2]}</option>
   </select> 
<button onclick=Show_detail2() class=btn-show-container>lihat</button>
</fieldset>
<fieldset class=others-item-container >
   <legend id=others-name4>${address[3]}</legend>
   <select class=menu-navigation-private>
   <option>${location[3]}</option>
   </select>
<button onclick=Show_detail4() class=btn-show-container>lihat</button>
</fieldset>
   </div>

    `
}








