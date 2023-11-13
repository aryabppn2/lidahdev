


function connect_uploaderDatabase(useraddress,dataaddress,location,time,value,database){

  
  const call_uploaderDataBase={
  
      Host:document.createElement('div'),
      field:document.createElement('fieldset'),
     dataadress:{
       select:document.createElement('select'),
       title:{
        el:document.createElement('option'),
        val:document.createTextNode(dataaddress)
       },
       useraddress:{
        el:document.createElement('option'),
        val:document.createTextNode(useraddress)
      },
       location:{
        el:document.createElement('option'),
        val:document.createTextNode(location)
       },
       time:{
        el:document.createElement('option'),
        val:document.createTextNode(time)
       },
       dis:document.createElement('br')
     },
     textValue:{
        el:document.createElement('fieldset'),
        val:document.createTextNode(value[0])
     },
     textValue1:{
      el:document.createElement('fieldset'),
      val:document.createTextNode(value[1])
     },
     
  };
call_uploaderDataBase.Host.setAttribute('id',dataaddress);
call_uploaderDataBase.textValue.el.setAttribute('id','isi-'+dataaddress)
call_uploaderDataBase.dataadress.select.setAttribute('id','status-'+dataaddress);
call_uploaderDataBase.dataadress.location.el.setAttribute('id','lokasi-'+dataaddress);
call_uploaderDataBase.dataadress.time.el.setAttribute('id','waktu-'+dataaddress);
call_uploaderDataBase.field.classList='dat-post'
database.appendChild(call_uploaderDataBase.Host);
call_uploaderDataBase.Host.appendChild(call_uploaderDataBase.field);
//dat address/
call_uploaderDataBase.field.appendChild(call_uploaderDataBase.dataadress.select);
call_uploaderDataBase.dataadress.select.appendChild(call_uploaderDataBase.dataadress.title.el);
call_uploaderDataBase.dataadress.select.appendChild(call_uploaderDataBase.dataadress.useraddress.el);
call_uploaderDataBase.dataadress.useraddress.el.appendChild(call_uploaderDataBase.dataadress.useraddress.val);
call_uploaderDataBase.dataadress.title.el.appendChild(call_uploaderDataBase.dataadress.title.val)
call_uploaderDataBase.dataadress.select.appendChild(call_uploaderDataBase.dataadress.location.el);
call_uploaderDataBase.dataadress.location.el.appendChild(call_uploaderDataBase.dataadress.location.val);
call_uploaderDataBase.dataadress.select.appendChild(call_uploaderDataBase.dataadress.time.el);
call_uploaderDataBase.dataadress.time.el.appendChild(call_uploaderDataBase.dataadress.time.val);
call_uploaderDataBase.field.appendChild(call_uploaderDataBase.dataadress.dis);
///data value//
call_uploaderDataBase.field.appendChild(call_uploaderDataBase.textValue.el);
call_uploaderDataBase.textValue.el.appendChild(call_uploaderDataBase.textValue.val)
call_uploaderDataBase.field.appendChild(call_uploaderDataBase.textValue1.el);
call_uploaderDataBase.textValue1.el.appendChild(call_uploaderDataBase.textValue1.val)

style_data(call_uploaderDataBase.dataadress.select)

}






function CREATE_PRODUCT_DATA(
  DATABASE,
  ADDRESS,
  PRODUCTNAME,
  PRICE,
  AMOUNT,
  DESCRIPTION,

)
{
const dataCreate={
  Host:document.createElement('button'),
  useraddress:{
    el:document.createElement('legend'),
    val:document.createTextNode(ADDRESS)
  },
  productNmae:{
    el:document.createElement('h2'),
    val:document.createTextNode(PRODUCTNAME)
  },
  price:{
    el:document.createElement('span'),
    val:document.createTextNode(`${PRICE}|`)
  },
  Amount:{
    el:document.createElement('span'),
    val:document.createTextNode(AMOUNT)
  },
  des:{
    el:document.createElement('p'),
    val:document.createTextNode(DESCRIPTION),
    br:document.createElement('br')
  },
  btn:{
    el:document.createElement('button'),
    val:document.createTextNode('beli')
  }

}
DATABASE.appendChild(dataCreate.Host);
dataCreate.Host.appendChild(dataCreate.productNmae.el);
dataCreate.productNmae.el.appendChild(dataCreate.productNmae.val);
dataCreate.Host.appendChild(dataCreate.price.el);
dataCreate.price.el.appendChild(dataCreate.price.val);
dataCreate.Host.appendChild(dataCreate.Amount.el);
dataCreate.Amount.el.appendChild(dataCreate.Amount.val);
dataCreate.Host.appendChild(dataCreate.des.el);
dataCreate.des.el.appendChild(dataCreate.des.val)
dataCreate.Host.appendChild(dataCreate.des.br);
dataCreate.Host.appendChild(dataCreate.btn.el);
dataCreate.btn.el.appendChild(dataCreate.btn.val)

dataCreate.Host.classList='data-market-post'
dataCreate.btn.el.addEventListener('click',function(){
  GATEWAY_transactionSelling(
   prompt(`nama pembeli${PRODUCTNAME}`),
   prompt('alamat sekarang'),
   prompt('jumlah'),
   PRODUCTNAME,
   PRICE,
   document.getElementById('trasnsaction-list')
  )
})

}



