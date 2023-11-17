import { getAllYoutuberList, getYoutuberByCategory } from '@/api/youtuber';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import YoutuberList from '@/components/youtuber/youtuber-list';
import { useCategory } from '@/hooks/use-category';
import { Filter } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export default function Youtuber() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('');
  const { categories } = useCategory();
  const [youtubers, setYoutubers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('에러');
  useEffect(() => {
    if (category) {
      getYoutuberByCategory(page, category).then((res) => {
        if (res.length === 0) setErrorMessage('해당 카테고리의 유튜버가 없어요😢');
        setYoutubers(res);
      });
    } else {
      getAllYoutuberList(page).then((res) => {
        if (res.length === 0) setErrorMessage('회원가입한 유튜버가 없어요😢');
        setYoutubers(res);
      });
    }
  }, [page, category]);

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
      </Select>

      <Card className="mt-2">
        <Table>
          <TableHeader>
            <TableRow className="grid grid-cols-12 items-center">
              <TableHead className="col-span-4 ml-2">유튜버</TableHead>
              <TableHead className="col-span-4 justify-center ">관심 카테고리</TableHead>
              <TableHead className="col-span-4 justify-end mr-4">메일전송</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* {error && <p>Error</p>}
            {isLoading && <p>로딩중..</p>} */}
            {youtubers?.length > 0 ? (
              youtubers.map((youtuber) => <YoutuberList youtuber={youtuber} key={youtuber.youtuberMemberId} />)
            ) : (
              <p className="min-h-[200px] flex justify-center items-center">{errorMessage}</p>
            )}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
