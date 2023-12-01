import mongoose from "mongoose";
import workOutModel from "../models/workouts.js";

export const getWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ message: "Not a valid id" });
    }
    const workout = await workOutModel.findById(id);
    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.status(200).json(workout);
  } catch (err) {
    console.log(err);
  }
};

export const getWorkouts = async (req, res) => {
  try {
    const workouts = await workOutModel.find({}).sort({ createdAt: -1 });
    if (!workouts) {
      res.status(401).json({ message: "workouts not found" });
    }
    res.status(200).json(workouts);
  } catch (err) {
    console.log(err);
  }
};
export const postWorkout = async (req, res) => {
  try {
    const workout = {
      title: req.body.title,
      reps: req.body.reps,
      loads: req.body.loads,
    };

    const newWorkOut = new workOutModel(workout);
    await newWorkOut.save();
    res.status(201).json(newWorkOut);
  } catch (err) {
    res.status(400).json(err);
  }
};
export const deleteWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ message: "Not a valid id" });
    }
    const workout = await workOutModel.findById(id);
    if (!workout) {
      res.status(401).json({ message: "Cannot find workout" });
    }

    await workOutModel.deleteOne(workout);
    res.status(200).json({ message: " workout has been deleted" });
  } catch (err) {
    console.log(err);
  }
};
export const updateWorkouts = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ message: "Not a valid id" });
    }
    const workout = await workOutModel.updateOne({$set:req.body});
    if (!workout) {
      res.status(401).json({ message: "Cannot find workout" });
    }

    await workOutModel.deleteOne(workout);
    res.status(200).json({ message: " workout has been updated" });
};
