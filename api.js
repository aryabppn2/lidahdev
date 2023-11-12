

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


function connection_jigongBase(address,place){
    const createList={
        opt:document.createElement('option'),
        val:document.createTextNode(address)
    }
    place.appendChild(createList.opt);
    createList.opt.appendChild(createList.val)
}



function POST_PRODUCTDATA(){
    const dataInput={
        address:document.getElementById('useraddress-output'),
        text:{
            productname:document.getElementById('input-product-name').value,
            description:document.getElementById('input-product-description').value
        },
        num:{
            price:parseInt(document.getElementById('input-product-price').value),
            amount:parseInt(document.getElementById('input-product-amount').value)
        },
    };
    document.getElementById('data-input').innerHTML=null
    INSERT_DATAFROM(
        dataInput.address.innerHTML,
        dataInput.text.productname,
        dataInput.num.price,
        dataInput.num.amount,
        dataInput.text.description,
        );
       CREATE_PRODUCT_DATA(
        document.getElementById('market-database'),
        dataInput.address.innerHTML,
        dataInput.text.productname,
        dataInput.num.price,
        dataInput.num.amount,
        dataInput.text.description,
       
       ) 
}

function getMarketData(){
    const Input=document.getElementById('input-search-text').value
    const MarketdataFilter=Array.from(MarketDatabase.filter(dataF=>dataF.name.includes(Input)))
    for(var i=0; i<=MarketdataFilter.length; i++){
       document.getElementById('search-eigine').innerHTML=
       MarketDataShow(
        [MarketdataFilter[i].address,MarketdataFilter[0].address],
        [MarketdataFilter[i].name,MarketdataFilter[0].name],
        [MarketdataFilter[i].price,MarketdataFilter[0].price],
        [MarketdataFilter[i].amount,MarketdataFilter[0].amount],
        [MarketdataFilter[i].Description,MarketdataFilter[0].Description]


       )
    }


}


function GATEWAY_transactionSelling(
 ADDRESS,
 LOCATION,
 AMOUNT,
 PRODUCTNAME,
 PRODUCTPRICE,
 DATALIST


)
{ 

const total=Number(PRODUCTPRICE)*Number(AMOUNT)
const el={
    usermoey:document.getElementById('user-money-dynamicly'),
    money:document.getElementById('money'),
    in:document.getElementById('money-in')
}
el.usermoey.innerHTML=Number(el.usermoey.innerHTML)+Number(total);
el.money.innerHTML=Number(el.money.innerHTML)+Number(total);
el.in.innerHTML=Number(el.in.innerHTML)+Number(total)
    const createList={
      address:{
        el:document.createElement('option'),
        val:document.createTextNode(ADDRESS)
      },
      productname:{
        el:document.createElement('option'),
        val:document.createTextNode(PRODUCTNAME)
      },
      productPrice:{
        el:document.createElement('option'),
        val:document.createTextNode(PRODUCTPRICE)
      },
      amount:{
        el:document.createElement('option'),
        val:document.createTextNode(AMOUNT)
      },
      total:{
      el:document.createElement('option'),
      val:document.createTextNode(total)
      },
      location:{
        el:document.createElement('option'),
        val:document.createTextNode(LOCATION)
      }


}
createList.address.label=ADDRESS;
createList.address.el.style.color='lightgreen'
DATALIST.appendChild(createList.address.el);
createList.address.el.appendChild(createList.address.val)
DATALIST.appendChild(createList.productname.el);
createList.productname.el.appendChild(createList.productname.val);
DATALIST.appendChild(createList.productPrice.el);
createList.productPrice.el.appendChild(createList.productPrice.val)
DATALIST.appendChild(createList.amount.el);
createList.amount.el.appendChild(createList.amount.val);
DATALIST.appendChild(createList.total.el);
createList.total.el.appendChild(createList.total.val);
DATALIST.appendChild(createList.location.el);
createList.location.el.appendChild(createList.location.val)






}

function buyProduct(){
    const productData={
        sellerName:document.getElementById('seller1-name'),
        productname:document.getElementById('product1-name'),
        price:document.getElementById('product1-price'),
        Amount:prompt('berapa jumlah'),
    }

    BuyyingTransaction_gateway(
      productData.sellerName.innerHTML,
     productData.productname.innerHTML,
      productData.price.innerHTML,
      productData.Amount,
      document.getElementById('trasnsaction-list')

    )
  


}

function buyProduct1(){
    const productData={
        sellerName:document.getElementById('seller2-name'),
        productname:document.getElementById('product2-name'),
        price:document.getElementById('product2-price'),
        Amount:prompt('berapa jumlah'),
    }

    BuyyingTransaction_gateway(
      productData.sellerName.innerHTML,
      productData.productname.innerHTML,
      productData.price.innerHTML,
      productData.Amount,
      document.getElementById('trasnsaction-list')

    )
  
}

function buyProduct3(){
    const productData={
        sellerName:document.getElementById('seller3-name'),
        productname:document.getElementById('product3-name'),
        price:document.getElementById('product3-price'),
        Amount:prompt('berapa jumlah'),
    }

    BuyyingTransaction_gateway(
      productData.sellerName.innerHTML,
      productData.productname.innerHTML,
      productData.price.innerHTML,
      productData.Amount,
      document.getElementById('trasnsaction-list')

    )
  
}