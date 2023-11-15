import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getMember, updateMember } from '@/api/members';
import { toast } from 'react-toastify';

export default function Profile() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputAddress, setInputAddress] = useState('');

  const {
    isLoading,
    data: memberData,
    error,
  } = useQuery(['members'], getMember, {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (memberData) {
      setInputEmail(memberData.email);
      setInputName(memberData.businessName);
      setInputAddress(memberData.businessAddress);
    }
  }, [memberData]);

  const handleUpdateProfile = async () => {
    if (inputEmail !== '' && inputName !== '' && inputAddress !== '') {
      await updateMember({
        email: inputEmail,
        businessName: inputName,
        businessAddress: inputAddress,
      }).then(() => {
        toast.success('회원정보가 수정되었습니다.');
      });
    }
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
              <Input
                value={inputEmail}
                onChange={(e) => {
                  setInputEmail(e.target.value);
                }}
                disabled
              />
            </div>
            <div className="flex justify-center flex-col gap-2">
              <h3>상호명</h3>
              <Input
                value={inputName}
                onChange={(e) => {
                  setInputName(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center flex-col gap-2">
              <h3>사업장 주소</h3>
              <Input
                value={inputAddress}
                onChange={(e) => {
                  setInputAddress(e.target.value);
                }}
              />
              {inputAddress === '' && <p className="text-red-500">칸이 비어 있습니다.</p>}
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
