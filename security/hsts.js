// const { appendFile } = require("fs");
const hsts =require("hsts");

app.use(
    hsts(
        {
            maxAge: 15552000 // 180 days in seconds
        }
    )
)