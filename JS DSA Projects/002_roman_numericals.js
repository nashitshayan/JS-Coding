// Roman Numeral Converter
// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.


//CODE (basic, brute solution, ugh)

function convertToRoman(num) {
    let roman= [];
    
    while(num>0)
    {
      if(num>=1000)
      {
        roman.push("M")
        num-=1000;
      }
      else if(num>=900)
      {
        roman.push("CM")
        num-=900;
      }
      else if(num>=800)
      {
        roman.push("DCCC")
        num-=800;
      }
      else if(num>=700)
      {
        roman.push("DCC")
        num-=700;
      }
      else if(num>=600)
      {
        roman.push("DC")
        num-=600;
      }
      else if(num>=500)
      {
        roman.push("D")
        num-=500;
      }
      else if(num>=400)
      {
        roman.push("CD")
        num-=400;
      }
      else if(num>=300)
      {
        roman.push("CCC")
        num-=300;
      }
      else if(num>=200)
      {
        roman.push("CC")
        num-=200;
      }
      else if(num>=100)
      {
        roman.push("C")
        num-=100;
      }
      else if(num>=90)
      {
        roman.push("XC")
        num-=90;
      }
      else if(num>=80)
      {
        roman.push("LXXX")
        num-=80;
      }
      else if(num>=70)
      {
        roman.push("LXX")
        num-=70;
      }
      else if(num>=60)
      {
        roman.push("LX")
        num-=60;
      }
      else if(num>=50)
      {
        roman.push("L")
        num-=50;
      }
      else if(num>=40)
      {
        roman.push("XL")
        num-=40;
      }
      else if(num>=30)
      {
        roman.push("XXX")
        num-=30;
      }
      else if(num>=20)
      {
        roman.push("XX")
        num-=20;
      }
      else if(num>=10)
      {
        roman.push("X")
        num-=10;
      }
      else if(num>=9)
      {
        roman.push("IX")
        num-=9;
      }
      else if(num>=8)
      {
        roman.push("VIII")
        num-=8;
      }
      else if(num>=7)
      {
        roman.push("VII")
        num-=7;
      }
      else if(num>=6)
      {
        roman.push("VI")
        num-=6;
      }
      else if(num>=5)
      {
        roman.push("V")
        num-=5;
      }
      else if(num>=4)
      {
        roman.push("IV")
        num-=4;
      }
      else if(num>=3)
      {
        roman.push("III")
        num-=3;
      }
      else if(num>=2)
      {
        roman.push("II")
        num-=2;
      }
      else
      {
        roman.push("I")
        num-=1;
      }
  
    }
  
    //console.log(roman.join(""))
  
   return roman.join("");
  }
  
  convertToRoman(891);
  //DCCCXCI



  //alt 1 (half idea from me, half from other)
  function convertToRoman(num) {
    let romanObj= 
        {1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',
        9:'IX',10:'X',20:'XX',30:'XXX',40:'XL',50:'L',60:'LX',
        70:'LXX',80:'LXXX',90:'XC',100:'C',200:'CC',300:'CCC',
        400:'CD',500:'D',600:'DC',700:'DCC',800:'DCCC',
        900:'CM',1000:'M', 2000: 'MM', 3000:'MMM'}
  
    let roman= String(+num).split("").reverse().join("");
    let newRoman=[];
    for(let i=0; i<roman.length;i++)
    {
      newRoman.push(romanObj[roman[i]* Math.pow(10,i)])
    }
  
   // console.log(roman , "  ", newRoman.reverse().join(""))
  
   return newRoman.reverse().join("");
  }
  
  convertToRoman(891);
  //DCCCXCI