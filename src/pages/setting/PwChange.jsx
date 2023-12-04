import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/utils/lib';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { checkSameValue, validatePassword } from '@/service/common';
import { toast } from 'react-toastify';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkSameValue(form.newPassword, rePassword)) {
      toast.warning('패스워드가 일치하지 않습니다');
      return;
    }

    if (!validatePassword(form.newPassword)) {
      toast.warning('패스워드는 8자리 이상의 숫자와 문자 조합입니다');
      return;
    }

    //TODO 패스워드 수정해주는 API 등록해주기
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
              <Button onClick={toggleCurrentPasswordVisibility}>
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
              <Button onClick={toggleNewPasswordVisibility}>
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
              <Button onClick={toggleReNewPasswordVisibility}>
                {reNewPasswordVisible ? <EyeOff size={12} /> : <Eye size={12} />}
              </Button>
            </div>
            <Button className={cn('w-full')}>
              <Link to="/">확인</Link>
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
