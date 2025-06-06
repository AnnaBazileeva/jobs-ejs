const logonShow = (req, res) => {
    res.render("logon");
};

const registerShow = (req, res) => {
    res.render("register");
};

const registerDo = (req, res) => {
};

const logoff = (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
};

module.exports = {
    logonShow,
    registerShow,
    registerDo,
    logoff,
};