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
   const pmaildata={
     address:document.getElementById('useraddress-output'),
     pass:document.getElementById('user-pass'),
     location:document.getElementById('location'),
   dataBefore:[document.getElementById('private-database'),document.getElementById('private-wrapper')]
    }
    connectto_PmailDatabase(pmaildata.address.innerHTML,pmaildata.pass.innerHTML,pmaildata.location.innerHTML)
    pmaildata.dataBefore[0].innerHTML=null
    pmaildata.dataBefore[1].innerHTML=null
    document.getElementById('data-input').innerHTML=logiageStructure()
}

function showAll(){
    const data=document.getElementById('public-data-show');
    document.getElementById('search-container').innerHTML=data.innerHTML
}


function settAccount(){
    const AccountData={
        address:document.getElementById('useraddress-output'),
        pass:document.getElementById('user-pass'),
        location:document.getElementById('location')
    }
document.getElementById('data-input').innerHTML=structure_settAccount(AccountData.address.innerHTML,
    AccountData.pass.innerHTML,AccountData.location.innerHTML)

}



function settAddress(){
    const address={
        old:[document.getElementById('address'),document.getElementById('useraddress-output'),
        document.getElementById('address-config')],
        new:prompt('username baru')
    }
    for(var i=1; i<=address.old.length; i++){
        address.old[i].innerHTML=address.new;
        address.old[0].innerHTML=`${address.new}@Pmai.com`
    }
}

function settPass(){
    const pass={
        old:[document.getElementById('user-pass'),document.getElementById('pass-config')],
        new:prompt('pasword baru')
    }
    for(var i=0; i<=pass.old.length; i++){
        pass.old[i].innerHTML=pass.new
    }
}

function settLoc(){
    const pass={
        old:[document.getElementById('location'),document.getElementById('loc')],
        new:prompt('pasword baru')
    }
    for(var i=0; i<=pass.old.length; i++){
        pass.old[i].innerHTML=pass.new
    }
}