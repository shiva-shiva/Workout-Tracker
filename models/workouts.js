const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ],

});

const Workout = mongoose.model("workouts", WorkoutSchema);

module.exports = Workout;
