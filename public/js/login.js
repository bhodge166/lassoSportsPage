const loginFormHandler = async (event) => {
  event.PreventDefault();
  //need these ID's to match
  const email = document.querySelector("#user-login").value.trim();
  const password = document.querySelector("#user-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      //where do we want the user to go??
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    //Need route
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      //where do we want the user to go??
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
