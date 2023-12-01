import { getAllYoutuberList, getYoutuberByCategory } from '@/api/youtuber';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

export default function useYoutuber(page, category) {
  const {
    isLoading,
    data: youtubers,
    error,
  } = useQuery(['youtuber', category, page], async () => {
    try {
      if (Boolean(category)) {
        const result = await getYoutuberByCategory(page, category);
        return result; // 데이터 반환
      } else {
        const result = await getAllYoutuberList(page);
        return result; // 데이터 반환
      }
    } catch (error) {
      throw new Error('Error fetching data');
    }
  });
  return { isLoading, youtubers, error };
}
