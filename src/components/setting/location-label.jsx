import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function LocationLabel() {
  const location = useLocation();
  const [labels, setLabels] = useState([]);
  const url = location.pathname;
  const getUrlList = (url) => {
    const labels = [];
    if (url.includes('/ads')) {
      labels.push('광고 관리');
      if (url.includes('bookmark')) {
        labels.push('찜한 광고');
      }
      if (url.includes('/progress')) {
        labels.push('진행 광고');
        if (url.includes('campaign')) labels.push('참여한 유튜버');
      } else if (url.includes('/waiting'))
        if (url.includes('partner')) labels.push('등록 광고');
        else labels.push('대기 광고');
      if (url.includes('campaign')) labels.push('신청한 유튜버');
      else if (url.includes('/past')) labels.push('종료 광고');
    }
    if (url.includes('/me')) {
      labels.push('내 정보');
      if (url.includes('profile')) labels.push('회원정보 변경');
      else if (url.includes('pwchange')) labels.push('패스워드 변경');
      else if (url.includes('profile')) labels.push('회원정보 변경');
    }

    return labels;
  };
  useEffect(() => {
    setLabels([]);
    setLabels(getUrlList(url));
  }, [location]);
  return (
    <div className="flex items-end pb-4">
      <h4 className="text-xs text-muted-foreground">
        {labels.length > 0 && (
          <>
            <span>{labels.slice(0, labels.length - 1).join(' > ')}</span>
            {' > '}
          </>
        )}
      </h4>
      <h1 className="text-xs font-semibold px-1">{labels[labels.length - 1]}</h1>
    </div>
  );
}
