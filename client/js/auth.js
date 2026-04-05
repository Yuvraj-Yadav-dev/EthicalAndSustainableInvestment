async function login() {
  const user = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  let res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(user)
  });

  let data = await res.json();

  // 🔐 STORE DATA
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data));

  alert("Login successful!");
  window.location.href = "dashboard.html";
}

async function register() {
  console.log("Register clicked");

  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  let res = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  let data = await res.text();

  alert(data);
}