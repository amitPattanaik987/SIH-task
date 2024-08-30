const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Pt1NCGwu7WfDqJU5XLyZyNP7kPYM4aADSWhpy5V93F5pxoQBGB8k6WqMnE7jw9EUzulZiDcxuUu2PtshWGi8Lyv00b0wuPOYx"
);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/send-email", async (req, res) => {
  const { name, email, phone, city, college, domain, lectureTime, skills } =
    req.body;

  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: "codecraze37@gmail.com",
      pass: "qdjdkllpyeagquwd",
    },
  });

  const receiver = {
    from: "codecraze37@gmail.com",
    to: "amitpattanaik987@gmail.com",
    subject: "Node js mail testing",
    text: "Hello this is a text mail",
  };

  transporter.sendMail(receiver, (error, emailresponse) => {
    if (error) throw error;
    console.log("Success!");
    res.end();
  });
});

app.get("/", (req, res) => {
  res.send("Server Is Running");
});

app.post("/payment", async (req, res) => {
  const price = req.body;
  console.log(price);

  const lineitems = [
    {
      price_data: {
        currency: "inr",
        product_data: {
          name: "Your Product Name", // Replace with your actual product name
        },
        unit_amount: Math.round(price.product * 100), // Stripe expects amount in cents/paise
      },
      quantity: 1, // You can adjust the quantity as needed
    },
  ];
  

  const session = await stripe.checkout.sessions.create({
    // payment_methods_types:["card"],
    line_items: lineitems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });



  res.json({id:session.id})
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
