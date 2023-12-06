import { TableCell, TableRow } from '@/components/ui/table';
import { link_text } from '@/css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Pencil, Play, Trash2 } from 'lucide-react';
import { imageSize } from '@/css/image';
import { useWaitingAds } from './hooks/use-waiting-ads';
import { Button } from '@/components/ui/button';

export default function WaitingAdsItem({ ads }) {
  const navigate = useNavigate();
  const { advertisementId, imageUrl, productName, category, numberOfApplicants, numberOfRecruit, endDate } = ads;

  const [deleteAd, updateAdToProgress] = useWaitingAds();

  const handleUpdate = (e, id) => {
    e.preventDefault();
    navigate(`/product/update/campaign/${id}`);
  };

  const handleAdToProgress = (e, id) => {
    e.preventDefault();
    updateAdToProgress(id);
  };

  return (
    <Link to={`campaign/${advertisementId}`} key={advertisementId}>
      <TableRow className="grid grid-cols-12  max-sm:grid-cols-6 px-1 hover:cursor-pointer" key={advertisementId}>
        <TableCell className="font-medium col-span-3">
          <img src={imageUrl ? imageUrl : '/no_img.jpg'} alt="thumbnail" className={imageSize} />
          <Link to={`/product/${advertisementId}`} className={`${link_text} line-clamp-2`}>
            {productName}
          </Link>
        </TableCell>

        <TableCell className="justify-center col-span-2 max-sm:hidden">{category}</TableCell>
        <TableCell className="justify-center col-span-2 max-sm:hidden">
          {numberOfApplicants} / {numberOfRecruit}
        </TableCell>

        <TableCell className="text-right right col-span-2 justify-center max-sm:hidden">{endDate}</TableCell>
        <TableCell className="col-span-3 justify-end gap-2">
          <Button variant="outline" onClick={(e) => handleAdToProgress(e, advertisementId)} size="sm">
            <Play size={14} />
          </Button>
          <Button onClick={(e) => handleUpdate(e, advertisementId)} size="sm">
            <Pencil size={14} />
          </Button>
          <Button
            variant="destructive"
            onClick={(e) => {
              e.preventDefault();
              deleteAd(advertisementId);
            }}
            size="sm"
          >
            <Trash2 size={14} />
          </Button>
        </TableCell>
      </TableRow>
    </Link>
  );
}
