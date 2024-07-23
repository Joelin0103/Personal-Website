// 當用戶滾動超過 20px 時顯示按鈕
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

// 點擊按鈕滾動回頂部
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
