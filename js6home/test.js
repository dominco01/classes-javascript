var expect = chai.expect;

var globalsum=0;
function cyfry(napis)
{
    var sum=0;
    for (var i = 0; i < napis.length; i++) {
        if(Number(napis[i]))
        {
            sum+=Number(napis[i]);
        }
      }
    return sum;
}
function litery(napis)
{
    var sum=0;
    for (var i = 0; i < napis.length; i++) {
        if(!Number(napis[i]))
        {
            sum++;
        }
      }
    return sum;
}

function suma(napis)
{
    if(!isNaN(parseInt(napis))) {globalsum += parseInt(napis);};
    return globalsum;
}

function suma2(napis)
{
    if(!isNaN(parseInt(napis))) {globalsum2 += parseInt(napis);};
    return globalsum2;
}

describe('The functions', function() {
it('Same cyfry', function() {
    var str='111';
    expect(cyfry(str)).to.equal(3);
    expect(litery(str)).to.equal(0);
    expect(suma(str)).to.equal(111);
    });
   

 it('Same litery', function() {
     var str='abaa';
    expect(cyfry(str)).to.equal(0);
    expect(litery(str)).to.equal(4);
    expect(suma(str)).to.equal(111);
  });

  it('Litery, a po nich cyfry', function() {
    var str='b3345';
   expect(cyfry(str)).to.equal(15);
   expect(litery(str)).to.equal(1);
   expect(suma(str)).to.equal(111);
 });

 it('Cyfry, a po nich litery', function() {
    var str='33abcd';
   expect(cyfry(str)).to.equal(6);
   expect(litery(str)).to.equal(4);
   expect(suma(str)).to.equal(144);
 });

 it('Pusty napis', function() {
    var str='';
   expect(cyfry(str)).to.equal(0);
   expect(litery(str)).to.equal(0);
   expect(suma(str)).to.equal(144);
 });

});

globalsum2=0;
a = window.prompt();
while(a!=null){
    alert(a+" : "+cyfry(a)+" "+ litery(a)+" "+suma2(a));
    a = window.prompt();
}
