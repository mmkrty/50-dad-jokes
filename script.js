const joke = document.getElementById("jokes");
const jokesBtn = document.getElementById("jokesBtn");

jokesBtn.addEventListener("click", getJokes)

getJokes();

//Using Async/Await
async function getJokes() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };

    const res = await fetch("https://icanhazdadjoke.com/", config);
    const data = await res.json();
    joke.innerHTML = data.joke;
    

};

// Using .then
// function getJokes() {
//     const config = {
//         headers: {
//             Accept: "application/json",
//         },
//     };

//     fetch("https://icanhazdadjoke.com/", config)
//     .then((res) => res.json())
//     .then((data) => {
//         joke.innerHTML = data.joke;
//     })

// };