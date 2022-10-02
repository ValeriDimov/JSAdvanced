function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById("searchField").value;
      let students = Array.from(document.querySelectorAll(".container tr"));

      for (i = 2; i < students.length; i++) {
         let data = students[i];
         if(data.textContent.includes(input)) {
            
            data.classList.add("select");
         } else {
            if(data.classList.contains("select")) {
               data.classList.remove("select");
            }
         }
      } 

      document.getElementById("searchField").value = "";

   }
}