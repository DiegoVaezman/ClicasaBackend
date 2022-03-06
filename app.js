const express = require("express");
const app = express();

app.use(express.urlencoded());
      app.use(express.json());

      app.listen(8080, () =>
        console.log(`Server running on port: 8080`)
      );
      app.all("/*", function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
      });

      const referentialsRoute = require("./routes/referentialsRouter");
      app.use("/referentials", referentialsRoute);
