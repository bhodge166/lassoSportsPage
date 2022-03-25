const router = require("express").Router();
const { Staff } = require("../../models");

// find all staff route
router.get("/", async (req, res) => {
  try {
    const staffData = await Staff.findAll();
    const staffs = staffData.map((x) => x.get({ plain: true }));
    res.render("staff", { staffs, loggedIn: req.session.loggedIn });
    // res.status(200).json(staffData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one staff by its `id` value
router.get("/:id", async (req, res) => {
  try {
    const staffData = await Staff.findByPk(req.params.id);

    if (!staffData) {
      res.status(404).json({ message: "No staff found with that id!" });
      return;
    }

    const staff = staffData.get({ plain: true });

    res.render("individual-staff", { staff, loggedIn: req.session.loggedIn });
    // res.status(200).json(staffData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const staffData = await Staff.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      nationality: req.body.nationality,
      occupation: req.body.occupation,
      former_clubs: req.body.former_clubs,
      file_name: req.body.file_name,
    });
    res.status(200).json(staffData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const staffData = await Staff.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        nationality: req.body.nationality,
        occupation: req.body.occupation,
        former_clubs: req.body.former_clubs,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!staffData) {
      res.status(404).json({ message: "No staff found with that id!" });
      return;
    }

    // res.redirect('/');
    res.status(200).json(staffData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const staffData = await Staff.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!staffData) {
      res.status(404).json({ message: "No staff found with that id!" });
      return;
    }

    // res.redirect('/');
    res.status(200).json(staffData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
