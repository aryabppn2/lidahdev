const  pmaildatabase=[
{
id:'lidajkja s',  
useraddress:'lidah@pmail.com',
pass:'P512783Ty',
location:'jl bima sakti no 119'
}


 ];
const database_berita=[];


function connectto_PmailDatabase(address,pass,location){
  pmaildatabase.push(

    {
      id:address,
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
    text1,
    text2
)
{
  database_berita.push(
    {
      useraddress:address,
      title:title,
      location:location,
      time:time,
      tx1:text1,
      tx2:text2
    }
  )
}
   
   