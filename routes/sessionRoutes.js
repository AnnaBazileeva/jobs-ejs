const express = require("express");
const passport = require("passport");
const router = express.Router();

const logonShow = (req, res) => {
    if (req.user) {
        return res.redirect("/");
    }
    res.render("logon");
};

router.route("/register").get(registerShow).post(registerDo);
router
    .route("/logon")
    .get(logonShow)
    .post(
        passport.authenticate("local", {
       successRedirect: "/",
        failureRedirect: "/sessions/logon",
        failureFlash: true,
        }),
        (req, res) => {
            res.send("Not yet implemented.");
        }
    );
router.route("/logoff").post(logoff);

module.exports = router;