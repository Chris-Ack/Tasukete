const express = require("express");
const db = require("../knexfile");
const path = require("path");
const cors = require("cors");
const stripe = require("stripe")("pk_test_51IpqSaAvO61I5XZRj77hWRG7epQ8fnU632M5wF2tr305UFYMpjqFwiIxmnjOdPD1cyicOWb99iYdEUzyvE5g8Con00cg4nIZOX")

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/tasukete/", async (_, res) => {
  try {
    const data = await db.select().table("test");
    res.status(200);
    res.send(data);
  } catch (err) {
    console.log("Error", err);
  }
});

app.post("/api/tasukete/new", async (req, res) => {

  await db("tasukete").insert({
    id: inputId,
    message: inputMessage,
    summary: inputSummary,
  });

  return res.sendStatus(201);
});

app.post("/api/tasukete/delete", async (req, res) => {
  inputId = req.body.inputId;

  await db("tasukete").where({ id: inputId }).del();
  return res.sendStatus(204);
});

/////////////////////////STRIPE ENDPOINT///////////////////////////
app.post("/api/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});
///////////////////////////////////////////////////////////////////


app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
