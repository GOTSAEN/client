import React from 'react';
import { Skeleton } from '../ui/skeleton';

export default function ListSkeleton() {
  const arr = Array.from({ length: 7 }, (_, idx) => idx);
  return (
    <section className="grid max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-4 gap-4 py-2">
      {arr.map((el) => (
        <article className="border rounded-lg shadow-sm p-3 aspect-1 m-2" key={el}>
          <div className="flex flex-col gap-2">
            <Skeleton className="w-full h-full outline-1 outline-border hover:scale-105 rounded-sm aspect-1" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-6" />
              <div className="flex justify-between">
                <Skeleton className="w-16 h-4" />
                <Skeleton className="w-20 h-4" />
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
