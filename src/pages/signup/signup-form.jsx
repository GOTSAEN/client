import React, { memo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { AiOutlineEye } from 'react-icons/ai';
import { cn } from '@/utils/lib';
import { useMutation } from 'react-query';
import { newMember } from '@/api/members';
import { useNavigate } from 'react-router-dom';
import useApiError from '@/hooks/use-api-error';
import { saveUserType } from '@/service/login-auth';
import { checkSameValue, validatePassword } from '@/service/common';
import { toast } from 'react-toastify';

const SignUpForm = memo(() => {
  const navigate = useNavigate();
  const { handleError } = useApiError();
  const [form, setForm] = useState({
    email: '',
    password: '',
    businessName: '',
    businessAddress: '',
  });

  const [rePassword, setRePassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const toggleRePasswordVisibility = (e) => {
    e.preventDefault();
    setRePasswordVisible(!rePasswordVisible);
  };

  const { mutate: handleSignUp, isLoading } = useMutation(() => newMember(form), {
    throwOnError: true,
    onSuccess: () => {
      navigate('/welcome');
      saveUserType('advertisement');
    },
    onError: (error) => {
      handleError(error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkSameValue(form.password, rePassword)) {
      toast.warning('패스워드가 일치하지 않습니다');
      return;
    }

    if (!validatePassword(form.password)) {
      toast.warning('패스워드는 8자리 이상의 숫자와 문자 조합입니다');
      return;
    }

    handleSignUp();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex justify-center">
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Input type="email" name="email" placeholder="이메일" onChange={handleChange} required />
        </div>
        <div className="flex items-center gap-1">
          <Input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="비밀번호"
            onChange={handleChange}
            required
          />
          <Button onClick={togglePasswordVisibility}>
            <AiOutlineEye />
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <Input
            type={rePasswordVisible ? 'text' : 'password'}
            id="password"
            placeholder="비밀번호 확인"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            required
          />
          <Button onClick={toggleRePasswordVisibility} required>
            <AiOutlineEye />
          </Button>
        </div>
        <div className="space-y-1">
          <Input type="text" name="businessName" placeholder="상호명" onChange={handleChange} required />
        </div>
        <div className="space-y-1">
          <Input type="text" name="businessAddress" placeholder="사업장 주소" onChange={handleChange} required />
        </div>
        <Button className={cn('w-full')} disabled={isLoading}>
          회원가입
        </Button>
      </CardContent>
    </form>
  );
});

export default SignUpForm;
