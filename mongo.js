const  pmaildatabase=[];
const database_berita=[];


function connectto_PmailDatabase(address,pass,location){
  pmaildatabase.push(

    {
      ip:address,
      useraddress:`${address}@pmail.com`,
      pass:pass,
      location:location
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
   
   