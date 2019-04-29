fetch("https://api.github.com/repos/rarmatei/js-exercises/pulls")
  .then(function(response) {
    return response.clone().json();
  })
  .then(function(el) {
    function getPullRequestByUser() {
      document.querySelector("#pull-requests-list").innerHTML = "";
      var user = document.querySelector("#searchField").value;
      el.filter(element => element.user.login === user).forEach(element => {
        var pullRequest = document.createElement("li");
        document.querySelector("#pull-requests-list").appendChild(pullRequest);
        var a = document.createElement("a");
        a.setAttribute("href", element.html_url);
        a.innerHTML = element.title;
        pullRequest.appendChild(a);
      });
    }

    document
      .querySelector("#searchField")
      .addEventListener("keyup", getPullRequestByUser);
  })
  .catch(function(error) {
    console.log(error);
  });
