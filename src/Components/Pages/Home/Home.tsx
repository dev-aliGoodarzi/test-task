"use client";

// Components
import ReviewerPool from "./ReviewerPool/ReviewerPool";
import Articles from "./Articles/Articles";
// Components

// Providers
import { DND_PROVIDER } from "@/Providers/DND/DND.provider";
// Providers

const Home = () => {
  return (
    <div className="w-full flex flex-row items-start justify-between">
      <DND_PROVIDER>
        <ReviewerPool />
        <Articles />
      </DND_PROVIDER>
    </div>
  );
};

export default Home;
