const  pmaildatabase=[
{
useraddress:'lidah@pmail.com',
pass:'P512783Ty',
location:'jl bima sakti no 119'
}


 ];
const Txtdatabase=[


];




function connect_pmailDatabase(address){
    pmaildatabase.push({
     username:address,
     address:address+'tmail.com'
    })
   
    console.log(pmaildatabase)
   }


   
   function connect_database(useraddress,dataaddress,location,time,value){
     Txtdatabase.push(
       {
         useraddress:useraddress,
         title:dataaddress,
         location:location,
         time:time,
         value:value
       }
     )
    
   }

