const logout = async () => {
  //need route
  const response = await fetch("/api/...", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#logout").addEvenetListener("click", logout);
