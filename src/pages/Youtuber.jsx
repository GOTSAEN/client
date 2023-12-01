import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import YoutuberTable from '@/components/youtuber/youtuber-table';

import { useCategory } from '@/hooks/use-category';
import { Filter } from 'lucide-react';
import React, { useState } from 'react';

export default function Youtuber() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('');
  const { categories } = useCategory();

  return (
    <>
      <Select onValueChange={(val) => setCategory(val)}>
        <SelectTrigger className="w-[150px] border-none">
          <Filter size={14} />
          <SelectValue placeholder={category || '전체'} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="" key="전체">
            전체
          </SelectItem>

          {categories &&
            categories.map(({ categoryName }) => (
              <SelectItem value={categoryName} key={categoryName}>
                {categoryName}
              </SelectItem>
            ))}
        </SelectContent>
        <YoutuberTable page={page} category={category} />
      </Select>
    </>
  );
}
