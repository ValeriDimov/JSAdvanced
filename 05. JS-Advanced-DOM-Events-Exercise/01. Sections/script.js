function create(words) {
      let currentDiv = document.getElementById("content");

      for (const word of words) {
         let newDiv = document.createElement("div");
         let par = document.createElement("p");
         par.textContent = word;
         newDiv.appendChild(par);
         currentDiv.appendChild(newDiv);
         par.style.display = 'none';

         newDiv.addEventListener('click', displayMe);
         
         function displayMe(e) {
            e.target.children[0].style.display = 'block';
         
         }
         
      }      

}