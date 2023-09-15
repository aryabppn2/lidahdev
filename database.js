function connect_pmailDatabase(address){
 const  pmaildatabase=[];
 pmaildatabase.push({
  username:address,
  address:address+'tmail.com'
 })

 console.log(pmaildatabase)
}


function connect_uploaderDatabase(useraddress,dataaddress,location,time,value,database){
  
  const call_uploaderDataBase={
  
      Host:document.createElement('div'),
      field:document.createElement('fieldset'),
      useraddress:{
        el:document.createElement('legend'),
        val:document.createTextNode(useraddress)
      },
     dataadress:{
       select:document.createElement('select'),
       title:{
        el:document.createElement('option'),
        val:document.createTextNode(dataaddress)
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
        el:document.createElement('span'),
        val:document.createTextNode(value)
     }
  };
  call_uploaderDataBase.dataadress.location.el.addEventListener('click',function(){
    const new_loc=prompt('lokasi terbarunya');
    call_uploaderDataBase.dataadress.location.el.innerHTML=new_loc
  })

call_uploaderDataBase.Host.setAttribute('id',dataaddress);
call_uploaderDataBase.textValue.el.setAttribute('id','isi-'+dataaddress)
call_uploaderDataBase.dataadress.select.setAttribute('id','status-'+dataaddress);
call_uploaderDataBase.dataadress.location.el.setAttribute('id','lokasi-'+dataaddress);
call_uploaderDataBase.dataadress.time.el.setAttribute('id','waktu-'+dataaddress);
call_uploaderDataBase.field.classList='dat-post'
database.appendChild(call_uploaderDataBase.Host);
call_uploaderDataBase.Host.appendChild(call_uploaderDataBase.field);
call_uploaderDataBase.field.appendChild(call_uploaderDataBase.useraddress.el);
call_uploaderDataBase.useraddress.el.appendChild(call_uploaderDataBase.useraddress.val);
//dat address/
call_uploaderDataBase.field.appendChild(call_uploaderDataBase.dataadress.select);
call_uploaderDataBase.dataadress.select.appendChild(call_uploaderDataBase.dataadress.title.el);
call_uploaderDataBase.dataadress.title.el.appendChild(call_uploaderDataBase.dataadress.title.val)
call_uploaderDataBase.dataadress.select.appendChild(call_uploaderDataBase.dataadress.location.el);
call_uploaderDataBase.dataadress.location.el.appendChild(call_uploaderDataBase.dataadress.location.val);
call_uploaderDataBase.dataadress.select.appendChild(call_uploaderDataBase.dataadress.time.el);
call_uploaderDataBase.dataadress.time.el.appendChild(call_uploaderDataBase.dataadress.time.val);
call_uploaderDataBase.field.appendChild(call_uploaderDataBase.dataadress.dis);
///data value//
call_uploaderDataBase.field.appendChild(call_uploaderDataBase.textValue.el);
call_uploaderDataBase.textValue.el.appendChild(call_uploaderDataBase.textValue.val)

style_data(call_uploaderDataBase.dataadress.select)
const Txtdatabase=[]
Txtdatabase.push(
  {
    useraddress:useraddress+'tmal.com',
    title:dataaddress,
    location:location,
    time:time,
    value:value
  }
)
console.log(Txtdatabase)


}



function chat_conecting(address,val,database,color,position,el){
  const dataChat_sent={
      field:document.createElement('fieldset'),
      useraddress:{
          el:document.createElement('legend'),
          val:document.createTextNode(address)
      },
     chatValue:{
      el:document.createElement(el),
      val:document.createTextNode(val)
     }
  };
  //setting color//
  dataChat_sent.field.style.borderColor=color;
  dataChat_sent.chatValue.el.style.color=color;
  dataChat_sent.field.style.textAlign=position;
  dataChat_sent.useraddress.el.style.color=color;
 //sent chat
  database.appendChild(dataChat_sent.field);
  dataChat_sent.field.appendChild(dataChat_sent.useraddress.el);
  dataChat_sent.useraddress.el.appendChild(dataChat_sent.useraddress.val);
  dataChat_sent.field.appendChild(dataChat_sent.chatValue.el);
  dataChat_sent.chatValue.el.appendChild(dataChat_sent.chatValue.val)
}