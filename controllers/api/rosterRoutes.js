const router = require("express").Router();
const { Roster, Player, Staff } = require("../../models");

// find all roster route
router.get("/", async (req, res) => {
  try {
    const rosterData = await Player.findAll({
      include: {
        model: Roster,
      },
    });
    res.status(200).json(rosterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one player by its `id` value
router.get("/:id", async (req, res) => {
  try {
    const rosterData = await Player.findByPk(req.params.id, {
      include: {
        model: Roster,
      },
    });

    if (!rosterData) {
      res.status(404).json({ message: "No player found with that id!" });
      return;
    }

    res.status(200).json(rosterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const rosterData = await Roster.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    });
    res.status(200).json(rosterData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const playerData = await Player.update(
      {
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
        player_id: req.body.player_id,
      },
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

    res.status(200).json(playerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const palyerData = await Player.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!playerData) {
      res.status(404).json({ message: "No player found with that id!" });
      return;
    }

    res.status(200).json(playerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
