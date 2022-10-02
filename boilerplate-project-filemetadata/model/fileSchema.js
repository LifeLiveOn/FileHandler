const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI3, { useNewUrlParser: true, useUnifiedTopology: true });


//define schema configuration
const { Schema } = mongoose;


const fileSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
      },
      name: {
        type: String,
        required: [true, "Uploaded file must have a name"],
      },
})

//create a model from this schema
const File = mongoose.model("File", fileSchema);

// export the File so we can call it from other file
module.exports = File;