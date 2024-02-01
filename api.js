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
        document.getElementById('data-input').innerHTML=
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
          page:document.getElementById('data-input')
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
// bagian chatting
function open_chat1(){
    const address={
        target:document.getElementById('others-name1'),
        page:document.getElementById('data-input'),
    }
   address.page.innerHTML=Chat_page(address.target.innerHTML) 
    

}


function open_chat2(){
    const address={
        target:document.getElementById('others-name2'),
        page:document.getElementById('data-input'),
        useraddress:document.getElementById('useraddress-output')
    }
     address.page.innerHTML=Chat_page(address.target.innerHTML)
    
}

function open_chat3(){
    const address={
        target:document.getElementById('others-name3'),
        page:document.getElementById('data-input'),
        useraddress:document.getElementById('useraddress-output')
    }
     address.page.innerHTML=Chat_page(address.target.innerHTML)

}
function open_chat4(){
    const address={
        target:document.getElementById('others-name4'),
        page:document.getElementById('data-input'),
        useraddress:document.getElementById('useraddress-output')
    }
     
    address.page.innerHTML=Chat_page(address.target.innerHTML)
    

}

// bagian call//




function open_call1(){
    const address={
        target:document.getElementById('others-name1'),
        page:document.getElementById('data-input')
    };
    address.page.innerHTML=Call_page(address.target.innerHTML)
}


function open_call2(){
    const address={
        target:document.getElementById('others-name2'),
        page:document.getElementById('data-input')
    };
    address.page.innerHTML=Call_page(address.target.innerHTML)
}

function open_call3(){
    const address={
        target:document.getElementById('others-name2'),
        page:document.getElementById('data-input')
    };
    address.page.innerHTML=Call_page(address.target.innerHTML)
}

function open_call4(){
const address={
        target:document.getElementById('others-name4'),
        page:document.getElementById('data-input')
    };
    address.page.innerHTML=Call_page(address.target.innerHTML)
}


function System_setting(system,setting_system,interface_setting){
    system.style.color=interface_setting[0];
    system.style.borderColor=interface_setting[0];
    system.innerHTML=interface_setting[1]
    system.setAttribute('onclick',setting_system)
}


function END_CALL(){
    document.getElementById('data-input').innerHTML=null

}





function MIC_ON(){
    const mic_system=document.getElementById('mic-system');
    System_setting(mic_system,'MIC_OFF()',['red','mic(on)'])
}


function MIC_OFF(){
    const mic_system=document.getElementById('mic-system')
    System_setting(mic_system,'MIC_ON()',['lightgreen','mic(off)'])
}




function RECORD_ON(){
    const record_system=document.getElementById('record-system');
    System_setting(record_system,'RECORD_OFF()',['red','record(on)'])
}


function RECORD_OFF(){
    const record_system=document.getElementById('record-system');
    System_setting(record_system,'RECORD_ON()',['lightgreen','record(off)'])
}


function addFriends(){
    const add={
        friend:prompt('nama teman mu'),
        friends:document.getElementById('others-get-friends'),
        useraddress:document.getElementById('useraddress-output')
    }
   get_friends(add.friend,add.friends)
   add_friends(add.friend,add.useraddress.innerHTML,'Balikpapan')

}

function recently_chatShow(){
    for(var i=0; i<=chat_db.length; i++){
   document.getElementById('data-input').innerHTML=chat_recently_open(chat_db[i].targetaddress)


    }
}