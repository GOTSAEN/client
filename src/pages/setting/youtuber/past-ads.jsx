import React, { useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '../../../components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { imageSize } from '@/css/image';
import { link_text, setting_btn } from '@/css';
import { useAdsList } from './hooks/use-ads-list';
export default function PastAds() {
  const [page, setPage] = useState(1);
  const { GetAdsList } = useAdsList();
  const { isLoading, data: ads, error } = GetAdsList(page, 'finished');
  return (
    <>
      <Card className="flex justify-center">
        <Table>
          <TableHeader>
            <TableRow className="grid grid-cols-5 items-center px-2">
              <TableHead className="col-span-2">상품</TableHead>
              <TableHead className="text-right justify-center ">카테고리</TableHead>
              <TableHead className="text-center justify-center">종료날짜</TableHead>
              <TableHead className="text-center justify-end mr-1">URL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ads?.length > 0 &&
              ads.map(({ applicationId, advertisementId, adName, adImage, adCategory, youtubeUrl, lastModifiedAt }) => (
                <TableRow className="grid grid-cols-5 px-1" key={applicationId}>
                  <TableCell className="col-span-2">
                    <img src={adImage} alt="thumbnail" className={imageSize} />
                    <Link to={`/product/${advertisementId}`} className={link_text}>
                      {adName}
                    </Link>
                  </TableCell>

                  <TableCell className="justify-center">{adCategory}</TableCell>
                  <TableCell className="justify-center">{lastModifiedAt.slice(0, 10)}</TableCell>
                  <TableCell className="justify-end">
                    <a target="blank" href={youtubeUrl}>
                      <Button className={setting_btn}>재생</Button>
                    </a>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
