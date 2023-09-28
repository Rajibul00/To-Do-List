let container =  document.getElementById('container');
let inputBox = document.querySelector('#inputBox')
function submit(){
   if(inputBox.value!=''){
    container.setAttribute('class','container');
    let div = document.createElement('div');
    div.setAttribute('class','boxes');
    container.appendChild(div);
    let textfield =  document.createElement('p');
    textfield.innerText = inputBox.value;
    div.appendChild(textfield);
    //checkbox and delete field

    let cbanddelfield =  document.createElement('div');

 let input =  document.createElement('input');
input.setAttribute('type','checkbox');

let deletelogo = document.createElement('i');
deletelogo.setAttribute('class','ri-delete-bin-7-line');
deletelogo.addEventListener('click',function(){
    container.removeChild(div)
});
deletelogo.style.cursor='pointer';
input.style.cursor='pointer';
input.setAttribute('class','checkedcl')
cbanddelfield.setAttribute('class','deletelogo')

cbanddelfield.appendChild(input);
cbanddelfield.appendChild(deletelogo)
div.appendChild(cbanddelfield);
inputBox.value=''

   }

}
document.addEventListener('keydown',function(val){
    if(val.key =='Enter'){
        submit()
    }
})