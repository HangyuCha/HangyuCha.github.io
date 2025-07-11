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


const audio = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");

// 버튼 상태 저장 (🔊/🔇)
toggleBtn.addEventListener("click", () => {if (audio.paused) {
    audio.play();
    toggleBtn.textContent = "🔊";
} else {
    audio.pause();
    toggleBtn.textContent = "🔇";
}
});

    // 자동 재생 제한 대응 (브라우저 정책 우회)
window.addEventListener("DOMContentLoaded", () => {audio.play().catch(() => {
        document.addEventListener("click", () => {
            audio.play();
        }, { once: true });
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

const innerSwiper = new Swiper(".innerSwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    loop: false
});


function openFullImage(src) {
    const box = document.getElementById("imageLightbox");
    const img = document.getElementById("lightbox-img");
    img.src = src;
    box.style.display = "flex";
}

// DOM이 다 로드된 뒤에 닫기 버튼 연결
window.addEventListener("DOMContentLoaded", function () {
    const closeBtn = document.getElementById("lightbox-close");
    const box = document.getElementById("imageLightbox");

    if (closeBtn && box) {
        closeBtn.addEventListener("click", function () {
            box.style.display = "none";
        });
    }
});


// ESC 키 누르면 닫기
window.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        document.querySelectorAll(".modal").forEach(m => m.style.display = "none");
    }
});


