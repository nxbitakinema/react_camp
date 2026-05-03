// GET อ่านข้อมูลทั้งหมด
exports.listCamping = (req, res) => {
  try {
    res.send("hello list");
  } catch (error) {
    res.status(500).json({ message: "server error - list" });
    console.log(error.message);
  }
};

// GET, READ มี id
exports.readCamping = (req, res) => {
  try {
    res.send("hello read");
  } catch (error) {
    res.status(500).json({ message: "server error - read" });
    console.log(error.message);
  }
};

// POST, CREATE
exports.createCamping = (req, res) => {
  try {
    res.send("hello create");
  } catch (error) {
    res.status(500).json({ message: "server error - create" });
    console.log(error.message);
  }
};

// UPDATE
exports.updateCamping = (req, res) => {
  try {
    res.send("hello update");
  } catch (error) {
    res.status(500).json({ message: "server error - update" });
    console.log(error.message);
  }
};

// DELETE
exports.deleteCamping = (req, res) => {
  try {
    res.send("hello delete");
  } catch (error) {
    res.status(500).json({ message: "server error - delete" });
    console.log(error.message);
  }
};
