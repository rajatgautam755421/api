const router = require("express").Router();
const { postContact } = require("../Controllers/Contact.Controller");

router.route("/contact").post(postContact);

module.exports = router;
