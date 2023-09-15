function Registered_account(){
    const inputData={
      privateData:document.getElementById('private-wrapper'),
       datainput:document.getElementById('private-database'),
        useraddress:document.getElementById('input-useraddress').value,
        userpassword:document.getElementById('input-user-pass').value,
        userlocation:document.getElementById('business-loc').value
        
    }
   if(inputData.datainput=="" ||inputData.useraddress=="" || inputData.userpassword=="" || inputData.userlocation==""){
    alert("mohon data dilengkapi")
    console.log('registerd failet')
   }
   else{
    inputData.datainput.innerHTML=structure_accountHeader(inputData.useraddress)
     inputData.privateData.innerHTML=pmailAddress(inputData.useraddress,inputData.userpassword,inputData.userlocation)
     toBeranda()
   
   }
}

function toBeranda(){
    const pageNull=[document.getElementById('search-container'),document.getElementById('data-input'),document.getElementById('groupt-bar')]
    for(var i=0; i<=pageNull.length; i++){
        pageNull[i].innerHTML=null
    }
}

function setting_account(){
    const dataUserAppear={
        address:document.getElementById('useraddress-output'),
        pass:document.getElementById('user-pass')
    };
    document.getElementById('data-input').innerHTML=structure_settAcount(dataUserAppear.address.innerHTML,dataUserAppear.pass.innerHTML)
}


function settinguseraddress(){
    const settdata={
        place:document.getElementById('useraddress-output'),
        new:prompt('username baru')
    }
    settdata.place.innerHTML=settdata.new
    
    document.getElementById('address').innerHTML=settdata.new+'pmail.com'
}
function setPass(){
    const passdata={
        new:prompt('pasword baru'),
        place:document.getElementById('user-pass')
    }
   passdata.place.innerHTML=passdata.new
    

}



function loggin_out(){
    const dataUser={
        databefore:document.getElementById('private-database'),
        dataupload:document.getElementById('uploader-database'),
        dataaadrees:document.getElementById('useraddress-output'),
       databaseaddress:document.getElementById('public-database/192.168.120.189'),
       style:{
        color:document.getElementById('input-sign-color').value,
        borderColor:document.getElementById('input-borderColor')
       }
    }
    dataUser.databefore.innerHTML=null
    document.getElementById('private-wrapper').innerHTML=null
   dataUser.databaseaddress.innerHTML +='<div id='+dataUser.dataaadrees.innerHTML+'@pmail>'+
   '<fieldset style=border-color:'+dataUser.style.borderColor+' class=private-database>'+
  '<legend style=color:'+dataUser.style.color+' onclick=followMore()>'+dataUser.dataaadrees.innerHTML+'</legend>'+
    dataUser.dataupload.innerHTML
'</fieldset>';
 connect_pmailDatabase(dataUser.dataaadrees)

}

function showAll(){
    const data=document.getElementById('public-database/192.168.120.189');
    document.getElementById('search-container').innerHTML=data.innerHTML
}



