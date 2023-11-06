const  pmaildatabase=[
{
id:'lidajkja s',  
useraddress:'lidah@pmail.com',
pass:'P512783Ty',
location:'jl bima sakti no 119'
}


 ];
const Txtdatabase=[


];

const GrouptBase=[]


function connectto_PmailDatabase(address,pass,location){
  pmaildatabase.push(

    {
      id:`${address}-Lid&81${pass}`,
      useraddress:`${address}@pmail.com`,
      pass:pass,
      location:location
    }
  )
}
   
   function connect_database(useraddress,dataaddress,location,time,value){
     Txtdatabase.push(
       {
         useraddress:useraddress,
         title:dataaddress,
         location:location,
         time:time,
         value:value[0],
         value1:value[1]
       }
     )
    
   }