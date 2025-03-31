function ustaw()
{
  var content = document.getElementsByClassName("c");
  for (let item of content) {
    item.style.cssText=`background-color:#EFF;
      border : solid 1px black;
      box-shadow: 0px 0px 5px black;
      margin: 15px;
     `;
    }
content = document.getElementsByTagName("aside");
for (let item of content) {
    item.style.float="right";
    item.style.float="50%";
    }

content = document.getElementsByTagName("footer");
for (let item of content) {
    item.style.padding="5px";
    }

content = document.getElementsByTagName("main");
for (let item of content) {
item.style.width="40%";
}

content = document.getElementsByTagName("nav");
for (let item of content) {
    item.style.width="max-content";
    item.style.padding="10px";
    }
content = document.getElementsByTagName("h1");
for (let item of content) {
    item.style.margin="10px";
    }
    content = document.getElementsByTagName("h2");
for (let item of content) {
    item.style.margin="10px";
    }

content = document.getElementsByTagName("blockquote");
for (let item of content) {
item.style.margin="15px";
}
        
}

function kasuj()
{var content = document.getElementsByClassName("c");
for (let item of content) {
  item.style.cssText=` `;
  }
content = document.getElementsByTagName("aside");
for (let item of content) {
  item.style.float="";
  item.style.float="";
  }

content = document.getElementsByTagName("footer");
for (let item of content) {
  item.style.padding="0";
  }

content = document.getElementsByTagName("main");
for (let item of content) {
item.style.width="";
}

content = document.getElementsByTagName("nav");
for (let item of content) {
  item.style.width="0";
  item.style.padding="0";
  }
content = document.getElementsByTagName("h1");
for (let item of content) {
  item.style.margin="0";
  }
  content = document.getElementsByTagName("h2");
for (let item of content) {
  item.style.margin="0";
  }

content = document.getElementsByTagName("blockquote");
for (let item of content) {
item.style.margin="0";
}}

/*

blockquote
{
    margin: 15px;
}

@media all and (max-width: 1000px) {
aside{
    float: none;
}
body>*
{
    width: auto;
}
}
*/