const router = require("express").Router();
const { Roster, Player, Staff} = require("../../models");

// find all roster route
router.get('/', async (req, res) => {
    
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
router.get('/:id', async (req, res) => {
    try {
      const rosterData = await Player.findByPk(req.params.id, {
        include: {
          model: Roster,
        },
      });
  
      if (!rosterData) {
        res.status(404).json({ message: 'No player found with that id!' });
        return;
      }
  
      res.status(200).json(rosterData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;