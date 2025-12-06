"use client";

// Components
import Header from "./Header/Header";
import Articles from "./Articles/Articles";
import ReviewerPool from "./ReviewerPool/ReviewerPool";
// Components

// Providers
import { DND_PROVIDER } from "@/Providers/DND/DND.provider";
// Providers

const Home = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-4 p-4">
      <DND_PROVIDER>
        <Header />
        <ReviewerPool />
        <Articles />
        <Articles justAssigned />
      </DND_PROVIDER>
    </div>
  );
};

export default Home;
