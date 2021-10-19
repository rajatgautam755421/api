const ContactModel = require("../Models/Contact.Model");

const postContact = async (req, res, next) => {
  const contactUs = await ContactModel.create(req.body);
  try {
    res.status(201).json({
      status: "Success",
      data: contactUs,
    });
    console.log(contactUs);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422).json({
        status: "fail",
        msg: "ValidationFailed",
      });
      console.log(error.message);
    }
    res.status(500).json(error.message);
  }
};

module.exports = { postContact };
