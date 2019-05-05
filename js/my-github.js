function creatPullreqest(element) {
  var listElement = document.createElement("li");
  document.querySelector("#repos-list").appendChild(listElement);
  var a = document.createElement("a");
  a.setAttribute("href", element.html_url);
  a.innerHTML = element.name;
  listElement.appendChild(a);
}

function createListOfPullRequestsByUserName(name) {
  var url = "https://api.github.com/users/" + name + "/repos";
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(repos) {
      document.querySelector("#repos-count").textContent = repos.length;
      document.querySelector("#repos-list").innerHTML = "";
      repos.forEach(creatPullreqest);
    });
}

function searchEventHandler() {
  userName = document.querySelector("#searchField").value;
  if (document.querySelector("#searchField").value === "") {
    userName = "kosenchiha";
    createListOfPullRequestsByUserName(userName);
  } else {
    createListOfPullRequestsByUserName(userName);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  createListOfPullRequestsByUserName("kosenchiha");
});
document
  .querySelector("#submitButton")
  .addEventListener("click", searchEventHandler);

document
  .querySelector("#searchField")
  .addEventListener("keypress", function(event) {
    if (event.charCode === 13) {
      searchEventHandler();
    }
  });
