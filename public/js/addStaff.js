const addStaff = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector("#first_name").value.trim();
  const last_name = document.querySelector("#last_name").value.trim();
  const occupation = document.querySelector("#occupation").value.trim();

  if (first_name && last_name && occupation) {
    const response = await fetch(`/api/staff`, {
      method: "POST",
      body: JSON.stringify({
        first_name,
        last_name,
        occupation,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/api/staff");
    } else {
      alert("Failed to add staff");
    }
  }
};

document.querySelector(".add-staff").addEventListener("submit", addStaff);
