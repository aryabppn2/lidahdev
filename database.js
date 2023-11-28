
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
    createList(address)
    const open= list.value
    document.getElementById('data-input').innerHTML=
    ChatFiturApp(open)
   })
}
function createList(address){
  const add={
      el:document.createElement('option'),
      val:document.createTextNode(address)
  }
  document.getElementById('chat-recently').appendChild(add.el);
  add.el.appendChild(add.val)
  add.el.setAttribute('onclick','open_RECENTLY()')
}

function CreateDataList(address,list){
  const create={
    el:document.createElement('option'),
    val:document.createTextNode(address.innerHTML)
  }
  list.appendChild(create.el);
  create.el.appendChild(create.val)
  create.el.setAttribute('onclick','others_open()')
}