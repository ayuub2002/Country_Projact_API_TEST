// let bookTitle = document.getElementById("book-title");
// let bookAuthor = document.getElementById("book-author");
// let bookName = document.getElementById("book-Name");
// let book_author = document.getElementById("book_author");
// let book_Cover = document.getElementById("Book-cover")
// let searchBtn = document.getElementById("search");

// searchBtn.addEventListener("click", getBook);

// function getBook() {
//     fetch("https://bookcoverapi.herokuapp.com/getBookCover?bookTitle=${bookTitle}&authorName=${bookAuthor}")
//     .then((res) => res.json())
//     .then((data) => {
//         bookName.textContent = data.bookTitle;
//         book_author.textContent = data.authorName;
//         book_Cover.innerHTML = `<img scr = ${data.book_CoverUrl} alt= "Book Cover" width="300px">`
//     });

let countryName=document.getElementById('Country-Name');
let CountryFlag=document.getElementById('country-flag');
let Country_capital=document.getElementById('Country-capital');
let Country_region=document.getElementById('Country-region');
let searchBtn=document.getElementById('Search');

searchBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    fetch(`https://restcountries.com/v3.1/name/${e.target[0].value}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
       //     countryName.textContent=data[0].name.common;
            Country_capital.textContent=data[0].capital;
            Country_region.textContent=data[0].region;
            CountryFlag.innerHTML=`<img src = ${data[0].flags.png} alt="Country Flag">`;

        });

});