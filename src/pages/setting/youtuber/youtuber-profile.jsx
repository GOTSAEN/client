import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { fetchCategories } from '@/api/categories';
import { toast } from 'react-toastify';
import { getYoutuber } from '@/api/youtuber';

const init = {
  category: '',
};

export default function YoutuberProfile() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputAddress, setInputAddress] = useState('');

  const [form, setForm] = useState(init);

  const {
    isLoading: memberLoading,
    data: memberData,
    error: memberError,
  } = useQuery(['members'], getYoutuber, {
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
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    if (memberData) {
      setInputEmail(memberData.email);
      setInputName(memberData.businessName);
      setInputAddress(memberData.businessAddress);
    }
  }, [memberData]);

  const handleUpdateProfile = async () => {
    // if (
    //   inputEmail !== '' &&
    //   inputName !== '' &&
    //   inputAddress !== ''
    // ) {
    //   await updateMember({
    //     email: inputEmail,
    //     businessName: inputName,
    //     businessAddress: inputAddress,
    //   }).then(() => {
    //     toast.success('회원정보가 수정되었습니다.')
    //   })
    // }
  };

  return (
    <>
      <div className="flex justify-center flex-col">
        <div className="w-full max-w-screen-md ">
          <h2 className="text-lg font-bold">내 정보</h2>
        </div>
        {memberLoading && <p>로딩중</p>}
        {memberError && <p>에러</p>}
        {memberData && (
          <div className="flex justify-center flex-col mt-8 gap-5">
            <div className="flex justify-center flex-col gap-2">
              <h3>YoutuberMemberId</h3>
              <Input
                value={inputEmail}
                onChange={(e) => {
                  setInputEmail(e.target.value);
                }}
                disabled
              />
            </div>
            <div className="flex justify-center flex-col gap-2">
              <h3>Email</h3>
              <Input
                value={inputName}
                onChange={(e) => {
                  setInputName(e.target.value);
                }}
                disabled
              />
            </div>
            <div className="flex justify-center flex-col gap-2">
              <h3>Nickname</h3>
              <Input
                value={inputAddress}
                onChange={(e) => {
                  setInputAddress(e.target.value);
                }}
                disabled
              />
              {inputAddress === '' && <p className="text-red-500">칸이 비어 있습니다.</p>}
            </div>
            <div className="flex justify-center flex-col gap-2">
              <h3>AvatarUri</h3>
              <Input
                value={inputEmail}
                onChange={(e) => {
                  setInputEmail(e.target.value);
                }}
                disabled
              />
            </div>
            <div className="flex justify-center flex-col gap-2">
              <h3>ChannelId</h3>
              <Input
                value={inputEmail}
                onChange={(e) => {
                  setInputEmail(e.target.value);
                }}
                disabled
              />
            </div>
            <div className="flex justify-center flex-col gap-2">
              <h3>Category</h3>
              <Select onValueChange={(val) => handleDataChange('category', val)} value={form.category}>
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
              <Button className="w-32" onClick={handleUpdateProfile}>
                Update Profile
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
