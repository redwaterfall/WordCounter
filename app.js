

let input = document.querySelector('textarea');
let topText = document.querySelector('.topText');
let words = document.querySelector('#wordAmount');
let text = words.innerHTML;

let topTextValue = topText.innerHTML;
let topTextLength = topText.innerHTML.length;


input.value='';

function wordCounter(inputString){
    let Arr = inputString.split(" " || '\n');
    //console.log(Arr)
    let filtered = Arr.filter(function (el) {
        return el != null || el != "";
      });
      //console.log(filtered)
      if(filtered == ""){
          return 0;
      }
    return filtered.length;
}
let i = 0;
topText.innerHTML = " ";

    let int = setInterval(()=>{
            topText.innerHTML =  topText.innerHTML + topTextValue[i];
            i++;
        if(topText.innerHTML.length > topTextLength){
            clearInterval(int);
            i=0;
        }    
        
    },500)


function update(){
    words.innerHTML = text + wordCounter(input.value);
    requestAnimationFrame(update);
}
requestAnimationFrame(update);