const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UserModel");


router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;

  // check existing
  const existing = await UserModel.findOne({ email });
  if (existing) return res.status(400).json({ msg: "Email already registered" });

  const hashed = await bcrypt.hash(password, 10);

  const newUser = new UserModel({
    fullName,
    email,
    password: hashed,
  });

  await newUser.save();
  res.json({ msg: "Signup successful" });
});

// ---------------- LOGIN ----------------
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  if (!user) return res.status(400).json({ msg: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ msg: "Incorrect password" });

  const token = jwt.sign(
    { id: user._id, fullName: user.fullName },
    "SECRET123",
    { expiresIn: "1d" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  res.json({ msg: "Login successful" });
});

// ---------------- CHECK LOGIN (Dashboard) ----------------
router.get("/me", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.json({ loggedIn: false });

  try {
    const decoded = jwt.verify(token, "SECRET123");
    res.json({ loggedIn: true, user: decoded });
  } catch (err) {
    res.json({ loggedIn: false });
  }
});

// ---------------- LOGOUT ----------------
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ msg: "Logged out" });
});

module.exports = router;
