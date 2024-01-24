
function connect_uploaderDatabase(useraddress,dataaddress,location,time,value){

  const database=document.getElementById('uploader-database')
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
        el:document.createElement('div'),
        val:document.createTextNode(value[0])
     },
     textValue1:{
      el:document.createElement('div'),
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




function insert_todataList(dataList,ip,text){
  const createElement={
    btn:document.createElement('fieldset'),
    ipaddress:{
      el:document.createElement('legend'),
      val:document.createTextNode(ip)
    },
    h1:{
      el:document.createElement('h2'),
      val:document.createTextNode(text[0])
    },
    h2:{
      el:document.createElement('h2'),
      val:document.createTextNode(text[1])
    },
    h3:{
      el:document.createElement('h2'),
      val:document.createTextNode(text[2])
    },
    h4:{
      el:document.createElement('h2'),
      val:document.createTextNode(text[3])
    },
    h5:{
      el:document.createElement('h2'),
      val:document.createTextNode(text[4])
    },
    h6:{
      el:document.createElement('h2'),
      val:document.createTextNode(text[5])
    }
  };
  dataList.appendChild(createElement.btn);
createElement.btn.appendChild(createElement.ipaddress.el);
createElement.ipaddress.el.appendChild(createElement.ipaddress.val);
createElement.btn.appendChild(createElement.h1.el);
createElement.h1.el.appendChild(createElement.h1.val);
createElement.btn.appendChild(createElement.h2.el);
createElement.h2.el.appendChild(createElement.h2.val);
createElement.btn.appendChild(createElement.h3.el);
createElement.h3.el.appendChild(createElement.h3.val);
createElement.btn.appendChild(createElement.h4.el);
createElement.h4.el.appendChild(createElement.h4.val);
createElement.btn.appendChild(createElement.h5.el);
createElement.h5.el.appendChild(createElement.h5.val);
createElement.btn.appendChild(createElement.h6.el);
createElement.h6.el.appendChild(createElement.h6.val);

createElement.h1.el.style.color='lightgreen';
createElement.h2.el.style.color='whitesmoke';
createElement.h3.el.style.color='lightgray';
createElement.h4.el.style.color='orange';
createElement.h5.el.style.color='aqua'
createElement.btn.classList='this-short-container'

}

function connect_targetHost(address,chatValue,dataList,color){
  const chat_sent={
      host:document.createElement('fieldset'),
      address:{
        el:document.createElement('legend'),
        val:document.createTextNode(address)
      },
      chatVal:{
        el:document.createElement('span'),
        val:document.createTextNode(chatValue)
      }
  };
 dataList.appendChild(chat_sent.host);
 chat_sent.host.appendChild(chat_sent.address.el);
 chat_sent.address.el.appendChild(chat_sent.address.val);
 chat_sent.host.appendChild(chat_sent.chatVal.el);
 chat_sent.chatVal.el.appendChild(chat_sent.chatVal.val)
  chat_sent.host.style.borderColor=color;
  chat_sent.address.el.style.color=color;
  chat_sent.chatVal.el.style.coloe=color

}