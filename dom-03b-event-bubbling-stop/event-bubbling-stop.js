const btn1 = document.querySelector("#btn1");
const clickableDiv = document.querySelector("#clickableDiv");

btn1.addEventListener('click', clickHandlerFuction);
clickableDiv.addEventListener('click', clickHandlerFuction);

function clickHandlerFuction(event) {
    alert('Mouse clicked!');
    console.log("Click Event happened in", event.target.nodeName);
    console.log("Currently we are listening to Click Event in", event.currentTarget.nodeName);
    event.stopPropagation();
}

const clickableLink = document.querySelector("#clickableLink");

clickableLink.addEventListener('click', clickButNoGo);

function clickButNoGo(event) {
    alert('Mouse clicked on the link!');
    event.preventDefault();
}
