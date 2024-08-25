const btn1 = document.querySelector("#btn1");

btn1.addEventListener('click', clickHandlerFuction);

function clickHandlerFuction() {
    alert('It was clicked!');
}

const btn2 = document.querySelector("#btn2");

btn2.addEventListener('click', function(){
    btn1.removeEventListener('click', clickHandlerFuction);
});

const btn3 = document.querySelector("#btn3");

btn3.addEventListener('click', function(){
    btn1.addEventListener('click', clickHandlerFuction);
});
