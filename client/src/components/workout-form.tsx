import React from "react";

const workoutForm: React.FC = () => {
  return (
    <div className="flex flex-col items-start p-[20px]">
      <form>
        <h1 className="text-xl font-medium">Add new workout</h1>
        <div className="flex flex-col mt-3">
          <div className="flex flex-col mb-3">
            <label className="mb-1"> Excercise title: </label>
            <input
              className="w-full border p-2 border-black rounded"
              type="text"
              name="text"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1"> Load (in kg) </label>
            <input
              className="w-full border p-2 border-black rounded"
              type="text"
              name="text"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1"> Number of reps: </label>
            <input
              className="w-full border p-2 border-black rounded"
              type="text"
              name="text"
            />
          </div>
          <div className="">
            <button className="p-3 text-center bg-green-700 rounded-lg text-white">
              Add workout
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default workoutForm;
