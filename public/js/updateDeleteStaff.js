const updateStaff = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute("staffs-id")) {
    const id = event.target.getAttribute("staffs-id");

    const first_name = event.target.getAttribute("first_name").value.trim();
    const last_name = event.target.getAttribute("last_name").value.trim();
    const nationality = event.target.getAttribute("nationality").value.trim();
    const occupation = event.target.getAttribute("occupation").value.trim();
    const former_clubs = event.target.getAttribute("former_clubs").value.trim();

    const file_name = document.querySelector("#file_name").value.trim();

    const response = await fetch(`api/staff/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id,
        first_name,
        last_name,
        nationality,
        former_clubs,
        occupation,
        file_name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to update staff");
    }
  }
};

const deleteStaff = async (event) => {
  if (event.target.hasAttribute("staff-id")) {
    const id = event.target.getAttribute("staff-id");

    const response = await fetch(`/api/staff/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/api/staff");
    } else {
      alert("Failed to delete staff");
    }
  }
};

document.querySelector(".update-form").addEventListener("click", updateStaff);

document.querySelector("#delete").addEventListener("click", deleteStaff);
