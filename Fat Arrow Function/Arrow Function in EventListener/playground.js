const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

//Normal Function
// function show() {
//     display.innerHTML = this.value;
//     setTimeout(function () {
//         thanks.innerHTML = `You have typed: ${this.value}`;
//     }, 1000);
// }

// const show = () => {
//     display.innerHTML = this.value;
// };

//This also doesn't work. Because arrow function doesn't know 'this'. It doesn't change the outer value of 'this'. And here the outer value means window. Thats why it is giving undefined. So in this case normal function is the only option we can use.

function show() {
    display.innerHTML = this.value;
    var self = this;
    setTimeout(function () {
        thanks.innerHTML = `You have typed: ${self.value}`;
    }, 1000);
}

searchInput.addEventListener("keyup", show);
