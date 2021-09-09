//login
// 在加data的form裏面，加eventListener，改用javascript fetch做 add data.
let angle = 0;

function changeBadBearMotion(angle) {
  const badBear = document.querySelector(".login_img");
  badBear.style.transform = `rotateX(0deg) rotateY(0deg) rotateZ(${angle}deg)`;
}
const inputUname = document.querySelector("#Uname");
inputUname.addEventListener("click", () => {
  angle = 8;
  changeBadBearMotion(angle);
  const errorBear = document.querySelector(".login_img");
  errorBear.src = "./images/bear_360.png";
});

changeBadBearMotion(angle);

inputUname.addEventListener("input", (e) => {
  console.log(e.currentTarget.value.length);
  angle = 8 - 0.5 * e.currentTarget.value.length;
  changeBadBearMotion(angle);
});

const inputPass = document.querySelector("#Pass");
inputPass.addEventListener("click", () => {
  const passBear = document.querySelector(".login_img");
  passBear.src = "./images/PWBear.png";
});

document.querySelector("#login").addEventListener("submit", async (a) => {
  a.preventDefault();
  const form = a.target;
  const dataObj = {
    username: form.Uname.value,
    password: form.Pass.value,
  };

  const res = await fetch("http://localhost:8080/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataObj),
  });
  if (res.ok) {
    localStorage.setItem("login", form.Uname.value);
    window.location = "http://localhost:8080/index.html";
  } else {
    const failedlogin = document.querySelector(".login_page");
    const animation = "login 800ms ease-in-out";
    failedlogin.style.animation = animation;
    setTimeout(() => (failedlogin.style.animation = ""), 800);
    const errorBear = document.querySelector(".login_img");
    errorBear.src = "./images/bear_404.png";
    const errorWarning = document.querySelector(".error_warning");
    errorWarning.style.display = "block";
  }
  localStorage.removeItem("taskType");
});
