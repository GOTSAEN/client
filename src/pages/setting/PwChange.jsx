import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/utils/lib';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PwChange() {
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [reNewPasswordVisible, setReNewPasswordVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const toggleCurrentPasswordVisibility = () => {
    setCurrentPasswordVisible(!currentPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const toggleReNewPasswordVisibility = () => {
    setReNewPasswordVisible(!reNewPasswordVisible);
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <Tabs defaultValue="account" className="w-[450px]">
        <TabsContent value="account">
          <Card>
            <CardHeader className={cn('items-center')}>
              <CardTitle className={cn('mt-5 mb-5')}>- 비밀번호 변경 -</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-3">
                <Input
                  type={currentPasswordVisible ? 'text' : 'password'}
                  id="password"
                  placeholder="현재 비밀번호"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <Button onClick={toggleCurrentPasswordVisibility}>{currentPasswordVisible ? 'x' : 'x'}</Button>
              </div>
              <div className="flex items-center gap-3">
                <Input
                  type={newPasswordVisible ? 'text' : 'password'}
                  id="password"
                  placeholder="새 비밀번호"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <Button onClick={toggleNewPasswordVisibility}>{newPasswordVisible ? 'x' : 'x'}</Button>
              </div>
              <div className="flex items-center gap-3">
                <Input
                  type={reNewPasswordVisible ? 'text' : 'password'}
                  id="password"
                  placeholder="새 비밀번호 확인"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
                <Button onClick={toggleReNewPasswordVisibility}>{reNewPasswordVisible ? 'x' : 'x'}</Button>
              </div>
              <Button className={cn('w-full')}>
                <Link to="/">확인</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
