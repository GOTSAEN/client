import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getMember, updateMember } from '@/api/members';
import { toast } from 'react-toastify';

export default function Profile() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    businessName: '',
    businessAddress: '',
  });
  const {
    isLoading,
    data: memberData,
    error,
  } = useQuery(['members'], getMember, {
    onSuccess: (res) => setUserInfo(res),
    refetchOnWindowFocus: false,
  });

  const { mutate: saveChanges, isLoading: changeLoading } = useMutation(async () => await updateMember(userInfo), {
    onSuccess: () => toast.success('회원정보가 수정되었습니다.'),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <>
      <div className="flex justify-center flex-col">
        <div className="w-full max-w-screen-md ">
          <h2 className="text-lg font-bold">내 정보</h2>
        </div>
        {isLoading && <p>로딩중</p>}
        {error && <p>에러</p>}
        {memberData && (
          <div className="flex justify-center flex-col mt-8 gap-5">
            <div className="flex justify-center flex-col gap-2">
              <h3>이메일</h3>
              <Input value={userInfo.email} name="email" onChange={handleChange} disabled />
            </div>
            <div className="flex justify-center flex-col gap-2">
              <h3>상호명</h3>
              <Input value={userInfo.businessName} name="businessName" onChange={handleChange} />
            </div>
            <div className="flex justify-center flex-col gap-2">
              <h3>사업장 주소</h3>
              <Input value={userInfo.businessAddress} name="businessAddress" onChange={handleChange} />
              {userInfo.businessAddress === '' && <p className="text-red-500">칸이 비어 있습니다.</p>}
            </div>
            <div>
              <Button className="w-32" onClick={saveChanges} disabled={changeLoading}>
                프로필 저장
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
