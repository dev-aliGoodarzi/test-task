/* eslint-disable @typescript-eslint/no-explicit-any */
// React
import React from "react";
// React

// Models
import { Author } from "@/Models/Work/Work.interfaces";
// Models

// Hooks
import { useCustomDND } from "@/Providers/DND/Hooks/dnd.hook";
// Hooks

type T_ReviewerProps = {
  author: Author;
};

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 font-medium">
      {initials}
    </div>
  );
}

const Reviewer: React.FunctionComponent<T_ReviewerProps> = ({ author }) => {
  const { drag } = useCustomDND({
    dragData: author,
  });

  return (
    <div
      className="flex items-center gap-3 p-3 border rounded bg-white shadow-sm cursor-grab"
      ref={(r) => drag.ref(r) as any}
      draggable
    >
      <Avatar name={author.family} />

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium text-sm truncate">{author.family}</div>
            <div className="text-xs text-gray-500 truncate">
              {author.family}
            </div>
          </div>
          {
            // progress
          }
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {author.affiliation.map((tag) => (
            <span
              key={tag.name}
              className="text-xs px-2 py-1 rounded-full border bg-gray-50"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviewer;
