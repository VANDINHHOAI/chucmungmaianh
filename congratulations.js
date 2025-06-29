// ========= Đánh chữ "CONGRATULATIONS!" =========
const message = document.getElementById("message");

if (message) {
    const text = "CONGRATULATIONS!";
    let index = 0;

    function typeText() {
    if (index < text.length) {
        const char = text.charAt(index);
        const span = document.createElement("span");
        span.innerHTML = char === " " ? "&nbsp;" : char;
        span.classList.add("letter");
        message.appendChild(span);
        index++;
        setTimeout(typeText, 50);
        }
    }

    window.addEventListener("DOMContentLoaded", typeText);
}

// ========= Hiển thị popup và đánh chữ bên trong =========
const btnShow = document.getElementById("btn-show-message");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-popup");
const popupMessage = document.getElementById("popup-message");

const messageText = "Chúc Mai Anh có thật nhiều sức khỏe, gặp nhiều điều may mắn và thành công trong cuộc sống";

function typePopupText(index = 0) {
    if (index < messageText.length) {
    const char = messageText.charAt(index);
    if (char === "\n") {
        popupMessage.appendChild(document.createElement("br"));
    } else {
        const span = document.createElement("span");
        span.innerHTML = char === " " ? "&nbsp;" : char;
        popupMessage.appendChild(span);
    }
    setTimeout(() => typePopupText(index + 1), 30);
    }
}

if (btnShow && popup) {
    btnShow.addEventListener("click", () => {
        popup.style.display = "flex";
        popupMessage.innerHTML = "";
        typePopupText();
    });

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-music");

    // Phát nhạc khi user bấm bất kỳ đâu
    const enableAudio = () => {
        if (audio && audio.paused) {
        audio.play().catch((e) => {
            console.log("Trình duyệt chặn autoplay:", e);
        });
        }
        document.removeEventListener("click", enableAudio);
    };

    document.addEventListener("click", enableAudio);
});



// ======== Hiển thị MODAL khi bấm nút "Nhận hoa" =========
const btnPopupFlower = document.getElementById("btn-popup-flower");
const modal = document.getElementById("modal");
const modalTitle = document.querySelector(".modal-title");
const btnFlower = document.getElementById("btn-flower");

if (btnPopupFlower && modal && modalTitle && btnFlower) {
    btnPopupFlower.addEventListener("click", () => {
        modal.style.display = "flex";
        modalTitle.textContent = "Tặng hoa🌸";
    });

    btnFlower.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    // Tự động ẩn sau 3 giây
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// Bổ sung vào sự kiện bấm nút "NHẬN"
btnFlower.addEventListener("click", () => {
    modal.style.display = "none";
    showToast("🎉 Nhận hoa thành công!");
});

