const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UserModel");

// Use ENV variable for security
const JWT_SECRET = process.env.JWT_SECRET || "SECRET123";

// ---------------- SIGNUP ----------------
router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;

  const existing = await UserModel.findOne({ email });
  if (existing) {
    return res.status(400).json({ msg: "Email already registered" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await new UserModel({ fullName, email, password: hashedPassword }).save();

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
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  // ⭐ CRITICAL COOKIE FIX FOR RENDER
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,      // Required for HTTPS
    sameSite: "none",  // Required for cross-site cookies
  });

  res.json({ msg: "Login successful" });
});

// ---------------- CHECK LOGIN ----------------
router.get("/me", (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.json({ loggedIn: false });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ loggedIn: true, user: decoded });
  } catch (err) {
    res.json({ loggedIn: false });
  }
});

// ---------------- LOGOUT ----------------
router.get("/logout", (req, res) => {
  res.clearCookie("token", {
    secure: true,
    sameSite: "none",
  });

  res.json({ msg: "Logged out" });
});

module.exports = router;
