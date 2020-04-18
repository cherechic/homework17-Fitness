const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            type: {
                type: String, 
                trim: true,
                required: "type is required."
            },
            name: {
                type: String, 
                trim: true,
                required: "name is required."
            },
            duration: {
                type: Number, 
                required: "duration is rquired."
            },
            weight: {
                type: Number,
            },
            distance: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            }
        }
    ]
},
{
    toJSON: {
      virtuals: true
    }
  }
);
WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);

});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;