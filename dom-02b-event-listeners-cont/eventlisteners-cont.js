const btn1 = document.querySelector("#btn1");

btn1.addEventListener('click', function(){
    alert('It was clicked!');
});

const btn2 = document.querySelector("#btn2");

btn2.addEventListener('click', () => alert('It was clicked too!'));
