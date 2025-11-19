// ===== Back to Top Button =====

// 取得按鈕
let backToTopBtn = document.getElementById("backToTopBtn");

// 捲動時判斷是否顯示按鈕
window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// 點擊按鈕 → 平滑回頂端
backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
