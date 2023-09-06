import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/utils/lib";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRePasswordVisibility = () => {
    setRePasswordVisible(!rePasswordVisible);
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <Tabs defaultValue="account" className="w-[450px]">
        <TabsContent value="account">
          <Card>
            <CardHeader className={cn("items-center")}>
              <CardTitle className={cn("mt-5 mb-5")}>
                - 광고주 회원가입 -
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className={cn("space-y-1 mb-3")}>
                <Input type="text" placeholder="이름" />
              </div>
              <div className="space-y-1">
                <Input type="text" placeholder="아이디" />
              </div>
              <div className="flex items-center gap-3">
                <Input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={togglePasswordVisibility}>
                  {passwordVisible ? "x" : "x"}
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Input
                  type={rePasswordVisible ? "text" : "password"}
                  id="password"
                  placeholder="비밀번호 확인"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
                <Button onClick={toggleRePasswordVisibility}>
                  {rePasswordVisible ? "x" : "x"}
                </Button>
              </div>
              <div className="space-y-1">
                <Input type="text" placeholder="상호명" />
              </div>
              <div className="space-y-1">
                <Input type="text" placeholder="사업장 주소" />
              </div>
              <div className="space-y-1">
                <Input type="text" placeholder="아이디" />
              </div>
              <div className="space-y-1">
                <Input type="text" placeholder="아이디" />
              </div>
              <div className="space-y-1">
                <Input type="text" placeholder="아이디" />
              </div>
              <Button className={cn("w-full")}>
                <Link to="/LogIn">회원가입</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
