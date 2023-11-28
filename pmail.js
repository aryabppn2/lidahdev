function Registered_account(){
    const inputData={
       datainput:document.getElementById('private-database'),
        useraddress:document.getElementById('input-useraddress').value,
        userpassword:document.getElementById('input-user-pass').value,
        userlocation:document.getElementById('business-loc').value
        
    }
   document.getElementById('logo-this').setAttribute('onclick','toBeranda()') 
   if(inputData.datainput=="" ||inputData.useraddress=="" || inputData.userpassword=="" || inputData.userlocation==""){
    alert("mohon data dilengkapi")
    console.log('registerd failet')
   }
   else{
    inputData.datainput.innerHTML=structure_accountHeader(inputData.useraddress)
        document.getElementById('data-input').innerHTML=null
        document.getElementById('logo-this').setAttribute('onclick','backHome()')
        connectto_PmailDatabase(
            inputData.useraddress,
            inputData.userpassword,
            inputData.userlocation
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
     document.getElementById('private-database').innerHTML=null
     document.getElementById('logo-this').setAttribute('onclick','toBeranda()')
     document.getElementById('data-input').innerHTML=logiageStructure()
     createDataList(
        document.getElementById('user-list')
     )
   
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
            [database_berita[i].database_berita,database_berita[0].useraddress,database_berita[1].useraddress],
            [database_berita[i].title,database_berita[0].title,database_berita[1].title],
            [database_berita[i].location,database_berita[0].location,database_berita[1].location],
            [database_berita[i].time,database_berita[0].time,database_berita[1].time],
            [database_berita[i].tx1,database_berita[0].tx1,database_berita[1].tx1],
            [database_berita[i].tx2,database_berita[0].tx2,database_berita[1].tx2],
        )
    }
}