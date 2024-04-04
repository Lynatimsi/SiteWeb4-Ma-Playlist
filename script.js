let chansons = [
    "Time to Pretend",
     "O-o-oh Child",
     "Wish You Were Here", 
     "Heroes",
     "I Put a Spell on You",
     "Call Me",
     "Paper Planes",
     "Jolene",
     "You Don't Own Me",
     "Fast Car",
     "Run the World (Girls)",
     "Superstition",
]
console.log(chansons.length);

document.querySelector(".total").innerHTML=chansons.length  +  "  meilleures chansons";

const chansonsLists = document.querySelector(".mix");

let button =document.getElementById("button");

button.addEventListener('click', () => {
    


    console.log(chansonsLists.children.length)
    if (chansonsLists.children.length === 0) {
        mixInfo(chansons);
    }

    if(chansonsLists.style.display === 'none') {

        chansonsLists.style.display = 'block';
    } else {
        chansonsLists.style.display = 'none';
    }
});

function mixInfo(songList) {
    
    let ul = chansonsLists;

    songList.forEach((element, index) => {

      let elementLi = document.createElement('li');

      elementLi.classList.add('song');
      console.log(elementLi);

      let span = document.createElement('span');
      console.log(span);

      span.classList.add('song-number');
      span.textContent= `${index + 1}.`;
      elementLi.appendChild(span);
      console.log(elementLi);

      montext=document.createTextNode(element);
      elementLi.appendChild(montext);

      ul.appendChild(elementLi);
   
   
   
   
    });

}
