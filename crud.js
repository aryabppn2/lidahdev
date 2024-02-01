function connectto_PmailDatabase(address,pass,location,money){
    pmaildatabase.push(
  
      {
        encription:`KEY_${address}/@pmail(${pass}.192.189.12.1)`,
        ip:address,
        useraddress:`${address}@pmail.com`,
        pass:pass,
        location:location,
        teman:[
{
  name:"indra",
  location:"balikpapan"
},
{
  name:"jaka",
  location:"balikpapan"
},
{
  name:"kana",
  location:"samarinda"
},
{
  name:"indah",
  location:"balikpapan"
},
{
  name:"suzana",
  location:"balikpapan"
}


  ]
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
          document.getElementById('data-input').innerHTML= others_interfaceList('menu-navigation-container',

           [pmaildatabase[i].ip,pmaildatabase[0].ip,pmaildatabase[1].ip,pmaildatabase[2].ip],
           [pmaildatabase[i].location,pmaildatabase[0].location,pmaildatabase[1].location,pmaildatabase[2].location]
            )
       }
     }


f









function add_friends(friend,useraddress,city){
   const get_address=pmaildatabase.filter(ip=>ip.ip.includes(useraddress))
   get_address[0].teman.push(
   {
    name:friend,
    location:city
   }


    )
   console.log(pmaildatabase)

}

function Show_friends(){
    const address={
        user:document.getElementById('useraddress-output'),
        page:document.getElementById('data-input')
    }
    const dataFilter=pmaildatabase.filter(ip=>ip.ip.includes(address.user.innerHTML))
    const get_friends=dataFilter[0].teman

    for(var i=0; i<=get_friends.length; i++){
      address.page.innerHTML=friends_interfaceList(
        [get_friends[i].name,get_friends[0].name,get_friends[1].name,get_friends[2].name],
     [get_friends[i].location,get_friends[0].location,get_friends[1].location,get_friends[2].location]

      )

    }
}



