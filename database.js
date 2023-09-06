function database_connect(){
    const datainput={
        address:document.getElementById('useraddress-output'),
        style:{
            col:document.getElementById('input-signColor').value,
            borderColor:document.getElementById('input-bordercolor').value,

            privateVar:{
                col:document.getElementById('input-sign-color').value,
            }
        },
        title:document.getElementById('input-title').value,
        text:document.getElementById('input-data-contain').value

    }
  const postData={
    database:document.getElementById('uploader-database'),
    data_host:document.createElement('div'),
    field:document.createElement('fieldset'),
    useraddress:{
        el:document.createElement('legend'),
        val:document.createTextNode(datainput.address.innerHTML)
    },
    title:{
        el:document.createElement('h2'),
        val:document.createTextNode(datainput.title)
    },
    contain:{
        el:document.createElement('fieldset'),
        val:document.createTextNode(datainput.text)
    }  
}
// setting data id//
postData.data_host.setAttribute('id',datainput.title+'-'+datainput.address.innerHTML)
postData.contain.el.setAttribute('id','isi-'+datainput.title+'-'+datainput.address.innerHTML)
postData.contain.el.setAttribute('class','flex')
postData.data_host.style.margin='15px'
//setting color style data//
postData.field.style.borderColor='blue';
postData.useraddress.el.style.color=datainput.style.privateVar.col;
postData.title.el.style.color=datainput.style.col;
postData.contain.el.style.borderColor=datainput.style.col;
postData.contain.el.style.color=datainput.style.borderColor

postData.database.appendChild(postData.data_host);
postData.data_host.appendChild(postData.field);
postData.field.appendChild(postData.useraddress.el);
postData.useraddress.el.appendChild(postData.useraddress.val)
postData.field.appendChild(postData.title.el);
postData.title.el.appendChild(postData.title.val);
postData.field.appendChild(postData.contain.el);
postData.contain.el.appendChild(postData.contain.val);
toBeranda()
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

}


