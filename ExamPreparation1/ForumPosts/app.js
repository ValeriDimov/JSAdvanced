window.addEventListener("load", solve);

function solve() {
  let title = document.getElementById("post-title");
  let category = document.getElementById("post-category");
  let content = document.getElementById("post-content");
  let publshBtn = document.getElementById("publish-btn").addEventListener('click', publish);
  let clearBtn = document.getElementById("clear-btn").addEventListener('click', clearPosts);

  let reviewUl = document.getElementById("review-list");
  let publishUl = document.getElementById("published-list");


  function publish(e) {
    let titleValue = title.value;
    let categoryValue = category.value;
    let contentValue = content.value;

    let article = document.createElement("article");
    let h4 = document.createElement("h4");
    let paragraph1 = document.createElement("p");
    let paragraph2 = document.createElement("p");
    let editBtn = document.createElement("button");
    let approveBtn = document.createElement("button");

    let li = document.createElement("li");

    li.classList.add("rpost")
    h4.textContent = titleValue;
    paragraph1.textContent = `Category: ${categoryValue}`;
    paragraph2.textContent = `Content: ${contentValue}`;

    editBtn.classList.add("action-btn", "edit");
    editBtn.textContent = "Edit";
    approveBtn.classList.add("action-btn", "approve");
    approveBtn.textContent = "Approve";

    article.appendChild(h4);
    article.appendChild(paragraph1);
    article.appendChild(paragraph2);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(approveBtn);

    if (!titleValue || !categoryValue || !contentValue) {
      return;
    }

    reviewUl.appendChild(li);

    title.value = "";
    category.value = "";
    content.value = "";

    editBtn.addEventListener('click', editPost);
    approveBtn.addEventListener('click', approvePost);

  }

  function editPost(e) {
    let currentArticle = e.target.parentElement.firstChild.children;
    title.value = currentArticle[0].textContent;
    category.value = (currentArticle[1].textContent).split(": ")[1];
    content.value = (currentArticle[2].textContent).split(": ")[1];

    e.target.parentElement.remove();

  }

  function approvePost(e) {
    let currentLi = e.target.parentElement;
    currentLi.children[2].remove();
    currentLi.children[1].remove();
    publishUl.appendChild(currentLi);
  }

  function clearPosts(e) {
    let currentLis = Array.from(e.target.parentElement.children[1].children);
    if (currentLis.length === 0) {
      return;
    }
    
    currentLis.forEach(element => {
      element.remove();
    });
  }

}
