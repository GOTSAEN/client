import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/utils/lib';
import { auth_form } from '@/css';
import SignUpForm from './signup/signup-form';

export default function SignUp() {
  return (
    <section className="main flex justify-center items-center">
      <Tabs defaultValue="account" className={auth_form}>
        <TabsContent value="account">
          <Card>
            <CardHeader className={cn('items-center')}>
              <CardTitle className={cn('mt-5 mb-5')}>- 광고주 회원가입 -</CardTitle>
            </CardHeader>
            <SignUpForm />
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
