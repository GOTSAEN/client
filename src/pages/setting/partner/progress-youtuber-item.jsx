import React from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useApplication } from '@/hooks/use-application';
export default function ProgressYoutuberItem({ data }) {
  const { applicationId, memberId, status, youtuberMemberId, youtubeMemberImage, youtubeMemberNickname, youtubeUrl } =
    data;
  const { updateStatus, isLoading, isSuccess } = useApplication();
  const handleChangeStatus = (applicationId, data) => {
    updateStatus({ applicationId, data, status: 'progress' });
  };
  return (
    <TableRow className="grid grid-cols-5" key={applicationId}>
      <TableCell className="font-medium col-span-2">
        <img src={youtubeMemberImage} alt="thumbnail" className="h-[40px] w-[40px] cover block rounded-full m-2" />
        {youtubeMemberNickname}
      </TableCell>

      <TableCell className="text-right right  justify-center">
        {youtubeUrl ? (
          <a href={youtubeUrl} target="blank" className="underline underline-offset-2 link">
            조회
          </a>
        ) : (
          <p>미등록</p>
        )}
      </TableCell>
      <TableCell className="text-center justify-end  mr-2 gap-2 col-span-2">
        {youtubeUrl && status === 'PROGRESS' && (
          <>
            <Button onClick={() => handleChangeStatus(applicationId, { status: 'FINISHED' })}>확인</Button>
            <Button
              variant="bright"
              className="bg-yellow-500"
              onClick={() => handleChangeStatus(applicationId, { status: 'REJECTION' })}
            >
              반려
            </Button>
          </>
        )}
        {youtubeUrl && status === 'FINISHED' && (
          <>
            <Button onClick={() => handleChangeStatus(applicationId, { status: 'PROGRESS' })}>승인취소</Button>
          </>
        )}
        {youtubeUrl && status === 'REJECTION' && (
          <>
            <Button onClick={() => handleChangeStatus(applicationId, { status: 'PROGRESS' })}>반려취소</Button>
          </>
        )}
      </TableCell>
    </TableRow>
  );
}
