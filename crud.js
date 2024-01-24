function connectto_PmailDatabase(address,pass,location,money){
    pmaildatabase.push(
  
      {
        encription:`KEY_${address}/@pmail(${pass}.192.189.12.1)`,
        ip:address,
        useraddress:`${address}@pmail.com`,
        pass:pass,
        location:location,
        money:money
      }
    )
    console.log(pmaildatabase)
  }
  function connect_database(
      address,
      title,
      location,
      time,
      text
  )
  {
    database_berita.push(
      {
        useraddress:address,
        title:title,
        location:location,
        time:time,
        tx1:text[0],
        tx2:text[1]
      }
    )
    console.log(database_berita)
  }
     
     function Insert_Shortdata(ipaddress,text){
       short_databases.push(
       {
        ip:ipaddress,
        text1:text[0],
        text2:text[1],
        text3:text[2],
        text4:text[3],
        text5:text[4],
        text6:text[5]
      }
  
        )
       console.log(short_databases)
     }
     


     function othersPmailList(){
       for(var i=0; i<=pmaildatabase.length; i++){
          document.getElementById('data-input').innerHTML= others_interfaceList('open_list()','menu-navigation-container',pmaildatabase)
       }
     }


function open_list(){
  const select_ip=document.getElementById('others-select').value;
  const ip={
    address:pmaildatabase.filter(host=>host.ip.includes(select_ip)),
    page:document.getElementById('data-input')
  };
  ip.page.innerHTML=Target_pageInterface(ip.address[0].ip,ip.address[0].location)
}


function insert_toDb(targetaddress,user_address,chat_value){
  chat_db.push(
  {
    chat_id:`from_${targetaddress}/to${user_address}`,
    useaddress:user_address,
    targetaddress:targetaddress,
    chat:chat_value
  }
  )
  console.log(chat_db)

    
}






