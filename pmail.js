function Registered_account(){
    const inputData={
       datainput:document.getElementById('private-database'),
        useraddress:document.getElementById('input-useraddress').value,
        userpassword:document.getElementById('input-user-pass').value,
        userlocation:document.getElementById('business-loc').value,
        
    }
   document.getElementById('logo-this').setAttribute('onclick','toBeranda()') 
   if(inputData.datainput=="" ||inputData.useraddress=="" || inputData.userpassword=="" || inputData.userlocation==""){
    alert("mohon data dilengkapi")
   
    console.log('registerd failet')
   }
   else{
    inputData.datainput.innerHTML=structure_accountHeader(inputData.useraddress,inputData.usermoney)
        document.getElementById('data-input').innerHTML=null
        document.getElementById('logo-this').setAttribute('onclick','backHome()')
        connectto_PmailDatabase(
            inputData.useraddress,
            inputData.userpassword,
            inputData.userlocation,
        )
     
     
   
   }
}



function toBeranda(){
    const pageNull=[document.getElementById('search-container')
    ,document.getElementById('groupt-bar'),document.getElementById('search-eigine')]
   document.getElementById('data-input').innerHTML=logiageStructure()
    for(var i=0; i<=pageNull.length; i++){
        pageNull[i].innerHTML=null
    }
}

function backHome(){
    const pageNull=[document.getElementById('search-container')
    ,document.getElementById('data-input'),document.getElementById('search-eigine')]
    for(var i=0; i<=pageNull.length; i++){
        pageNull[i].innerHTML=null
    }
}

    





function loggin_out(){
     CreateDataList(
        document.getElementById('useraddress-output'),
        document.getElementById('others-list')
     )
     document.getElementById('private-database').innerHTML=null
     document.getElementById('logo-this').setAttribute('onclick','toBeranda()')
     document.getElementById('data-input').innerHTML=logiageStructure()
}



function settAccount(){
    const address_sel=document.getElementById('useraddress-output');
    const account_setdata=Array.from(pmaildatabase.filter(address=>address.useraddress.
        includes(address_sel.innerHTML)))
    for(var i=0;i<=account_setdata.length; i++){
     document.getElementById('data-input').innerHTML=
     structure_settAccount(
         account_setdata[0].useraddress,
         account_setdata[0].pass,
         account_setdata[0].location
     )   
    
    
    }

}





function addteman(){
    const Teman=document.getElementById('friends-list');
    const orang=document.getElementById('user-list').value
    const add={
        opt:document.createElement('option'),
        val:document.createTextNode(orang)
    };
    Teman.appendChild(add.opt);
    add.opt.appendChild(add.val);

}

function addgemar(){
    const Teman=document.getElementById('friends-like-list');
    const orang=document.getElementById('user-list').value
    const add={
        opt:document.createElement('option'),
        val:document.createTextNode(orang)
    };
    Teman.appendChild(add.opt);
    add.opt.appendChild(add.val);
}



function showAll(){
    document.getElementById('input-search-text').setAttribute('onkeyup','search()')
    for(var i=0; i<=database_berita.length;i++){
        document.getElementById('search-eigine').innerHTML=
        dataTextShow(
            [database_berita[i].useraddress,database_berita[0].useraddress,database_berita[1].useraddress],
            [database_berita[i].title,database_berita[0].title,database_berita[1].title],
            [database_berita[i].location,database_berita[0].location,database_berita[1].location],
            [database_berita[i].time,database_berita[0].time,database_berita[1].time],
            [database_berita[i].tx1,database_berita[0].tx1,database_berita[1].tx1],
            [database_berita[i].tx2,database_berita[0].tx2,database_berita[1].tx2],
        )
    }
}



function others_open(){
    const ip_call={
        address:document.getElementById('others-list').value,
        dataInput:document.getElementById('data-input')
    }

    const call_host=pmaildatabase.filter(host=>host.ip.includes(ip_call.address))
    ip_call.dataInput.innerHTML=
    others_interface(
        call_host[0].ip,
        call_host[0].location
    )


}

function chatOpened(){
    const address_target={
        ip:document.getElementById('others-list').value,
        chatBody:document.getElementById('chat-body')
    }
    address_target.chatBody.innerHTML=
    ChatFiturApp(address_target.ip)
}


function visitingAddress(){
    const target={
        ip:document.getElementById('others-list').value,
        access:document.getElementById('content-place')
    }
    const respont_call=Array.from(database_berita.filter(address=>address.useraddress.includes(target.ip)))
    for(var i=0; i<=respont_call.length; i++){
        target.access.innerHTML=
        dataPmailRespont(
            respont_call[i].useraddress,
            respont_call[i].title,
            respont_call[i].location,
            respont_call[i].time,
            respont_call[i].tx1,
            respont_call[i].tx2
        )
    }
}

function show_ShortText(){
    document.getElementById('input-search-text').setAttribute('onkeyup','search_short()');
    for(var i=0; i<=short_databases.length; i++){
        document.getElementById('search-eigine').innerHTML=
        show_shortData(
       [short_databases[i].ip,short_databases[0].ip],
       [short_databases[i].text1,short_databases[0].text1],
       [short_databases[i].text2,short_databases[0].text2],
       [short_databases[i].text3,short_databases[0].text3],
       [short_databases[i].text4,short_databases[0].text4],
       [short_databases[i].text5,short_databases[0].text5],
       [short_databases[i].text6,short_databases[0].text6]


          )
        
    }
}

