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


function connection_jigongBase(address,place){
    const createList={
        opt:document.createElement('option'),
        val:document.createTextNode(address)
    }
    place.appendChild(createList.opt);
    createList.opt.appendChild(createList.val)
    createList.opt.addEventListener('click',function(){
        addFriends(place,address)
    })
}




function open_RECENTLY(){
    const address_list=document.getElementById('chat-recently').value;
    document.getElementById('data-input').innerHTML=
    ChatFiturApp(address_list)
}


function ChatRes(){
    const messeage_input={
        address:document.getElementById('target-address'),
        messeage_value:document.getElementById('input-messeage-text').value
    }

    messeageDataPost(messeage_input.address.innerHTML,messeage_input.messeage_value,'lightblue')

}

function SENT_MESSEAGE_DATA(){
    const messeage={
        address:'saya',
        messeage_value:document.getElementById('input-messeage-text').value
    }
messeageDataPost(messeage.address,messeage.messeage_value,'lightgreen')

}


function addgemar(){
    const name=prompt('nama teman mu');
    const lis=document.getElementById('friends-like-list');
    addFriends(name,lis)
}






