import { signIn } from '@/api/auth';
import { Button } from '@/components/ui/button';
import { Card, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/AuthContext';
import useApiError from '@/hooks/use-api-error';
import { cn } from '@/utils/lib';
import { TabsContent } from '@radix-ui/react-tabs';
import React, { memo, useState } from 'react';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

const AdvertiserLogin = memo(() => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const { handleError } = useApiError();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { mutate: handleSignIn, isLoading } = useMutation(async () => await signIn(form, form.email), {
    onSuccess: (data) => {
      login(data);
      navigate('/');
    },
    onError: (err) => handleError(err),
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSignIn();
  };

  return (
    <TabsContent value="advertisement">
      <form onSubmit={handleSubmit}>
        <Card className={cn('flex flex-col justify-center items-center min-h-[300px] px-10 gap-3')}>
          <div className="space-y-1 w-full">
            <Input id="current" type="id" name="email" placeholder="아이디" onChange={handleChange} required />
          </div>
          <div className="space-y-1 w-full">
            <Input id="new" type="password" name="password" onChange={handleChange} placeholder="비밀번호" required />
          </div>
          <Button className="w-full" disabled={isLoading}>
            로그인
          </Button>

          <CardDescription className="mt-2">- or -</CardDescription>
          <CardDescription className="text-lg">
            <Link to="/signup">회원가입</Link>
          </CardDescription>
        </Card>
      </form>
    </TabsContent>
  );
});

export default AdvertiserLogin;
