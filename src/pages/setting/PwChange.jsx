import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/utils/lib';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { checkSameValue, validatePassword } from '@/service/common';
import { toast } from 'react-toastify';
import { editPassword } from '@/api/members';

export default function PwChange() {
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [reNewPasswordVisible, setReNewPasswordVisible] = useState(false);

  const [rePassword, setRePassword] = useState('');
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
  });

  const toggleCurrentPasswordVisibility = () => {
    setCurrentPasswordVisible(!currentPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const toggleReNewPasswordVisibility = () => {
    setReNewPasswordVisible(!reNewPasswordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checkSameValue(form.newPassword, rePassword)) {
      toast.warning('새로운 패스워드가 일치하지 않습니다');
      return;
    }

    if (!validatePassword(form.newPassword)) {
      toast.warning('패스워드는 8자리 이상의 숫자와 문자 조합입니다');
      return;
    }

    const res = await editPassword({ currentPassword: form.currentPassword, password: form.newPassword });
    console.log(res);
    if (res.status === 401) {
      toast.warning('현재 비밀번호가 일치하지 않습니다.');
      return;
    } else if (res.status === 400) {
      toast.warning('패스워드는 8자리 이상의 숫자와 문자 조합입니다');
    } else {
      toast.success('비밀번호가 변경되었습니다.');
    }
  };
  return (
    <div className="flex justify-center items-center mt-10">
      <form onSubmit={handleSubmit}>
        <Card className="w-[450px]">
          <CardHeader className={cn('items-center')}>
            <CardTitle className={cn('my-2 text-md')}>비밀번호 변경</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-3">
              <Input
                type={currentPasswordVisible ? 'text' : 'password'}
                id="password"
                placeholder="현재 비밀번호"
                value={form.currentPassword}
                name="currentPassword"
                onChange={handleChange}
              />
              <Button onClick={toggleCurrentPasswordVisibility} type="button">
                {currentPasswordVisible ? <EyeOff size={12} /> : <Eye size={12} />}
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <Input
                type={newPasswordVisible ? 'text' : 'password'}
                id="password"
                placeholder="새 비밀번호"
                value={form.newPassword}
                name="newPassword"
                onChange={handleChange}
              />
              <Button onClick={toggleNewPasswordVisibility} type="button">
                {newPasswordVisible ? <EyeOff size={12} /> : <Eye size={12} />}
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <Input
                type={reNewPasswordVisible ? 'text' : 'password'}
                id="password"
                placeholder="새 비밀번호 확인"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
              <Button onClick={toggleReNewPasswordVisibility} type="button">
                {reNewPasswordVisible ? <EyeOff size={12} /> : <Eye size={12} />}
              </Button>
            </div>
            <Button className={cn('w-full')} type="submit">
              변경
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
