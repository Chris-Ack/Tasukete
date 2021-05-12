const express = require("express");
const stripe = require('stripe')('sk_test_51IpqSaAvO61I5XZRc9SwDd4Bj20QitY6tfQ0vjg5zriGKbE1yyGeGPbX9GDQykzsBmrF80d7fKButqqSOUiheamC00YCZuel90');
const db = require("../knexfile");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

app.use(express.static(path.resolve(__dirname, "..", "build")));

//Stripe API POST
const YOUR_DOMAIN = 'http://localhost:3000/checkout';

app.post('/api/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'jpy',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    

  });
  res.json({ id: session.id });
});


app.get("/api/tasukete/", async (_, res) => {
  try {
    const data = await db.select().table("test");
    res.status(200);
    res.send(data);
  } catch (err) {
    console.log("Error", err);
  }
});

// app.post("/api/tasukete/new", async (req, res) => {

//   await db("tasukete").insert({
//     id: inputId,
//     message: inputMessage,
//     summary: inputSummary,
//   });

//   return res.sendStatus(201);
// });

// app.post("/api/tasukete/delete", async (req, res) => {
//   inputId = req.body.inputId;

//   await db("tasukete").where({ id: inputId }).del();
//   return res.sendStatus(204);
// });



app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
