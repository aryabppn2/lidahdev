function Registered_account(){
    const inputData={
      privateData:document.getElementById('private-wrapper'),
       datainput:document.getElementById('private-database'),
        useraddress:document.getElementById('input-useraddress').value,
        usermoney:document.getElementById('input-user-money').value,
        userpassword:document.getElementById('input-user-pass').value,
        userlocation:document.getElementById('business-loc').value
        
    }
   document.getElementById('logo-this').setAttribute('onclick','toBeranda()') 
   if(inputData.datainput=="" ||inputData.useraddress=="" || inputData.userpassword=="" || inputData.userlocation==""||inputData.usermoney==""){
    alert("mohon data dilengkapi")
    console.log('registerd failet')
   }
   else{
    inputData.datainput.innerHTML=structure_accountHeader(inputData.useraddress,inputData.usermoney)
     inputData.privateData.innerHTML=pmailAddress(inputData.useraddress,inputData.userpassword,inputData.userlocation,
        inputData.usermoney)
     toBeranda()
     
   
   }
}



function toBeranda(){
    const pageNull=[document.getElementById('search-container'),document.getElementById('data-input')
    ,document.getElementById('groupt-bar'),document.getElementById('search-eigine')]
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
    connection_jigongBase(pmaildata.address.innerHTML,document.getElementById('user-list'));
}

function showAll(){
    document.getElementById('input-search-text').setAttribute('onkeyup','search()')
    for(var i=0; i<=Txtdatabase.length;i++){
        document.getElementById('search-eigine').innerHTML=
        dataTextShow(
            [Txtdatabase[i].useraddress,Txtdatabase[0].useraddress,Txtdatabase[1].useraddress],
            [Txtdatabase[i].title,Txtdatabase[0].title,Txtdatabase[1].title],
            [Txtdatabase[i].location,Txtdatabase[0].location,Txtdatabase[1].location],
            [Txtdatabase[i].time,Txtdatabase[0].time,Txtdatabase[1].time],
            [Txtdatabase[i].value,Txtdatabase[0].value,Txtdatabase[1].value],
            [Txtdatabase[i].value1,Txtdatabase[0].value1,Txtdatabase[1].value1],
        )
    }
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

function ShowMarket(){
    document.getElementById('input-search-text').setAttribute('onkeyup','getMarketData()');
     for(var i=0; i<=MarketDatabase.length; i++){
        document.getElementById('search-eigine').innerHTML=  
        MarketDataShow(
     [MarketDatabase[i].address,MarketDatabase[0].address,MarketDatabase[1].address],
     [MarketDatabase[i].name,MarketDatabase[0].name,MarketDatabase[1].name],
     [MarketDatabase[i].price,MarketDatabase[0].price,MarketDatabase[1].price],
     [MarketDatabase[i].amount,MarketDatabase[0].amount,MarketDatabase[1].amount],
     [MarketDatabase[i].Description,MarketDatabase[0].Description,MarketDatabase[1].Description],
        )
     }
}
