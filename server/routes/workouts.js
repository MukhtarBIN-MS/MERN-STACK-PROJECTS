import express from 'express';
import { deleteWorkout, getWorkout, getWorkouts, postWorkout, updateWorkouts } from '../controllers/workouts.js';

const router = express.Router();

router.get('/get-all-workouts', getWorkouts);

router.get('/:id', getWorkout);

router.post('/', postWorkout);

router.delete('/:id', deleteWorkout);

router.put('/:id', updateWorkouts);

export default router;