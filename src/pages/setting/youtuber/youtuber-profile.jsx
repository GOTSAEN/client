import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { fetchCategories } from '@/api/categories';
import { toast } from 'react-toastify';
import { getYoutuber } from '@/api/youtuber';
import { updateYoutuberCategory } from '@/api/youtuber';
import { Card } from '@/components/ui/card';

const init = {
  category: '',
};
const label_style = 'text-sm ml-2 mb-1 text-muted-foreground';
export default function YoutuberProfile() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const [form, setForm] = useState(init);

  useEffect(() => {
    const storedCategory = localStorage.getItem('selectedCategory');
    if (storedCategory) {
      setSelectedCategory(storedCategory);
    }
  }, []);

  const {
    isLoading: youtuberLoading,
    data: youtuberData,
    error: youtuberError,
  } = useQuery(['youtuber'], getYoutuber, {
    refetchOnWindowFocus: false,
  });

  const {
    isLoading: categoryLoading,
    data: categories,
    error: categoryError,
  } = useQuery(['categories'], fetchCategories, {
    refetchOnWindowFocus: false,
  });

  const handleDataChange = (name, value) => {
    setSelectedCategory(value);
    localStorage.setItem('selectedCategory', value);
    setForm({ ...form, [name]: value });
  };

  const handleUpdateProfile = async () => {
    if (form.category !== '') {
      await updateYoutuberCategory({
        category: form.category,
      }).then(() => {
        toast.success('회원정보가 수정되었습니다.');
      });
    } else {
      toast.warning('카테고리를 선택하세요.');
    }
  };

  return (
    <>
      <div className="flex justify-center items-center mt-10">
        {youtuberLoading && <p>로딩중</p>}
        {youtuberError && <p>에러</p>}
        {youtuberData && (
          <Card className="p-4 w-[450px]">
            <div className="w-full max-w-screen-md mb-4 ">
              <h2 className="text-md font-bold text-center">내 정보</h2>
            </div>

            <section className="flex gap-4">
              <Avatar>
                <AvatarImage src={youtuberData.avatarUri} />
              </Avatar>

              <div className="grow flex flex-col gap-4">
                <div>
                  <h3 className={label_style}>이메일</h3>
                  <Input value={youtuberData.email} disabled />
                </div>
                <div>
                  <h3 className={label_style}>닉네임</h3>
                  <Input value={youtuberData.nickname} disabled />
                </div>

                <div>
                  <h3 className={label_style}>카테고리</h3>
                  <Select onValueChange={(val) => handleDataChange('category', val)} value={selectedCategory}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="-- 카테고리 --" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories &&
                        categories.map(({ categoryName }) => (
                          <SelectItem value={categoryName} key={categoryName}>
                            {categoryName}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                <div></div>
                <Button className="w-auto" onClick={handleUpdateProfile}>
                  프로필 수정
                </Button>
              </div>
            </section>
          </Card>
        )}
      </div>
    </>
  );
}
