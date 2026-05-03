exports.createProfile = (req, res) => {
  try {
    res.json({ message: "hello create profile" });
    console.log({ message: "hello create profile" });
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
    console.log({ error });
  }
};
