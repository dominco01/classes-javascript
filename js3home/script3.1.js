const input = document.getElementById("input");
var content = document.getElementsByTagName("span");

var tt=input.value;
input.addEventListener('change', (event) => {
  tt=input.value;
  for (let item of content) item.textContent=tt;
});

setInterval(function minus()
{
    if(tt>0)
    {
        tt--;
        for (let item of content) item.textContent=tt;
    }

    if(tt==0 && input.value!=0)
    {
        input.value = 0;
    }
}, 1000);
