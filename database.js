


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
     }
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
function ListAddG(dataList,name){
   const add={
      opt:document.createElement('option'),
      val:document.createTextNode(name)
   }
   dataList.appendChild(add.opt)
   add.opt.appendChild(add.val)
}










