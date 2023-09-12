<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🎭masker</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
        <div class="wrapper-container">
    <img src="masker.jpeg" width="17px"; height="17px" onclick="toBeranda()" >
         <input type="text" id="input-search-text" placeholder="cari apa" class="search-container">
         <button class="search-btn" onclick="search()">cari</button>
        </div>
        <div style="background-color:aliceblue">
        <button onclick="connect_loginPage()" class="bar-menu" style="color:green;border:0">login</button>
        <button onclick="toBeranda()" style="color:blueviolet;border:0" class="bar-menu">home</button>
        <button class="bar-menu" style="color:gray;border:0" onclick="showAll()">beranda</button>
        <input type=color id=input-sign-color onclick=runStylecol()>
        <span id="private-wrapper"></span>
        </div>
        <div class="dat-nav" id="data-input"></div>
        <div id="search-container"></div>
        <div class="dat-nav" id="private-database"></div>
        <div id="grup-wrapper" class="dat-nav"></div>
        <div id="public-database/192.168.120.189"></div>
    <script src="structurPage.js"></script>
    <script src="Pmail.js"></script>
    <script src="api.js"></script>
    <script src="database.js"></script>
   
</body>
</html>