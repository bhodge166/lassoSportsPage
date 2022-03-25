const addPlayer = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector("#first_name").value.trim();
  const last_name = document.querySelector("#last_name").value.trim();
  const kit_number = document.querySelector("#kit_number").value.trim();
  const date_of_birth = document.querySelector("#date_of_birth").value.trim();

  if (first_name && last_name && kit_number && date_of_birth) {
    const response = await fetch(`/`, {
      method: "POST",
      body: JSON.stringify({
        first_name,
        last_name,
        kit_number,
        date_of_birth,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to add player");
    }
  }
};

document.querySelector(".add-player").addEventListener("submit", addPlayer);
