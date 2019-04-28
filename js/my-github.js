fetch("https://api.github.com/users/kosenchiha/repos")
  .then(function(response) {
    return response.json();
  })
  .then(function(repos) {
    document.querySelector("#repos-count").innerHTML = repos.length;
    document.querySelector("#repos-list").innerHTML = "";
    repos.forEach(element => {
      var listElement = document.createElement("li");
      document.querySelector("#repos-list").appendChild(listElement);
      var a = document.createElement("a");
      a.setAttribute("href", element.html_url);
      listElement.appendChild(a);
      a.innerHTML = element.name;
    });
  });
