import { fetchCategories } from '@/api/categories';
import { getAllYoutuberList } from '@/api/youtuber';
import SearchBar from '@/components/common/SearchBar';
import { Card } from '@/components/ui/card';
import { ListItem } from '@/components/ui/list-item';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import YoutuberList from '@/components/youtuber/youtuber-list';
import { useCategory } from '@/hooks/use-category';
import { Filter } from 'lucide-react';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

export default function Youtuber() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { categories } = useCategory();
  const {
    isLoading,
    data: youtubers,
    error,
  } = useQuery(['youtuber'], async () => await getAllYoutuberList(page).then((res) => res), {
    staleTime: 1000 * 60 * 30,
  });

  return (
    <>
      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Filter size={14} className="mr-1" />
            유튜버 카테고리
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid max-w-[600px] gap-3 p-4 lg:grid-cols-3 md:w-[500px] md:grid-cols-2 sm:w-[400px] sm:grid-cols-2">
              <ListItem key={0} title="전체"></ListItem>
              {categories?.map(({ categoryId, categoryName }) => (
                <ListItem key={categoryId} title={categoryName}></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>

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
            {error && <p>Error</p>}
            {isLoading && <p>로딩중..</p>}
            {youtubers?.length > 0 ? (
              youtubers.map((youtuber) => <YoutuberList youtuber={youtuber} />)
            ) : (
              <p className="min-h-[200px] flex justify-center items-center">회원가입 한 유튜버가 없어요😢</p>
            )}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
