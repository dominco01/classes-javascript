var input = document.forms[0].input;
var mode = document.forms[0].mode;
var res = document.getElementById('res');

const dict = new Map();
dict.set('krowa', ['zwierze','mleko','latki']);

function wykonaj()
{
    if(!mode.checked)
    {
    var args = input.value.split(' ');
    input.value='';
    if(args[0]=="wypisz")
    {
        if(args[1])
        {
            if(dict.has(args[1])) res.innerText =dict.get(args[1]);
            else res.innerText ='niezdefiniowane';
            return;
        }
        else
        {
            res.innerText ='error';
            return;
        }
    }
    else if(args[0]=="dodaj")
    {
        if(args[1])
        {
            if(dict.has(args[1]))
            {
                var znaczenia = dict.get(args[1]);
                var i =2;
                while(args[i])
                {
                    if(!znaczenia.includes(args[i])) znaczenia.push(args[i]);
                    else {res.innerText ='znaczenie powtorzone';
                    return;
                    }
                    i++;
                }
                dict.set(args[1],znaczenia);
            }
            else
            {
                var znaczenia = [];
                var i =2;
                while(args[i])
                {
                    if(!znaczenia.includes(args[i])) znaczenia.push(args[i]);
                    else 
                    {res.innerText ='znaczenie powtorzone';
                    return;
                    }

                    i++;
                }   
                if(znaczenia.length>0)
                {
                    dict.set(args[1],znaczenia);
                }
                else
                {
                    res.innerText ='error';
                    return;
                }
            }

        }
        else
        {
            res.innerText ='error';
            return;
        }
        
        res.innerText ='wykonano';
        return;
        
    }
    else if(args[0]=="usun")
    {
        if(args[1] && dict.has(args[1]))
        {
            var znaczenia = dict.get(args[1]);
            var i =2;
            while(args[i])
            {
                if(znaczenia.includes(args[i]))
                {
                    const index = znaczenia.indexOf(args[i]);
                    znaczenia.splice(index, 1);
                }
                else 
                {
                    res.innerText =args[1]+' nie posiada '+args[i];
                    return;
                }
                i++;
            }
            if(znaczenia.length>0)
            {
                dict.set(args[1],znaczenia);
            }
            else
            {
                dict.delete(args[1]);
            }
        }
        else
        {
            res.innerText ='error';
            return;
        }
        
        res.innerText ='wykonano';
        return;
    }
    else if(args[0]=="mod")
    {
        if(args[1] && dict.has(args[1]))
        {
            var znaczenia = dict.get(args[1]);
            if(args[2] && znaczenia.includes(args[2]))
            {
                if(args[3] && !znaczenia.includes(args[3]))
                {
                    const index = znaczenia.indexOf(args[2]);
                    znaczenia.splice(index, 1);
                    znaczenia.push(args[3]);

                    dict.set(args[1],znaczenia);
                }
                else
                {
                    res.innerText ='error';
                    return;
                }
                
            }
            else
            {
                res.innerText ='error';
                return;
            }
        }
        res.innerText ='wykonano';
        return;
        
    }
    else
    {
        res.innerText ='zla komenda';
        return;
    }
    }
    else//------
    {
        var args = input.value.split(' ');
        input.value='';
        if(args[0]=="wypisz")
        {
            if(args[1])
            {
                if(sessionStorage.getItem(args[1])) res.innerText =sessionStorage.getItem(args[1]);
                else res.innerText ='niezdefiniowane';
                return;
            }
            else
            {
                res.innerText ='error';
                return;
            }
        }
        else if(args[0]=="dodaj")
        {
            if(args[1])
            {
                if(sessionStorage.getItem(args[1]))
                {
                    var znaczenia = sessionStorage.getItem(args[1]).split(',');
                    var i =2;
                    while(args[i])
                    {
                        if(!znaczenia.includes(args[i])) znaczenia.push(args[i]);
                        else {res.innerText ='znaczenie powtorzone';
                        return;
                        }
                        i++;
                    }
                    sessionStorage.removeItem(args[1]);
                    sessionStorage.setItem(args[1], znaczenia);
                }
                else
                {
                    var znaczenia = [];
                    var i =2;
                    while(args[i])
                    {
                        if(!znaczenia.includes(args[i])) znaczenia.push(args[i]);
                        else 
                        {res.innerText ='znaczenie powtorzone';
                        return;
                        }

                        i++;
                    }   
                    if(znaczenia.length>0)
                    {
                        sessionStorage.setItem(args[1], znaczenia);
                    }
                    else
                    {
                        res.innerText ='error';
                        return;
                    }
                }

            }
            else
            {
                res.innerText ='error';
                return;
            }
            
            res.innerText ='wykonano';
            return;
            
        }
        else if(args[0]=="usun")
        {
            if(args[1] && sessionStorage.getItem(args[1]))
            {
                var znaczenia = sessionStorage.getItem(args[1]).split(',');
                var i =2;
                while(args[i])
                {
                    if(znaczenia.includes(args[i]))
                    {
                        const index = znaczenia.indexOf(args[i]);
                        znaczenia.splice(index, 1);
                    }
                    else 
                    {
                        res.innerText =args[1]+' nie posiada '+args[i];
                        return;
                    }
                    i++;
                }
                if(znaczenia.length>0)
                {
                    sessionStorage.removeItem(args[1]);
                    sessionStorage.setItem(args[1], znaczenia);
                }
                else
                {
                    sessionStorage.removeItem(args[1]);
                }
            }
            else
            {
                res.innerText ='error';
                return;
            }
            
            res.innerText ='wykonano';
            return;
        }
        else if(args[0]=="mod")
        {
            if(args[1] && sessionStorage.getItem(args[1]))
            {
                var znaczenia = sessionStorage.getItem(args[1]).split(',');
                if(args[2] && znaczenia.includes(args[2]))
                {
                    if(args[3] && !znaczenia.includes(args[3]))
                    {
                        const index = znaczenia.indexOf(args[2]);
                        znaczenia.splice(index, 1);
                        znaczenia.push(args[3]);

                        sessionStorage.removeItem(args[1]);
                        sessionStorage.setItem(args[1], znaczenia);
                    }
                    else
                    {
                        res.innerText ='error';
                        return;
                    }
                    
                }
                else
                {
                    res.innerText ='error';
                    return;
                }
            }
            res.innerText ='wykonano';
            return;
            
        }
        else
        {
            res.innerText ='zla komenda';
            return;
        }
    }
}