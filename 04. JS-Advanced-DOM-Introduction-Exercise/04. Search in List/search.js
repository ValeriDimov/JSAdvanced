function search() {
   let towns = Array.from(document.querySelectorAll('#towns li'));
   input = document.getElementById("searchText").value;
   let result = document.getElementById("result");
   let counter = 0;

   for (const town of towns) {
      let townName = town.textContent;

      if(townName.includes(input)) {
         town.style.textDecoration = "underline";
         town.style.fontWeight = "bold";
         counter++;
      } else {
         town.style.textDecoration = "none";
         town.style.fontWeight = "";
      } 
   }
   
   result.textContent = `${counter} matches found`;
}
