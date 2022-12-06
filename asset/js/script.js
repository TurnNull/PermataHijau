var tombolMenu = document.getElementsByClassName('btnMenu')[0];
var navigasi = document.getElementsByClassName('navigasi')[0];

tombolMenu.onclick = function() {
    navigasi.classList.toggle('active');
}

navigasi.onclick = function() {
    navigasi.classList.toggle('active');
}