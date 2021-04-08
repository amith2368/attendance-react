const path = require("path");
const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({message: "Yala API readyy"});
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.post('/loginCheck', (req, res) => {
    console.log(req.body);
    if (req.body.user.username === "admin") {
        var redir = {redirect : "/"};
        return res.json(redir);
    } else {
        var redir = {redirect : "/login"};
        return res.json(redir);
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})