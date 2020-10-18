let menu_box = document.getElementById("menu-links");
function openMenu(){
  if (menu_box.style.right == '0px'){
    menu_box.style.right = '-100%';
  } else {
    menu_box.style.right = '0';
  }
}