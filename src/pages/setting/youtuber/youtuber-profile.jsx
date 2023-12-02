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

const init = {
  category: '',
};

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
      <div className="flex justify-center flex-col">
        <div className="w-full max-w-screen-md ">
          <h2 className="text-lg font-bold">내 정보</h2>
        </div>
        {youtuberLoading && <p>로딩중</p>}
        {youtuberError && <p>에러</p>}
        {youtuberData && (
          <div className="flex justify-center flex-col mt-8 gap-5">
            <div className="flex justify-center flex-col gap-2">
              <h3>이메일</h3>
              <Input value={youtuberData.email} disabled />
            </div>
            <div className="flex justify-center flex-col gap-2">
              <h3>닉네임</h3>
              <Input value={youtuberData.nickname} disabled />
            </div>
            <div className="flex justify-center flex-col gap-2">
              <h3>프로필 사진</h3>
              <Avatar>
                <AvatarImage src={youtuberData.avatarUri} />
              </Avatar>
            </div>
            <div className="flex justify-center flex-col gap-2">
              <h3>카테고리</h3>
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
            <div>
              <Button className="w-auto" onClick={handleUpdateProfile}>
                프로필 수정
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
