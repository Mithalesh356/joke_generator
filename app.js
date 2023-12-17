
let url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
async function getJoke(){
    let res=await axios.get(url);
    return (res.data.joke);
}

button=document.querySelector('.btn');
button.addEventListener('click',async ()=>{
    let joke= await getJoke();
    if(joke==undefined){
        p.innerText="No Joke Found Right Now Please Try Again !"
        let div=document.querySelector('containor');
        div.style.backgroundColor='red';
        setTimeout(()=>{
            div.style.backgroundColor='rgb(64, 59, 59)';
        },1000/2)
    }else{
        p=document.querySelector('.jokeContainor');
        p.innerText=joke;
    }
})
