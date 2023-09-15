function Post_news(){
    const database=document.getElementById('uploader-database');
    const dataInput={
        address:document.getElementById('useraddress-output'),
        title:document.getElementById('input-title').value,
        userlocation:document.getElementById('location-input').value,
        time:document.getElementById('input-date-release').value,
        textValue:document.getElementById('input-text-value').value
    };
    connect_uploaderDatabase(dataInput.address.innerHTML,dataInput.title,dataInput.userlocation,dataInput.time,dataInput.textValue,database)
    toBeranda()
}




function search(){
    const searchInput=document.getElementById('input-search-text').value
    document.getElementById('search-container').innerHTML=
    document.getElementById(searchInput).innerHTML



}

function setLoc(){
    const location={
        new:prompt('lokasi terkini'),
        old:document.getElementById('location')
    }
    location.old.innerHTML=location.new
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
            el:document.createElement('span'),
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


function createGroupt(){
    const grouptDataInput={
        address:document.getElementById('input-groupt-name').value,
        member:document.getElementById('input-member'),
        admin:document.getElementById('admin')
        
    }
connect_grouptList(grouptDataInput.address)
connect_grouptDatabase(grouptDataInput.address,grouptDataInput.member.innerHTML,grouptDataInput.admin.innerHTML)
toBeranda()
}

function connect_grouptList(address){
    const grouptList=document.getElementById('groupt-list')
    const add_grouptList={
       opt:document.createElement('option'),
       val:document.createTextNode(address)
    }
    grouptList.appendChild(add_grouptList.opt);
    add_grouptList.opt.appendChild(add_grouptList.val)
    add_grouptList.opt.setAttribute('onclick','open_groupt()')
}

function open_groupt(){
    const groupt_address={
        address:document.getElementById('groupt-list').value,
        res:document.getElementById('groupt-bar')
    }
    
    groupt_address.res.innerHTML=grouptdata_res(groupt_address.address)
}



function sentGrouptChat(){
    const call_database=document.getElementById('chat-groupt-database')
    const database=[]
    const chat_input={
        address:document.getElementById('useraddress-output'),
        chat_value:document.getElementById('input-groupt-chat').value
    };
  chat_conecting(chat_input.address.innerHTML,chat_input.chat_value,call_database,'lightgreen','left','textarea')

    
}
function restChat(){
    const call_database=document.getElementById('chat-groupt-database')
    const chat_input={
        address:document.getElementById('input-member').value,
        chat_value:document.getElementById('input-groupt-chat').value
    };
  chat_conecting(chat_input.address,chat_input.chat_value,call_database,'lightblue','right','span')
}




function call_accesRoom(){
    const useraddress=document.getElementById('useraddress-output');
    document.getElementById('call-place-container').innerHTML=UserInterface_callSystem(useraddress.innerHTML)
}


function resCall(){
    const memberaddress={
        connect:document.getElementById('participant-address'),
        address:document.getElementById('input-member').value
    }
    memberaddress.connect.innerHTML=memberaddress.address

}

function SystemOn(system,on,setting){
  system.style.borderColor=on;
  system.style.color=on;
  system.setAttribute('onclick',setting)

}


function SystemOff(system,off,settingOff){
    system.style.borderColor=off;
    system.style.color=off;
    system.setAttribute('onclick',settingOff)
}

function call_end(){
    document.getElementById('call-place-container').innerHTML=null
}