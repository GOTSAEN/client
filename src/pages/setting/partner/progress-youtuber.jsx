import React, { useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useYoutuberList } from './hooks/use-youtuber-list';
import { useParams } from 'react-router-dom';
import { youtubers } from '@/api';
import EmptyRow from '@/components/common/EmptyRow';

export default function ProgressYoutuber() {
  const params = useParams();
  const [page, setPage] = useState(1);
  const { GetYoutuberList } = useYoutuberList();
  const { isLoading, data: youtubers, error } = GetYoutuberList(params.campaignId, page, 'progress');

  return (
    <>
      <Card className="flex justify-center">
        <Table>
          <TableHeader>
            <TableRow className="grid grid-cols-5 items-center">
              <TableHead className="col-span-2">유튜버</TableHead>

              <TableHead className="text-center justify-center ">링크</TableHead>
              <TableHead className="text-center justify-center col-span-2"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {youtubers.length > 0 ? (
              youtubers?.map(
                ({
                  applicationId,
                  memberId,
                  status,
                  youtuberMemberId,
                  youtubeMemberImage,
                  youtubeMemberNickname,
                  youtubeUrl,
                }) => (
                  <TableRow className="grid grid-cols-5">
                    <TableCell className="font-medium col-span-2">
                      <img
                        src={youtubeMemberImage}
                        alt="thumbnail"
                        className="h-[50px] w-[50px] cover block rounded-full m-2"
                      />
                      {youtubeMemberNickname}
                    </TableCell>

                    <TableCell className="text-right right  justify-center">
                      {youtubeUrl ? (
                        <Button
                          variant="link"
                          href={youtubeUrl}
                          target="blank"
                          className="underline underline-offset-2 link"
                        >
                          조회
                        </Button>
                      ) : (
                        <p>미등록</p>
                      )}
                    </TableCell>
                    <TableCell className="text-center justify-end  mr-2 gap-2 col-span-2">
                      {youtubeUrl && (
                        <>
                          <Button>확인</Button>
                          <Button variant="bright" className="bg-yellow-500">
                            반려
                          </Button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                )
              )
            ) : (
              <EmptyRow mainMessage="유튜버를 모집중 입니다😂" />
            )}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
