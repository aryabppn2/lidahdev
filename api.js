function Post_PublicNews(){
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
    connect_uploaderDatabase(dataInput.address.innerHTML,dataInput.title,
        dataInput.userlocation,dataInput.time,[dataInput.textValue.st1,dataInput.textValue.st2])
    connect_database(dataInput.address.innerHTML,dataInput.title,dataInput.userlocation,dataInput.time,
        [dataInput.textValue.st1,dataInput.textValue.st2])
    document.getElementById('data-input').innerHTML=null
}
  function search(){
    const searchInput=document.getElementById('input-search-text').value
    const dataFilter=Array.from(database_berita.filter(data=>data.title.includes(searchInput)));
   for(var i=0; i<=dataFilter.length;i++){
        document.getElementById('search-container').innerHTML=
    dataRespont(
        [dataFilter[i].useraddress,dataFilter[0].useraddress],
        [dataFilter[i].title,dataFilter[0].title],
        [dataFilter[i].location,dataFilter[0].location],
        [dataFilter[i].time,dataFilter[0].time],
        [dataFilter[i].tx1,dataFilter[0].tx1],
        [dataFilter[i].tx2,dataFilter[0].tx2],

        )
        
        
        
   }
  }




function POST_shortdata(){
    
    const get={
        ip:document.getElementById('ip'),
        txt:[
            document.getElementById('input-short1-varChar').value,
            document.getElementById('input-short2-varChar').value,
            document.getElementById('input-short3-varChar').value,
            document.getElementById('input-short4-varChar').value,
            document.getElementById('input-short5-varChar').value,
            document.getElementById('input-short6-varChar').value
        
            ]
    }

insert_todataList(
    document.getElementById('uploader-Shorttext'),
      get.ip.innerHTML,
      get.txt
    )

   Insert_Shortdata(
     get.ip.innerHTML,
     get.txt
    )

   document.getElementById('data-input').innerHTML=null

}
function search_short(){
    const input_search=document.getElementById('input-search-text').value;
    const getData={
          filter:Array.from(short_databases.filter(data=>data.text1.includes(input_search))),
          page:document.getElementById('search-container')
    }
    for(var i=0; i<=getData.filter.length; i++){
        getData.page.innerHTML=
        show_filterDataShort(
        [getData.filter[i].ip,getData.filter[0].ip],
        [getData.filter[i].text1,getData.filter[0].text1],
         [getData.filter[i].text2,getData.filter[0].text2],
          [getData.filter[i].text3,getData.filter[0].text3],
           [getData.filter[i].text4,getData.filter[0].text4],
           [getData.filter[i].text5,getData.filter[0].text5],
           [getData.filter[i].text6,getData.filter[0].text6]

           )
    }
}

function open_chat(){
    const address={
        target:document.getElementById('target-name'),
        page:document.getElementById('connection-container')
    }
    address.page.innerHTML=Chat_page(address.target.innerHTML)
}


function open_call(){
    const address={
        target:document.getElementById('target-name'),
        page:document.getElementById('connection-container')
    };
    address.page.innerHTML=Call_page(address.target.innerHTML)
}



function System_setting(System,setting_system,interface_setting){
    System.style.color=interface_setting[0];
    System.style.borderColor=interface_setting[0];
    System.innerHTML=interface_setting[1]
    System.setAttribute('onclick','setting_system()')
}


function END_CALL(){
    document.getElementById('data-input').innerHTML=logiageStructure()

}