window.onload = function () {
  let navItem = document.getElementsByClassName("nav-item")
    for(let i=0; i < navItem.length; i++) {
        navItem[i].onclick = function () {

            for (let j=0; j < navItem.length; j++) {
                navItem[j].style.borderBottomColor = "white";
            }
        navItem[i].style.borderBottomColor = "#B500FF";
        }
    }
}