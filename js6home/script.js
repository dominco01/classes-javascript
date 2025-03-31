a= window.prompt("Tekst1","Tekst2");
alert(a);

function wypisz()
{
    alert(document.forms[0].elements[0].value +"("+typeof(document.forms[0].elements[0].value) +")"
    +" - " + document.forms[0].elements[1].value+"("+typeof(document.forms[0].elements[1].value) +")");
    
}