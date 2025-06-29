// ========== PHẦN 1: LOGIN - Trang index.html ==========
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (!username && !password) {
      errorMessage.textContent = "Lại quên nhập tên đăng nhập và mật khẩu rồi. Nhập lại nha!";
      return;
    }

    if (!username) {
      errorMessage.textContent = "Lại quên nhập tên đăng nhập rồi.";
      return;
    }

    if (!password) {
      errorMessage.textContent = "Lại quên nhập mật khẩu rồi.";
      return;
    }

    if (username === "maianh01" && password === "congrats") {
      errorMessage.textContent = "";
      localStorage.setItem("justLoggedIn", "true");
      window.location.href = "gift_box.html";
    } else {
      errorMessage.textContent = "Nhập sai rồi kìa :) Thử lại nha.";
    }
  });
}

// ========== PHẦN 2: RANDOM NÚT + HIỆN CHỮ TROLL - Trang gift_box.html ==========
const btnGift = document.getElementById("btn_giftbox");
let clickCount = 0;

if (btnGift) {
  btnGift.addEventListener("click", () => {
    clickCount++;

    if (clickCount < 5) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const btnWidth = btnGift.offsetWidth;
      const btnHeight = btnGift.offsetHeight;

      const randomX = Math.random() * (windowWidth - btnWidth);
      const randomY = Math.random() * (windowHeight - btnHeight);

      btnGift.style.position = "absolute";
      btnGift.style.left = `${randomX}px`;
      btnGift.style.top = `${randomY}px`;
    } else if (clickCount === 5) {
      btnGift.style.left = "50%";
      btnGift.style.top = "75%";
      btnGift.style.transform = "translateX(-50%)";


      const messageBox = document.getElementById("message");
      if (messageBox) {
        messageBox.innerHTML = ""; // Xoá chữ cũ

        const newText = "Đùa chút thôi, thêm lần này là được :)";
        let newIndex = 0;

        function typeNewText() {
          if (newIndex < newText.length) {
            const span = document.createElement("span");
            span.innerHTML = newText.charAt(newIndex) === " " ? "&nbsp;" : newText.charAt(newIndex);
            messageBox.appendChild(span);
            newIndex++;
            setTimeout(typeNewText, 40);
          }
        }

        typeNewText();
      }
    } else {
      window.location.href = "congratulations.html";
    }
  });
}

// ========== PHẦN 3: FADE-IN ẢNH GIFT ==========
window.addEventListener("DOMContentLoaded", () => {
  const giftImg = document.getElementById("gift-img");
  if (giftImg) {
    setTimeout(() => {
      giftImg.classList.add("show");
    }, 300);
  }
});

// ========== PHẦN 4: HIỆU ỨNG ĐÁNH CHỮ BAN ĐẦU ==========
const message = document.getElementById("message");
const text = "Nhấn vào nút bên dưới để mở nha :)";
let index = 0;

const justLoggedIn = localStorage.getItem("justLoggedIn") === "true";

function typeText() {
  if (index < text.length) {
    const char = text.charAt(index);

    if (char === "\n") {
      message.appendChild(document.createElement("br"));
    } else {
      const span = document.createElement("span");
      span.innerHTML = char === " " ? "&nbsp;" : char;
      if (char !== " ") {
        span.classList.add("letter");
      }
      message.appendChild(span);
    }

    index++;
    setTimeout(typeText, 50);
  } else {
    localStorage.removeItem("justLoggedIn");
  }
}

window.addEventListener("DOMContentLoaded", typeText);