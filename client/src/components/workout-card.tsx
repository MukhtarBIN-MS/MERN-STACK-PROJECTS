"use client";
import React, { useEffect, useState } from "react";

interface Workout {
  _id: string,
  title: string;
  reps: number;
  loads: number;
}
[];

// const workoutsData: Workout[] = [
//     {
//         title:'Pressups',
//         loads: 0,
//         reps: 17
//     },
//     {
//         title:'Situps',
//         loads: 0,
//         reps: 17
//     },
//     {
//         title:'Bench press',
//         loads: 0,
//         reps: 17
//     }
// ];

const WorkoutCard: React.FC = () => {
  const [workouts, setWorkOuts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/get-all-workouts");
        const data = await response.json();
        setWorkOuts(data);
        setLoading(false);
      } catch (err) {
        setError(`Error fetching data": ${err}`);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {workouts.map((workout) => (
        <div
          className="border shadow-lg shadow-black-50/50 p-[20px] m-5"
          key={workout._id}
        >
          <div className="">
            <h1 className="text-1xl font-bold text-green-600 mb-2">{`${workout.title}`}</h1>
            <p>
              <span className="text-sm font-bold">Load(kg): </span>
              {`${workout.loads}`}
            </p>
            <p>
              <span className="text-sm font-bold">Number of reps: </span>
              {`${workout.reps}`}
            </p>
            <p></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkoutCard;
