import React, { useEffect } from 'react';
import ImageUploading from 'react-images-uploading';
import { Button } from '../ui/button';
import { useQueryClient } from 'react-query';
import { postImage } from '@/api/ads';
import { useNavigate } from 'react-router-dom';

export default function ImageUploader({ advertisementId, existImages }) {
  const [images, setImages] = React.useState(existImages);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const maxNumber = 4;
  const onChange = (imageList) => {
    setImages(imageList);
  };

  const sendImage = async () => {
    for (let i = 0; i < images.length; i++) {
      let image = images[i];
      if (image.data_url.includes('https://gotsaen')) continue;
      const uploadFile = image.file;
      const formData = new FormData();
      formData.append('file', uploadFile);
      postImage(advertisementId, formData);
    }

    queryClient.invalidateQueries(['partner', 'ads', 'waiting']).then(navigate('/setting/partner/ads/waiting'));
  };

  useEffect(() => {
    if (advertisementId > 0) {
      sendImage(existImages);
    }
    if (existImages?.length > 0) {
      const list = [];
      existImages.map((img) => list.push({ data_url: img }));
      setImages(list);
    }
  }, [advertisementId, existImages]);

  return (
    <>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={['jpg', 'png']}
      >
        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
          // write your building UI
          <div className="border rounded bg-background">
            <button
              style={isDragging ? { color: 'red' } : null}
              onClick={(e) => {
                e.preventDefault();
                onImageUpload();
              }}
              {...dragProps}
              className="cursor-pointer w-full"
            >
              {imageList.length > 0 && (
                <div className="flex gap-x-1 p-4">
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item flex relative">
                      <img loading="lazy" src={image.data_url} alt="" width="200" className="rounded" />
                      <div className="image-item__btn-wrapper absolute right-1 top-1">
                        <Button onClick={() => onImageRemove(index)}>x</Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {imageList.length === 0 && (
                <h2 className="min-h-[100px] w-full flex justify-center items-center text-center">
                  클릭 혹은 드래그로 사진을 올려주세요 (최소 1장)
                </h2>
              )}
              {imageList.length > 0 && (
                <div className="p-2">
                  <Button
                    variant="secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      onImageRemoveAll();
                    }}
                    className="w-full"
                  >
                    전체 삭제
                  </Button>
                </div>
              )}
            </button>
          </div>
        )}
      </ImageUploading>
    </>
  );
}
