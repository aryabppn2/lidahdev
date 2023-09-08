function Post_news(){
    const dataInput={
        address:document.getElementById('useraddress-output'),
        title:document.getElementById('input-title').value,
        userlocation:document.getElementById('location-input').value,
        time:document.getElementById('input-date-release').value,
        textValue:document.getElementById('input-text-value').value
    };
    connect_uploaderDatabase(dataInput.address.innerHTML,dataInput.title,dataInput.userlocation,dataInput.time,dataInput.textValue)
    
}

function search(){
    const searchInput=document.getElementById('input-search-text').value
    const dataRes=document.getElementById(searchInput);
    document.getElementById('search-container').innerHTML=dataRes.innerHTML
     document.getElementById('data-input').innerHTML=null
     

}


function post_web(){
    const database_connect=document.getElementById('mas-database');
    const inputData={
        useraddress:document.getElementById('useraddress-output'),
        address:document.getElementById('input-webname').value,
       data:document.getElementById('run-editor-place'),
       stylecol:document.getElementById('input-border-color'),
    };
    database_connect.innerHTML +='<div id='+inputData.address+'-mas-'+inputData.useraddress.innerHTML+'>'+
    '<fieldset style=border-color:blue>'+
    '<legend>'+inputData.useraddress.innerHTML+'</legend>'+
    '<b style=color:'+inputData.style+'>'+inputData.address+'</b>'+
    '<fieldset>'+
     inputData.data.innerHTML+
    '</fieldset>'+
    '</fieldset>'+
    '</div>'

toBeranda()
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
    connect_database.datafield.style.borderColor='green';
    connect_database.chat_value.el.style.color='green';
    connect_database.datafield.style.textAlign='left'
    connect_database.usernameaddress.el.style.color='green';
    connect_database.database.appendChild(connect_database.datafield);
    connect_database.datafield.appendChild(connect_database.usernameaddress.el);
    connect_database.usernameaddress.el.appendChild(connect_database.usernameaddress.value);
    connect_database.datafield.appendChild(connect_database.chat_value.el);
    connect_database.chat_value.el.appendChild(connect_database.chat_value.value);
    
    
    
}


function restChat(){
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
    connect_database.datafield.style.borderColor='blue';
    connect_database.chat_value.el.style.color='blue';
    connect_database.datafield.style.textAlign='right '
    connect_database.usernameaddress.el.style.textAlign='right'
    connect_database.usernameaddress.el.style.color='blue';
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
 database_connect(chat_input.address.innerHTML,chat_input.chat_value)
  chat_conecting(chat_input.address.innerHTML,chat_input.chat_value,call_database,'green','left','textarea')

    
}
function restChat(){
    const call_database=document.getElementById('chat-groupt-database')
    const chat_input={
        address:document.getElementById('input-member').value,
        chat_value:document.getElementById('input-groupt-chat').value
    };
    const color=['red','blue','purple','orange']
    const math_color=Math.floor(Math.random()*color.length)
 database_connect(chat_input.address,chat_input.chat_value)
  chat_conecting(chat_input.address,chat_input.chat_value,call_database,math_color[color],'right','span')
}

function database_connect(address,value){
    const database=[]
    database.push(
        {
            useraddress:address,
            userChat:value
        }
       )
    console.log(database)  
    
}

function chat_conecting(address,val,database,color,position,el){
    const dataChat_sent={
        field:document.createElement('fieldset'),
        useraddress:{
            el:document.createElement('legend'),
            val:document.createTextNode(address)
        },
       chatValue:{
        el:document.createElement(el),
        val:document.createTextNode(val)
       }
    };
    //setting color//
    dataChat_sent.field.style.borderColor=color;
    dataChat_sent.chatValue.el.style.color=color;
    dataChat_sent.field.style.textAlign=position;
    dataChat_sent.useraddress.el.style.color=color;
   //sent chat
    database.appendChild(dataChat_sent.field);
    dataChat_sent.field.appendChild(dataChat_sent.useraddress.el);
    dataChat_sent.useraddress.el.appendChild(dataChat_sent.useraddress.val);
    dataChat_sent.field.appendChild(dataChat_sent.chatValue.el);
    dataChat_sent.chatValue.el.appendChild(dataChat_sent.chatValue.val)
}



