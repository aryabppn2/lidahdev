const  pmaildatabase=[];
const database_berita=[];
const short_databases=[]


function connectto_PmailDatabase(address,pass,location,money){
  pmaildatabase.push(

    {
      ip:address,
      useraddress:`${address}@pmail.com`,
      pass:pass,
      location:location,
      money:money
    }
  )
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
   }
   
   