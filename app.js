const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;

app.use(express.urlencoded());
      app.use(express.json());

      app.use(
        cors({
          origin: "*",
        })
      );
      app.all("/*", function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
      });
      
      const referentialsRoute = require("./routes/referentialsRouter");
      app.use("/referentials", referentialsRoute);


      app.listen(PORT || 8080, () =>
        console.log(`Server running on port:${PORT}`)
      );
