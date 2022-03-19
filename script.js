const searchwrapper = document.querySelector(".search-box")
const inputvalue = searchwrapper.querySelector(".search-txt")
const suggest = searchwrapper.querySelector(".sugg-box")

inputvalue.addEventListener("keyup", (e) => {
    let input = e.target.value;
    let arr = [];
    if (input) {
        let m = input.toLocaleLowerCase();
        arr = suggestions.filter((x) => {
            return x.toLocaleLowerCase().startsWith(m);
        });
        arr = arr.map((x) => {
            x = '<li>' + x + '</li>';
            return x;
        })
        console.log(arr);
        searchwrapper.classList.add("active");
        displaysugg(arr);

        let allist = suggest.querySelectorAll("li");
        for (let i = 0; i < allist.length; i++) {
            allist[i].setAttribute("onclick", "select(this)");
        }
    }
    else {
        searchwrapper.classList.remove("active");
    }

});

function select(x) {
    let selected = x.textContent;
    console.log(selected);
    inputvalue.value = selected;
    searchwrapper.classList.remove("active");
}

function displaysugg(list) {
    let listdata;
    if (!list.length) {
         let uservalue = inputvalue.value;
         listdata = '<li>' + uservalue + '</li>';
    }
    else {
        listdata = list.join('');
    }
    suggest.innerHTML = listdata;
}