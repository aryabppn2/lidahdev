function logiageStructure(){
    return'<h2 style=color:lightblue>login sekarang</h2> '+
'<input type=text id=input-useraddress class=input-text-loggin placeholder=username><br>'+
'<input type=password id=input-user-pass class=pass-container placeholder=password style=color:red>'+
'<input type=number id=input-user-money class=pass-container placeholder="modal awal" style=border-color:gold;><br>'+
'<textarea id=business-loc class=txt-loc placeholder=lokasi></textarea>'+
'<br><button onclick=Registered_account() class=btn-upload>daftar</button>'
}
function connect_loginPage(){
    document.getElementById('data-input').innerHTML=logiageStructure()
    
}

function structure_accountHeader(address,money){
    return`<fieldset id=data-field class=dat-private>
    <legend id=useraddress-output onclick=settAccount()>${address}</legend>
    <select id=chat-recently class=menu-navigation-private style=border-color:gray>
   <option>pesan baru</option>

    </select>
    <select id=friends-list class=menu-navigation-private>
    <option onclick=addteman()>langganan</option>
    </select>
    <select id=friends-like-list class=menu-navigation-private>
   <option onclick=addgemar()>pelanggan</option> 
    </select>

    <select id=trasnsaction-list class=menu-navigation-private>
   <option style=color:gold id=user-money-dynamicly>${money}</option>
   <option style=color:lightgreen id=money-in>0</option>
   <option style=color:red id=money-out>0</option>

    </select>

<div id=uploader-database ></div>
<div id=market-database></div>
</fieldset><div id=groupt-database-private></div>`;

    
}





function pmailAddress(address,pass,location,money){
    return`<select class=chat-container id=user-data>
    <option id=address >${address}@Pmail.com</option>
    <option id=user-pass style=background-color:light-gray >${pass}</option>
    <option id=location style=color:lightgreen >${location}</option>
    <option id=money style=color:gold>${money}</option>
    </select>
    <div id=groupt-bar></div>`

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


function structure_settAccount(useraddress,pass,location){
    return`<fieldset style=border-color:lightgreen;color:whitesmoke onclick=settAddress() id=address-config>
    ${useraddress}</fieldset>
    <fieldset id=pass-config style=border-color:lightblue;color:blue onclick=settPass()>${pass}</fieldset>
    <fieldset style=color:orange onclick=settLoc() id=loc>${location}</fieldset>
    <button onclick=connect_toAddNews() class=bar-account>berita</button>
    <button onclick=Input_product() class=bar-account>tambah barang</button><br>
    <button onclick=loggin_out() class=LoginOut-container>log out</button>
    `
}
function Input_product(){
    const input={
        data:document.getElementById('data-input'),
        address:document.getElementById('useraddress-output')
    };
    input.data.innerHTML=structure_addProduct(input.address.innerHTML)
}

function structure_addProduct(address){
    return`<fieldset id=market-temp>
    <legend>${address}</legend>
<input type=text id=input-product-name class=input-market-text placeholder='nama barang'><br>
<input type=number id=input-product-price class=input-market-num placeholder='harga'>
<input type=number id=input-product-amount class=input-market-num placeholder='jumlah barang'><br>
<textarea id=input-product-description placeholder='deskripsi produk' class=market-textarea>
 pejelasan barang:<br>
 kelebihan:<br>
 kekurangan:<br>
</textarea><br>
<button onclick=POST_PRODUCTDATA() class=btn-upload>jual</button>
    </fieldset>
    `
}


function SignColor(){
   const dataInput={
        el:[document.getElementById('market-temp'),document.getElementById('input-product-name'),
    document.getElementById('input-product-description')],
    color:document.getElementById('input-Sign-color').value
    };
    for(var i=1; i<=dataInput.el.length; i++){
        dataInput.el[i].style.color=dataInput.color;
        dataInput.el[0].style.borderColor=dataInput.color
    }
}
function NumColor(){
    const dataInput={
        el:[document.getElementById('input-product-amount'),document.getElementById('input-product-price')],
    color:document.getElementById('input-number-color').value
    };
    for(var i=1; i<=dataInput.el.length; i++){
        dataInput.el[i].style.color=dataInput.color;
        
    }
}

function MarketDataShow(
    ADDRESS,
    PRODUCTNAME,
    PRICE,
    AMOUNT,
    DESCRIPTION,
)
{
   return`<button  onclick=buyProduct() class=data-market-post>
   <legend id=seller1-name>${ADDRESS[0]}</legend>
   <h2 id=product1-name>${PRODUCTNAME[0]}</h2>
   <span id=product1-price>${PRICE[0]}</span>
   <span>${AMOUNT[0]}</span>
   <p>${DESCRIPTION[0]}</p>
   </button>
   <button  onclick=buyProduct1() class=data-market-post>
   <legend id=seller2-name>${ADDRESS[1]}</legend>
   <h2 id=product2-name>${PRODUCTNAME[1]}</h2>
   <span id=product2-price>${PRICE[1]}</span>
   <span>${AMOUNT[1]}</span>
   <p>${DESCRIPTION[1]}</p>
   </button>
   <button onclick=buyProduct2() class=data-market-post>
   <legend id=seller3-name>${ADDRESS[2]}</legend>
   <h2 id=prduct3-name>${PRODUCTNAME[2]}</h2>
   <span id=product3-price>${PRICE[2]}</span>
   <span>${AMOUNT[2]}</span>
   <p>${DESCRIPTION[2]}</p>
   </button>
   
   
   `
    




}

function ChatFiturApp(TargetAddress){
    return`<fieldset style=border-color:green >
    <legend style=color:lightblue onclick=ChatRes()>${TargetAddress}</legend>
    <div id=chat-body-page class=chat-body-container></div>
    <textarea id=input-messeage-text class=messeage-container placeholder='masukan pesan'></textarea>
    <button onclick=SENT_MESSEAGE_DATA() class=btn-chat>kirim</button>
    </fieldset>
    
    `
}