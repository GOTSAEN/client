import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/utils/lib';
import { useMutation } from 'react-query';
import { enrollWaiting, getApplicationStatus } from '@/api/application';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Cookies } from 'react-cookie';
import { useEffect } from 'react';
import { getBookmarkStatus, changeBookmarkStatus } from '@/api/bookmark';
import { useAuth } from '@/context/AuthContext';
export default function ProductContent({ data }) {
  const cookie = new Cookies();
  const param = useParams();
  const navigate = useNavigate();
  const [bookmark, setBookmark] = useState(false);
  const [application, setApplication] = useState(false);
  const { productName, startDate, endDate, numberOfRecruit, category, offer, memberId } = data;
  const advertisementId = param.id;
  const label_style = 'font-semibold inline-block mr-4';

  const { mutateAsync, isLoading } = useMutation(
    async () => await enrollWaiting({ advertisementId: param.id, memberId: memberId }),
    {
      onSuccess: (res) => {
        if (res) toast.success('신청완료 되었습니다👍🏻');
        else toast.info('취소완료 되었습니다');
        setApplication(res);
      },
      onError: (e) => {
        console.log(e);
      },
    }
  );
  const handleEnroll = () => {
    mutateAsync();
  };

  const { user } = useAuth();

  const toggleHeartStatus = () => {
    if (user?.email) {
      changeBookmarkStatus({
        advertisementId,
        memberId,
      }).then(setBookmark);
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
        {cookie.get('User') === 'youtuber' && (
          <Button className={cn('w-full')} onClick={handleEnroll} disabled={isLoading}>
            {application ? '취소신청' : '대기신청'}
          </Button>
        )}
      </div>
    </article>
  );
}
