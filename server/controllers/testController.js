// server/controllers/testController.js
import Test from "../models/testModel.js";

const getTest = async (req, res) => {
  res.status(200).json({
    message: "Fill This Form",
  });
};

const submitTest = async (req, res) => {
  try {
    const { firstname, lastname } = req.body;
    console.log(req.body);
    const newTestEntry = new Test({ firstname: firstname, lastname: lastname });
    const savedEntry = await newTestEntry.save();

    res.json({ message: "Data submitted successfully", data: savedEntry });
  } catch (error) {
    console.error("Error submitting data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { submitTest, getTest };
