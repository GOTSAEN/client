import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { cn } from '@/utils/lib'
import { DatePicker } from '../common/DatePicker'
import { Label } from '../ui/label'
import TextEditor from '../common/TextEditor'
import { Button } from '@/components/ui/button'
import ImageUploader from '../common/ImageUploader'
import {
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query'
import { fetchCategories } from '@/api/categories'
import { fetchAdsById, newAds, updateAds } from '@/api/ads'
import { useNavigate, useParams } from 'react-router-dom'

const init = {
  productName: '',
  numberOfRecruit: 1,
  startDate: '',
  endDate: '',
  category: '',
  offer: '',
  productDescription: '',
  precaution: '',
}
export default function EnrollForm() {
  const navigate = useNavigate()
  const param = useParams()
  const queryClient = useQueryClient()
  const [form, setForm] = useState(init)
  const [enrollForm, setEnrollForm] = useState({
    mainTitle: '새 상품 등록',
    button: '작성 완료',
    handleSubmit: handleCreate,
  })

  const [imageData, setImageData] = useState(null)
  const {
    isLoading,
    data: categories,
    error,
  } = useQuery(
    ['categories'],
    async () =>
      await fetchCategories().then((res) => {
        return res
      }),
    { staleTime: 1000 * 60 * 24 }
  )

  const createAd = useMutation(() => newAds(form), {
    onSuccess: () => {
      queryClient.invalidateQueries([
        'partner',
        'ads',
        'waiting',
      ])
      navigate('/setting/partner/ads/waiting')
    },
  })
  const updateAd = useMutation(
    () => updateAds(param.campaignId, form),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([
          'partner',
          'ads',
          'waiting',
        ])
        navigate('/setting/partner/ads/waiting')
      },
    }
  )

  function handleCreate(e) {
    e.preventDefault()
    console.log(imageData)
    createAd.mutateAsync()
  }
  function handleUpdate(e) {
    e.preventDefault()
    updateAd.mutateAsync()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleDataChange = (name, value) => {
    setForm({ ...form, [name]: value })
  }

  const onChangeImage = (e) => {
    const img = e.target.files[0]
    imageData.append('file', img)
    console.log(imageData)
  }

  useEffect(() => {
    if (param.campaignId) {
      setEnrollForm({
        mainTitle: '정보 수정',
        button: '수정 완료',
        handleSubmit: handleUpdate,
      })
      fetchAdsById(param.campaignId).then((res) => {
        setForm(res)
      })
    } else
      setEnrollForm({
        mainTitle: '새 상품 등록',
        button: '작성 완료',
        handleSubmit: handleCreate,
      })
    return setForm(init)
  }, [param])

  return (
    <form onSubmit={enrollForm.handleSubmit}>
      <div
        className={cn('p-4 flex flex-col gap-2 border-0')}
      >
        <CardHeader
          className={cn(
            'px-1 flex-row items-end justify-between'
          )}
        >
          <CardTitle className={cn('text-lg')}>
            {enrollForm.mainTitle}
          </CardTitle>
          <Button>{enrollForm.button}</Button>
        </CardHeader>

        <Input
          placeholder='상품명'
          name='productName'
          value={form.productName}
          onChange={handleChange}
          required
        />
        <Input
          placeholder='모집인원'
          type='number'
          name='numberOfRecruit'
          onChange={handleChange}
          value={form.numberOfRecruit}
          required
        />
        <div className='flex gap-2'>
          <DatePicker
            placeholder='시작날짜'
            name='startDate'
            value={form.startDate}
            onChange={handleDataChange}
            required
          />
          <DatePicker
            placeholder='종료날짜'
            name='endDate'
            value={form.endDate}
            onChange={handleDataChange}
            required
          />
        </div>
        <Select
          onValueChange={(val) =>
            handleDataChange('category', val)
          }
          value={form.category}
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='-- 카테고리 --' />
          </SelectTrigger>
          <SelectContent>
            {categories &&
              categories.map(({ categoryName }) => (
                <SelectItem
                  value={categoryName}
                  key={categoryName}
                >
                  {categoryName}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <Input
          placeholder='제공 내용 50자 내외'
          type='text'
          name='offer'
          value={form.offer}
          onChange={handleChange}
        />
        <ImageUploader />
        <Input
          type='file'
          accept='image/jpg,impge/png,image/jpeg,image/gif'
          name='images'
          onChange={onChangeImage}
          multiple='multiple'
        />
        <div className='py-2'>
          <Label
            htmlFor='explain'
            className={cn('text-md my-2 block')}
          >
            🎁상품 설명
          </Label>
          <TextEditor
            name='productDescription'
            value={form.productDescription}
            onChange={handleDataChange}
          />
        </div>
        <div className='py-2'>
          <Label
            htmlFor='explain'
            className={cn('text-md my-2 block')}
          >
            ✅ 주의 사항
          </Label>
          <TextEditor
            name='precaution'
            value={form.precaution}
            onChange={handleDataChange}
          />
        </div>
      </div>
    </form>
  )
}
