// 부드러운 이동
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }

        // 모바일에서는 메뉴 닫기
        document.querySelector(".nav-menu").classList.remove("show");
    });
});

// 햄버거 메뉴 열고 닫기
document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

//팝업 만들기
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// ESC 키 누르면 닫기
window.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        document.querySelectorAll(".modal").forEach(m => m.style.display = "none");
    }
});
