import Image from "next/image";
import {
  WorkoutCard,
  WorkoutForm,
  GenerateTickets,
  VerifyTicketTickets,
} from "@/components";

export default function Home() {
  return (
    <main className="max-w-[1140px] m-auto">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between mt-[50px]">
        <div className="w-full md:w-3/4">
          <WorkoutCard />
        </div>
        <div className="w-full md:w-1/4">
          <WorkoutForm />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between mt-[50px]">
        <div className="w-full md:w-1/2">
          <GenerateTickets />
        </div>
        <div className="w-full md:w-1/2">
          <VerifyTicketTickets />
        </div>
      </div>
    </main>
  );
}
