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
            >
              <h2 className='pt-8 '>
                클릭 혹은 드래그로 사진을 올려주세요 (최소
                1장)
              </h2>
            </button>
            <Button
              variant='secondary'
              onClick={(e) => {
                e.preventDefault()
                onImageRemoveAll()
              }}
            >
              전체 삭제
            </Button>
            <div className='flex gap-1 p-4'>
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
                      onClick={() => onImageRemove(index)}
                    >
                      x
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  )
}
