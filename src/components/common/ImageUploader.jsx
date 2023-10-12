import React from 'react'
import ReactDOM from 'react-dom'
import ImageUploading from 'react-images-uploading'
import { Button } from '../ui/button'

export default function ImageUploader() {
  const [images, setImages] = React.useState([])
  const maxNumber = 69
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList)
  }
  return (
    <div className='App'>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey='data_url'
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className='border rounded bg-background'>
            <button
              style={isDragging ? { color: 'red' } : null}
              onClick={(e) => {
                e.preventDefault()
                onImageUpload()
              }}
              {...dragProps}
              className='cursor-pointer w-full'
            >
              {imageList.length > 0 && (
                <div className='flex gap-x-1 p-4'>
                  {imageList.map((image, index) => (
                    <div
                      key={index}
                      className='image-item flex relative'
                    >
                      <img
                        src={image.data_url}
                        alt=''
                        width='200'
                        className='rounded'
                      />
                      <div className='image-item__btn-wrapper absolute right-1 top-1'>
                        <Button
                          onClick={() =>
                            onImageRemove(index)
                          }
                        >
                          x
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {imageList.length === 0 && (
                <h2 className='min-h-[100px] w-full flex justify-center items-center text-center'>
                  클릭 혹은 드래그로 사진을 올려주세요 (최소
                  1장)
                </h2>
              )}
              {imageList.length > 0 && (
                <div className='p-2'>
                  <Button
                    variant='secondary'
                    onClick={(e) => {
                      e.preventDefault()
                      onImageRemoveAll()
                    }}
                    className='w-full'
                  >
                    전체 삭제
                  </Button>
                </div>
              )}
            </button>
          </div>
        )}
      </ImageUploading>
    </div>
  )
}
