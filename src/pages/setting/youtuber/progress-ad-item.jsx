import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { imageSize } from '@/css/image';
import { link_text } from '@/css';
import { TableCell, TableRow } from '@/components/ui/table';
import { useApplication } from '@/hooks/use-application';
export default function ProgressAdItem({ data }) {
  const { applicationId, advertisementId, adName, adImage, adCategory, youtubeUrl, status, memberId } = data;
  const [url, setUrl] = useState(youtubeUrl);
  const [editableStatus, setEditableStatus] = useState(Boolean(!url));
  const { updateStatus, isLoading, isSuccess } = useApplication();

  const handleChangeStatus = async () => {
    await updateStatus({ applicationId, data: { youtubeUrl: url }, status: 'progress' });
    if (isSuccess) setEditableStatus(false);
  };
  return (
    <TableRow className="grid grid-cols-12 px-1" key={applicationId}>
      <TableCell className="font-medium">
        <img src={adImage} alt="thumbnail" className={imageSize} />
      </TableCell>
      <TableCell className="col-span-4">
        <Link to={`/product/${advertisementId}`} className={link_text}>
          {adName}
        </Link>
      </TableCell>

      <TableCell className="col-span-2 justify-center">{adCategory}</TableCell>
      <TableCell className="text-right right col-span-5 justify-center gap-1">
        <Input value={url} onChange={(e) => setUrl(e.target.value)} disabled={!editableStatus} />
        {editableStatus ? (
          <Button className="w-[50px] text-[11px] px-2" onClick={handleChangeStatus} disabled={isLoading}>
            확인
          </Button>
        ) : (
          <Button className="w-[50px] text-[11px] px-2" onClick={() => setEditableStatus((prev) => !prev)}>
            수정
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
}
