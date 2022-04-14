const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".name");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy")
tweetBtn = document.querySelector(".twitter")
instaBtn = document.querySelector(".insta")

//random quote generator
function randomQuote() {
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading..."
    //fetching quotes from api
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading")
    })
}

//speech 
soundBtn.addEventListener("click",()=>{
    //special web api which requests for speech
    let audio = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(audio)
});

copyBtn.addEventListener("click", ()=>{
    // writetext() allows to copy tetx to the clipboard
    navigator.clipboard.writeText(quoteText.innerText)
})

tweetBtn.addEventListener("click", ()=>{
    let tweeturl = `https://twitter.com/intent/tweet?url=${quoteText.innerText} by ${authorName.innerText}`
    window.open(tweeturl)
})

instaBtn.addEventListener("click", ()=>{
    let post = `https://instagram.com`
    window.open(post)
})

quoteBtn.addEventListener("click",randomQuote)