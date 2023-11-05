

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

function addFriendsChat(){
    const friends_databaseConnect=document.getElementById('visitor-view')
    const new_friends=prompt('siapa nama teman')
    const add_friends={
        el:document.createElement('option'),
        val:document.createTextNode(new_friends)
    }
    friends_databaseConnect.appendChild(add_friends.el);
    add_friends.el.appendChild(add_friends.val);

    add_friends.el.setAttribute('onclick','connect_toFriends()')
    
}



function setLoc(){
    const location={
        new:prompt('lokasi terkini'),
        old:document.getElementById('location')
    }
    location.old.innerHTML=location.new
}


function Sent_ChatData(){
    const data_value={
        address:document.getElementById('useraddress-output'),
        chat_value:document.getElementById('input-chat-value').value
    }
    const connect_database={
         database:document.getElementById('chat-database'),
         datafield:document.createElement('fieldset'),
         usernameaddress:{
            el:document.createElement('legend'),
            value:document.createTextNode(data_value.address.innerHTML)
         },
         chat_value:{
            el:document.createElement('textarea'),
            value:document.createTextNode(data_value.chat_value)
         }
    };
    connect_database.datafield.style.borderColor='lightgreen';
    connect_database.chat_value.el.style.color='lightgreen';
    connect_database.datafield.style.textAlign='left'
    connect_database.usernameaddress.el.style.color='lightgreen';
    connect_database.database.appendChild(connect_database.datafield);
    connect_database.datafield.appendChild(connect_database.usernameaddress.el);
    connect_database.usernameaddress.el.appendChild(connect_database.usernameaddress.value);
    connect_database.datafield.appendChild(connect_database.chat_value.el);
    connect_database.chat_value.el.appendChild(connect_database.chat_value.value);
    
    
    
}


function restPrivateChat(){
    const data_value={
        address:document.getElementById('target-address'),
        chat_value:document.getElementById('input-chat-value').value
    }
    const connect_database={
         database:document.getElementById('chat-database'),
         datafield:document.createElement('fieldset'),
         usernameaddress:{
            el:document.createElement('legend'),
            value:document.createTextNode(data_value.address.innerHTML)
         },
         chat_value:{
            el:document.createElement('span'),
            value:document.createTextNode(data_value.chat_value)
         }
    };
    connect_database.datafield.style.borderColor='lightblue';
    connect_database.chat_value.el.style.color='lightblue';
    connect_database.datafield.style.textAlign='right '
    connect_database.usernameaddress.el.style.textAlign='right'
    connect_database.usernameaddress.el.style.color='lightblue';
    connect_database.database.appendChild(connect_database.datafield);
    connect_database.datafield.appendChild(connect_database.usernameaddress.el);
    connect_database.usernameaddress.el.appendChild(connect_database.usernameaddress.value);
    connect_database.datafield.appendChild(connect_database.chat_value.el);
    connect_database.chat_value.el.appendChild(connect_database.chat_value.value);
}
function connect_toFriends(){
    const address=document.getElementById('visitor-view').value
    const dataCall=document.getElementById('data-input');
    dataCall.innerHTML=chatFeature_structure(address)

    const connect_recently_chat={
        opt:document.createElement('option'),
        val:document.createTextNode(address)
    };
document.getElementById('chat-recenly-list').appendChild(connect_recently_chat.opt);
connect_recently_chat.opt.appendChild(connect_recently_chat.val)
connect_recently_chat.opt.setAttribute('onclick','open_chatRecenly()')
}
function open_chatRecenly(){
    const  address_connect=document.getElementById('chat-recenly-list').value;
    const  address_res=document.getElementById('data-input');
    address_res.innerHTML=chatFeature_structure(address_connect);
    const connect_recently_chat={
        opt:document.createElement('option'),
        val:document.createTextNode(address_connect)
    };
document.getElementById('chat-recenly-list').appendChild(connect_recently_chat.opt);
connect_recently_chat.opt.appendChild(connect_recently_chat.val)
connect_recently_chat.opt.setAttribute('onclick','open_chatRecenly()')
}

function create(){
    const GrouptList=document.getElementById('groupt-view');
    const grouptData={
        grouptName:document.getElementById('input-Groupt-name').value,
        member:document.getElementById('groupt-member-input'),
        adminGroupt:document.getElementById('admin-sett')
    };
    CreateGrouptListAPI(grouptData.grouptName,grouptData.member.innerHTML,grouptData.adminGroupt.innerHTML)
    ListAddG(GrouptList,grouptData.grouptName)
}