// fetch("https://api.github.com/repos/rarmatei/js-exercises/pulls")
//   .then(function(response) {
//     return response.clone().json();
//   })
//   .then(function(el) {
//     function getPullRequestByUser() {
//       document.querySelector("#pull-requests-list").innerHTML = "";
//       var user = document.querySelector("#searchField").value;
//       el.filter(element => element.user.login === user).forEach(element => {
//         var pullRequest = document.createElement("li");
//         document.querySelector("#pull-requests-list").appendChild(pullRequest);
//         var a = document.createElement("a");
//         a.setAttribute("href", element.html_url);
//         a.innerHTML = element.title;
//         pullRequest.appendChild(a);
//       });
//     }

//     document
//       .querySelector("#searchField")
//       .addEventListener("keyup", getPullRequestByUser);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

// fetch("https://api.github.com/repos/rarmatei/js-exercises/pulls")
//   .then(function(response) {
//     return response.clone().json();
//   })
//   .then(function(el) {
//     function createLinkForAllPullRequests(jsonData) {
//       jsonData.forEach(element => {
//         var pullRequest = document.createElement("li");
//         document.querySelector("#pull-requests-list").appendChild(pullRequest);
//         var a = document.createElement("a");
//         a.setAttribute("href", element.html_url);
//         a.innerHTML = element.title + " by " + element.user.login;
//         pullRequest.appendChild(a);
//       });
//     }

//     document.querySelector("#pull-requests-list").innerHTML = "";
//     createLinkForAllPullRequests(el);
//           var user = document.querySelector("#searchField").value;
//     document
//       .querySelector("#searchField")
//       .addEventListener("keyup", function(e) {
//         var valueOfInputField = e.target.value.toLowerCase();
//        el.filter(function())
//       });
//   });

fetch("https://api.github.com/repos/rarmatei/js-exercises/pulls")
  .then(function(response) {
    return response.clone().json();
  })
  .then(function(el) {
    document.querySelector("#pull-requests-list").innerHTML = "";
    //var user = document.querySelector("#searchField").value.toLowerCase();
    el.forEach(creatLink);
    function creatLink(element) {
      var pullRequest = document.createElement("li");
      document.querySelector("#pull-requests-list").appendChild(pullRequest);
      var a = document.createElement("a");
      a.setAttribute("href", element.html_url);
      a.innerHTML = element.title + " by " + element.user.login;
      pullRequest.appendChild(a);
    }
    document
      .querySelector("#searchField")
      .addEventListener("keyup", function(ev) {
        document.querySelector("#pull-requests-list").innerHTML = "";
        var valueOfInputField = ev.target.value.toLowerCase();
        console.log(valueOfInputField);
        var fil = el.filter(
          element =>
            element.user.login.toLowerCase().indexOf(valueOfInputField) != -1
        );
        fil.forEach(creatLink);

        console.log(fil);
        // var pullRequest = document.createElement("li");
        // document
        //   .querySelector("#pull-requests-list")
        //   .appendChild(pullRequest);
        // var a = document.createElement("a");
        // a.setAttribute("href", element.html_url);
        // a.innerHTML = element.title;
        // pullRequest.appendChild(a);
      });
  })
  .catch(function(error) {
    console.log(error);
  });
