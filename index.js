$(document).ready(function () {
    $('.btn.btn-warning.abc').click(function (e) { 
        e.preventDefault();
        alert('Dang ki thanh cong !');
    });
    $('i.fas.fa-search').click(function (e) { 
        e.preventDefault();
        $('i.fas.fa-search').toggleClass('danhmucsp');
    });
});
function checkPw(form) {
    pw1 = form.pw1.value;
    pw2 = form.pw2.value;
    if (pw1 != pw2) {
    alert ("\nNhập đúng mật khẩu để tiếp tục !")
    return false;
    }
    else return alert('Để lại lời nhắn thành công !');
}
var d= new Date();
console.log(d);
