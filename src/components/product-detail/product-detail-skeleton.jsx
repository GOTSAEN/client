import React from 'react';
import { Skeleton } from '../ui/skeleton';

export default function ProductDetailSkeleton() {
  const label_style = 'font-semibold inline-block mr-4';
  const labelTitle = 'text-lg font-semibold py-4';
  return (
    <>
      <section className="lg:flex  md:flex py-5 px-2">
        <div className="lg:w-[50%] lg:mr-4 md:mr-4 md:w-[50%] sm:w-full aspect-1">
          <div className="w-full h-full overflow-hidden aspect-1">
            <Skeleton className="object-cover w-full h-full" />
          </div>
        </div>
        <article className="grow flex flex-col">
          <Skeleton className="w-48 h-7 my-4"></Skeleton>
          <aside>
            <label className={label_style}>모집기간</label>
            <Skeleton className="w-48 h-6 inline-block" />
          </aside>
          <aside>
            <label className={label_style}>모집인원</label>
            <Skeleton className="w-48 h-6 inline-block" />
          </aside>
          <aside>
            <label className={label_style}>업체명</label>
            <Skeleton className="w-48 h-6 inline-block" />
          </aside>
          <aside>
            <label className={label_style}>카테고리</label>
            <Skeleton className="w-48 h-6 inline-block" />
          </aside>
          <div className="py-4">
            <hr />
          </div>
          <div className="flex flex-col grow justify-between">
            <div>
              <label className={label_style}>✨ 제공내용</label>
              <Skeleton className="h-11" />
            </div>
          </div>
        </article>
      </section>
      <hr />
      <main>
        <div>
          <h2 className={labelTitle}>🎁 상품설명</h2>
          <Skeleton className="w-full h-28" />
        </div>
        <div>
          <h2 className={labelTitle}>✅ 주의사항</h2>
          <Skeleton className="w-[80%] h-24" />
        </div>
      </main>
    </>
  );
}
