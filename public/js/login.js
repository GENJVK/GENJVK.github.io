//login
// 在加data的form裏面，加eventListener，改用javascript fetch做 add data.
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
  }
  localStorage.removeItem("taskType");
});
