window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let age = document.getElementById("age");
  let storyTitle = document.getElementById("story-title");
  let genre = document.getElementById("genre");
  let story = document.getElementById("story");
  let previewList = document.getElementById("preview-list");
  let mainDiv = document.getElementById("main");

  document.getElementById("form-btn").addEventListener('click', publish);

  function publish(e) {
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let ageValue = age.value;
    let storyTitleValue = storyTitle.value;
    let genreValue = genre.value;
    let storyValue = story.value;

    if (!firstNameValue || !lastNameValue || !ageValue || !storyTitleValue || !storyValue) {
      return;
    }

    let li = document.createElement("li");
    let article = document.createElement("article");
    let h4 = document.createElement("h4");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let btnSave = document.createElement("button");
    let btnEdit = document.createElement("button");
    let btnDelete = document.createElement("button");

    li.classList.add("story-info");
    h4.textContent = `Name: ${firstNameValue} ${lastNameValue}`;
    p1.textContent = `Age: ${ageValue}`;
    p2.textContent = `Title: ${storyTitleValue}`;
    p3.textContent = `Genre: ${genreValue}`;
    p4.textContent = storyValue;

    btnSave.classList.add("save-btn");
    btnSave.textContent = "Save Story";
    btnEdit.classList.add("edit-btn");
    btnEdit.textContent = "Edit Story";
    btnDelete.classList.add("delete-btn");
    btnDelete.textContent = "Delete Story";

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);

    li.appendChild(article);
    li.appendChild(btnSave);
    li.appendChild(btnEdit);
    li.appendChild(btnDelete);

    previewList.appendChild(li);

    let publishBtn = e.target;
    publishBtn.setAttribute("disabled", true);

    firstName.value = "";
    lastName.value = "";
    age.value = "";
    storyTitle.value = "";
    story.value = "";

    btnEdit.addEventListener('click', editStory);
    btnSave.addEventListener('click', saveStory);
    btnDelete.addEventListener('click', deleteStory);

    function editStory(e) {

      publishBtn.removeAttribute('disabled');
      btnEdit.setAttribute("disabled", true);
      btnDelete.setAttribute("disabled", true);
      btnSave.setAttribute("disabled", true);


      let artData = Array.from(e.target.parentElement.children[0].children);

      let names = artData[0].textContent;
      let ageNum = artData[1].textContent
      let storyEditTitle = artData[2].textContent;

      firstName.value = names.split(" ")[1];
      lastName.value = names.split(" ")[2];
      age.value = ageNum.split(" ")[1];
      storyTitle.value = storyEditTitle.split(": ")[1];
      story.value = artData[4].textContent;

      let ulStory = e.target.parentElement.parentElement.children;
      let liStory = e.target.parentElement.children;

      liStory[3].remove();
      liStory[2].remove();
      liStory[1].remove();
      liStory[0].remove();
      ulStory[0].remove();
    }

    function saveStory(e) {
      let mainDivChildren = mainDiv.children;

      mainDivChildren[1].remove();
      mainDivChildren[0].remove();

      let h1Main = document.createElement("h1");
      h1Main.textContent = "Your scary story is saved!";
      mainDiv.appendChild(h1Main);

    }

    function deleteStory(e) {
      publishBtn.removeAttribute('disabled');
      e.target.parentElement.remove();

      
    }

  }
}
