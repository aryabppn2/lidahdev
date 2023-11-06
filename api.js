

function Post_PublicNews(){
    const database=document.getElementById('uploader-database');
    const dataInput={
        address:document.getElementById('useraddress-output'),
        title:document.getElementById('input-title').value,
        userlocation:document.getElementById('location-input').value,
        time:document.getElementById('input-date-release').value,
        textValue:{
            st1:document.getElementById('input-text-value').value,
            st2:document.getElementById('input-text1-value').value
        }
    };
    connect_uploaderDatabase(dataInput.address.innerHTML,dataInput.title,dataInput.userlocation,dataInput.time,[dataInput.textValue.st1,dataInput.textValue.st2],database)
    connect_database(dataInput.address.innerHTML,dataInput.title,dataInput.userlocation,dataInput.time,[dataInput.textValue.st1,dataInput.textValue.st2])
    toBeranda()
}




function search(){
    const searchInput=document.getElementById('input-search-text').value
    const dataFilter=Array.from(Txtdatabase.filter(data=>data.title.includes(searchInput)));
   for(var i=0; i<=dataFilter.length;i++){
        document.getElementById('search-container').innerHTML=
    dataRespont(
        [dataFilter[i].useraddress,dataFilter[0].useraddress],
        [dataFilter[i].title,dataFilter[0].title],
        [dataFilter[i].location,dataFilter[0].location],
        [dataFilter[i].time,dataFilter[0].time],
        [dataFilter[i].value,dataFilter[0].value],
        [dataFilter[i].value1,dataFilter[0].value1],

        )
        
        
        
   }

}









