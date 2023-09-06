import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/utils/lib";
import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div className={cn("flex justify-center items-center ")}>
      <Tabs defaultValue="account" className="w-[450px]">
        <TabsList className={cn("grid w-full grid-cols-2")}>
          <TabsTrigger value="account">유튜버</TabsTrigger>
          <TabsTrigger value="password">광고주</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card
            className={cn("flex justify-center items-center min-h-[250px] ")}
          >
            <CardHeader>
              <Button className={cn("w-full")}>
                <Link to="/">유튜브 아이디로 로그인 (full이 안먹어요)</Link>
              </Button>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card className={cn("min-h-[250px]")}>
            <CardHeader>
              <div className="space-y-1">
                <Input id="current" type="id" placeholder="아이디" />
              </div>
              <div className="space-y-1">
                <Input id="new" type="password" placeholder="비밀번호" />
              </div>
              <Button>
                <Link to="/">로그인</Link>
              </Button>
            </CardHeader>
            <CardFooter className="flex flex-col">
              <CardDescription>- or -</CardDescription>
              <CardDescription className="text-lg">
                <Link to="/">회원가입</Link>
              </CardDescription>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