function BuyyingTransaction_gateway(
  SELLERADDRESS,
  PRODUCTNAME,
  PRICE,
  AMOUNT,
  TRANSACTIONLIST


)
{
const total=Number(PRICE)*Number(AMOUNT)
const settingMoneyData={
  out:[document.getElementById('user-money-dynamicly'),
  document.getElementById('money')],
  add:document.getElementById('money-out')
  

}
settingMoneyData.out[0].innerHTML=Number(settingMoneyData.out[0].innerHTML)-Number(total);
settingMoneyData.out[1].innerHTML=Number(settingMoneyData.out[1].innerHTML)-Number(total);
settingMoneyData.add.innerHTML=Number(settingMoneyData.add.innerHTML)+Number(total)


const createdat={
  Host:{
    el:document.createElement('option'),
    val:document.createTextNode(SELLERADDRESS)
  },
  PrductName:{
    el:document.createElement('option'),
    val:document.createTextNode(PRODUCTNAME)
  },
  price:{
    el:document.createElement('option'),
    val:document.createTextNode(PRICE)
  },
  Amount:{
    el:document.createElement('option'),
    val:document.createTextNode(AMOUNT)
  },
  total:{
    el:document.createElement('option'),
    val:document.createTextNode(total)
  }
};
createdat.Host.el.style.color='lightgray'
TRANSACTIONLIST.appendChild(createdat.Host.el);
createdat.Host.el.appendChild(createdat.Host.val)
TRANSACTIONLIST.appendChild(createdat.PrductName.el);
createdat.PrductName.el.appendChild(createdat.PrductName.val);
TRANSACTIONLIST.appendChild(createdat.price.el);
createdat.price.el.appendChild(createdat.price.val);
TRANSACTIONLIST.appendChild(createdat.Amount.el);
createdat.Amount.el.appendChild(createdat.Amount.val)
TRANSACTIONLIST.appendChild(createdat.total.el);
createdat.total.el.appendChild(createdat.total.val)
createdat.Host.el.addEventListener('click',function(){
  document.getElementById('data-input').innerHTML=
  ChatFiturApp(SELLERADDRESS)
  const addFiendList={
    el:document.createElement('option'),
    val:document.createTextNode(SELLERADDRESS)
}
document.getElementById('chat-recently').appendChild(addFiendList.el);
addFiendList.el.appendChild(addFiendList.val);
addFiendList.el.style.color='lightblue';
addFiendList.el.setAttribute('onclick','open_RECENTLY()')
})

}

function messeageDataPost(address,value,color){
  const addMesseagge={
     field:document.createElement('fieldset'),
     address:{
      el:document.createElement('legend'),
      val:document.createTextNode(address)
     },
     messeageVal:{
       el:document.createElement('span'),
       val:document.createTextNode(value)
     }
  };
  addMesseagge.field.style.borderColor=color;
  addMesseagge.messeageVal.el.style.color=color;
  addMesseagge.address.el.style.color=color;
  document.getElementById('chat-body-page').appendChild(addMesseagge.field);
  addMesseagge.field.appendChild(addMesseagge.address.el);
  addMesseagge.address.el.appendChild(addMesseagge.address.val);
  addMesseagge.field.appendChild(addMesseagge.messeageVal.el);
  addMesseagge.messeageVal.el.appendChild(addMesseagge.messeageVal.val)
}

function addFriends(address,list){
   const add={
    el:document.createElement('option'),
    val:document.createTextNode(address)
   }
   list.appendChild(add.el);
   add.el.appendChild(add.val);
   add.el.addEventListener('click',function(){
    const open= list.value
    document.getElementById('data-input').innerHTML=
    ChatFiturApp(open)
   })
}