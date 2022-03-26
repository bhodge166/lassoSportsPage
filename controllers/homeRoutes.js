const router = require("express").Router();
const { Player } = require("../models");

// find all roster route
router.get("/", async (req, res) => {
  try {
    const playerData = await Player.findAll();
    const players = playerData.map((x) => x.get({ plain: true }));
    res.render("homepage", { players, loggedIn: req.session.loggedIn });
    // res.status(200).json(playerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one player by its `id` value
router.get("/player/:id", async (req, res) => {
  try {
    const playerData = await Player.findByPk(req.params.id);

    if (!playerData) {
      res.status(404).json({ message: "No player found with that id!" });
      return;
    }

    const players = playerData.get({ plain: true });

    res.render("individual-player", {
      players,
      loggedIn: req.session.loggedIn,
    });
    // res.status(200).json(playerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const playerData = await Player.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      national_team: req.body.national_team,
      position: req.body.position,
      kit_number: req.body.kit_number,
      date_of_birth: req.body.date_of_birth,
      former_clubs: req.body.former_clubs,
      games_played: req.body.games_played,
      starts: req.body.starts,
      goals: req.body.goals,
      shots_on_target: req.body.shots_on_target,
      assists: req.body.assists,
      passes_success_rate: req.body.passes_success_rate,
      yellow_cards: req.body.yellow_cards,
      red_cards: req.body.red_cards,
      tackle_success_rate: req.body.tackle_success_rate,
      file_name: req.body.file_name,
    });
    res.status(200).json(playerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/player/:id", async (req, res) => {
  try {
    const updateFields = {};
    Object.entries(req.body).forEach(([key, value]) => {
      if (value) {
        updateFields[key] = value;
      }
    });

    const playerData = await Player.update(
      updateFields,

      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!playerData) {
      res.status(404).json({ message: "No player found with that id!" });
      return;
    }

    // res.redirect('/');
    res.status(200).json(playerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/player/:id", async (req, res) => {
  try {
    const playerData = await Player.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!playerData) {
      res.status(404).json({ message: "No player found with that id!" });
      return;
    }

    // res.redirect('/');
    res.status(200).json(playerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
