function connect_uploaderDatabase(useraddress,dataaddress,location,time,value){
  
  const call_uploaderDataBase={
    database:document.getElementById('uploader-database'),
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
call_uploaderDataBase.Host.setAttribute('id',dataaddress+'-'+useraddress);
call_uploaderDataBase.dataadress.select.setAttribute('id','status-'+dataaddress+'-'+useraddress);
call_uploaderDataBase.dataadress.location.el.setAttribute('id','lokasi-'+dataaddress+'-'+useraddress);
call_uploaderDataBase.dataadress.time.el.setAttribute('id','waktu-'+dataaddress+'-'+useraddress);

call_uploaderDataBase.database.appendChild(call_uploaderDataBase.Host);
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



  

    const database=[];
    database.push(
        {
            host:dataaddress+'-'+useraddress,
            useraddress:useraddress,
            title:dataaddress,
            location:location,
            time:time,
            value:value
        }
    )
 console.log(database)
 toBeranda()
}
