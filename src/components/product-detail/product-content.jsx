import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/utils/lib';
import { useQueryClient } from 'react-query';
import { getApplicationStatus } from '@/api/application';
import { useNavigate, useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import { useEffect } from 'react';
import { getBookmarkStatus, changeBookmarkStatus } from '@/api/bookmark';
import { useAuth } from '@/context/AuthContext';
import { useWaiting } from '@/hooks/use-waiting';
export default function ProductContent({ data }) {
  const cookie = new Cookies();
  const param = useParams();
  const navigate = useNavigate();
  const [bookmark, setBookmark] = useState(false);
  const [application, setApplication] = useState(false);
  const { productName, startDate, endDate, numberOfRecruit, category, offer, memberId, status } = data;
  const advertisementId = param.id;
  const label_style = 'font-semibold inline-block mr-4';
  const { waitingLoading, handleEnroll } = useWaiting();
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const toggleHeartStatus = () => {
    if (user?.email) {
      changeBookmarkStatus({
        advertisementId,
        memberId,
      }).then((res) => {
        setBookmark(res);
        queryClient.invalidateQueries(['bookmark']);
      });
    } else navigate('/login');
  };

  useEffect(() => {
    if (user?.email && user?.auth === 'youtuber') {
      getBookmarkStatus(advertisementId).then((res) => setBookmark(res));
      getApplicationStatus(advertisementId).then((res) => setApplication(res));
    }
  }, [user?.email]);
  return (
    <article className="grow flex flex-col">
      <div>
        <h2 className="flex text-xl font-semibold items-center my-4">
          {cookie.get('User') === 'youtuber' && (
            <Heart
              className="cursor-pointer mr-2"
              fill={bookmark ? '#ED2B2A' : 'none'}
              stroke={bookmark ? '#ED2B2A' : 'currentColor'}
              strokeWidth={2}
              onClick={toggleHeartStatus}
              size={30}
            />
          )}

          <span>{productName}</span>
        </h2>
        <aside>
          <label className={label_style}>모집기간</label>
          <span>
            {startDate} ~ {endDate}
          </span>
        </aside>
        <aside>
          <label className={label_style}>모집인원</label>
          <span>{numberOfRecruit} 명</span>
        </aside>
        <aside>
          <label className={label_style}>업체명</label>
          <span>김포페</span>
        </aside>
        <aside>
          <label className={label_style}>카테고리</label>
          <span>{category}</span>
        </aside>
      </div>
      <div className="py-4">
        <hr />
      </div>
      <div className="flex flex-col grow justify-between">
        <div>
          <label className={label_style}>✨ 제공내용</label>
          <aside className="py-4">{offer}</aside>
        </div>
        {cookie.get('User') === 'youtuber' && status === 'WAITING' && (
          <Button
            className={cn('w-full')}
            onClick={async () => {
              const res = await handleEnroll({ advertisementId: param.id, memberId });
              setApplication(res);
              queryClient.invalidateQueries(['youtuber', 'waiting', 'ads']);
            }}
            disabled={waitingLoading}
          >
            {application ? '취소신청' : '대기신청'}
          </Button>
        )}
      </div>
    </article>
  );
}
