const mongoose = require("mongoose");

const weddingPlanSchema = new mongoose.Schema({
  weddingDate :{
    type : Date,
    required : true
  },
  celebrationDays :{
    type : Number,
    required : true
  },
  location :{
    type : String,
    required : true
  },
  noOfGuests :{
    type : Number,
    required : true
  },
  budget :{
    type : Number,
    required : true
  },
  entertainmentChoices :{
    type : [String],
    required : true
  },
  ceremonyType :{
    type : String,
    required : true
  },
  weddingTheme :{
    type : String,
    required : true
  },
  cateringType :{
    type : String,
    required : true
  },
  accommodationNeeded :{
    type : String,
    required : true
  },
  transportationForGuests:{
    type : String,
    required : true
  },
  fullWeddingPlan :{
    type : String,
    required : true
  }
},{
    timestamps: true,
});

const WeddingPlan = mongoose.model("WeddingPlan", weddingPlanSchema);
module.exports = WeddingPlan;