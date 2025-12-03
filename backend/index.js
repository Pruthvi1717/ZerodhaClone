require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoutes = require("./Routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

// ---------- CORS FIX (Render PROPER setup) ---------- 
app.use(
  cors({
    origin: [
      "https://stoxlyfront.onrender.com",
      "https://stoxlydashboard.onrender.com",
    ],
    credentials: true,
  })
);


app.use(cookieParser());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(bodyParser.json());

// ---------- ROUTES ----------
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend is Running Successfully!");
});

// ---------- HOLDINGS ----------
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

// ---------- POSITIONS ----------
app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// ---------- ORDERS ----------
app.post("/newOrder", async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.json({ msg: "Order saved" });
});

// ---------- CONNECT DB + START SERVER ----------
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("MongoDB Error:", err));
