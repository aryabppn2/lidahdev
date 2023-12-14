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




function setAdmin1(){
    const admin_address={
        new_ip:document.getElementById('membert-list').value,
        old_ip:document.getElementById('admin1-ip')
    }
    settingAdmin(admin_address.new_ip,admin_address.old_ip)
}

function setAdmin2(){
    const admin_address={
        new_ip:document.getElementById('membert-list').value,
        old_ip:document.getElementById('admin2-ip')
    }
    settingAdmin(admin_address.new_ip,admin_address.old_ip)
}




function settingAdmin(new_address,old){
 old.innerHTML=new_address
}




function addmember(){
    const member={
        address:prompt('siapa nama anggota'),
        page:document.getElementById('membert-list'),
    }
const add={
    opt:document.createElement('option'),
    val:document.createTextNode(member.address)
}
member.page.appendChild(add.opt);
add.opt.appendChild(add.val)

}


function CreateGroup(){
    const  getDataFrom={
        grouptname:document.getElementById('input-groupt=name').value,
        grouptMember:document.getElementById('membert-list'),
        grouptAdmin:[
         document.getElementById('admin1-ip'),
         document.getElementById('admin2-ip')

            ]
    };
    Insert_grouptData(
        getDataFrom.grouptname,
        getDataFrom.grouptMember.innerHTML,
        getDataFrom.grouptAdmin

        )

    create_GrouptList(
        document.getElementById('groupt-list'),
        getDataFrom.grouptname,
       'openGroupt()'

    )    
}



function openGroupt(){
    const call_address={
        page:document.getElementById('data-input'),
        ip:document.getElementById('groupt-list').value
    }
    const grouptdata_res=Array.from(grouptDatabase.filter(host=>host.grouptIp.includes(call_address.ip)))
    call_address.page.innerHTML= 
    groupt_interface(
         grouptdata_res[0].grouptIp,
         grouptdata_res[0].Member,
         grouptdata_res[0].adminIp1,
         grouptdata_res[0].adminIp2

        )


    

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