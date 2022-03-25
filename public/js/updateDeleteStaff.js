const updateStaff = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute("staffs-id")) {
    const id = event.target.getAttribute("staffs-id");

    const first_name = document.querySelector("#first_name").value.trim();
    const last_name = document.querySelector("#last_name").value.trim();
    const kit_number = document.querySelector("#kit_number").value.trim();
    const date_of_birth = document.querySelector("#date_of_birth").value.trim();
    const national_team = document.querySelector("#national_team").value.trim();
    const position = document.querySelector("#position").value.trim();
    const former_clubs = document.querySelector("#former_clubs").value.trim();
    const games_played = document.querySelector("#games_played").value.trim();
    const starts = document.querySelector("#starts").value.trim();
    const goals = document.querySelector("#goals").value.trim();
    const shots_on_target = document
      .querySelector("#shots_on_target")
      .value.trim();
    const assists = document.querySelector("#assists").value.trim();
    const passes_success_rate = document
      .querySelector("#passes_success_rate")
      .value.trim();
    const yellow_cards = document.querySelector("#yellow_cards").value.trim();
    const red_cards = document.querySelector("#red_cards").value.trim();
    const tackle_success_rate = document
      .querySelector("#tackle_success_rate")
      .value.trim();

    const file_name = document.querySelector("#file_name").value.trim();

    const response = await fetch(`api/staff/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id,
        first_name,
        last_name,
        kit_number,
        date_of_birth,
        national_team,
        position,
        former_clubs,
        games_played,
        starts,
        goals,
        shots_on_target,
        assists,
        passes_success_rate,
        yellow_cards,
        red_cards,
        tackle_success_rate,
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
