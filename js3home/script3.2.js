const input = document.getElementById("input");

//custom div
const template = document.createElement('template');

template.innerHTML = `
<style>
    div
    {
        font-size: 30px;
        color:rgb(255, 64, 0);
    }
    
</style>
<div id='value'></div>
`

class myelem extends HTMLElement {
    constructor()
    {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this._shadowRoot.getElementById('value').innerText = 10;
    }

    connectedCallback() 
    {
        var inputValue = 10;
        var counter = 10;
        var elem = this._shadowRoot.getElementById('value');

        setInterval(function countDown()
        {
            if(inputValue != input.value){ inputValue = input.value; counter = inputValue}
            else if(counter>0) //wchodzimy tu gdy input nie zmienil sie
            {
                counter--;
                elem.innerText=counter;
            }
        }, 1000);
        
    }

}


window.customElements.define('my-elem', myelem);