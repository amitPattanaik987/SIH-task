const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/send-email", async (req, res) => {
  const { name, email, phone, city, college, domain, lectureTime, skills } =req.body;

  console.log(req.body);


  const transporter = nodemailer.createTransport({
    service:"gmail",
    secure:true,
    port:465,
    auth:{
        user:"codecraze37@gmail.com",
        pass:"qdjdkllpyeagquwd"
    }
  });

  const receiver ={
    from:"codecraze37@gmail.com",
    to:"amitpattanaik987@gmail.com",
    subject:"Node js mail testing",
    text:"Hello this is a text mail"
  }

  transporter.sendMail(receiver,(error,emailresponse)=>{
    if(error)
        throw error
    console.log("Success!");
    res.end();
  })
});

app.get("/", (req, res) => {
  res.send("Server Is Running");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
