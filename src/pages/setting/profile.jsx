import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { getMember } from '@/api/members'
import LocationLabel from '@/components/setting/location-label'

export default function Profile() {
  const [inputCount, setInputCount] = useState(2)
  const [inputValues, setInputValues] = useState(
    Array(2).fill('')
  )
  const [inputErrors, setInputErrors] = useState(
    Array(2).fill(false)
  )

  const handleAddInput = () => {
    setInputCount(inputCount + 1)
    setInputValues([...inputValues, ''])
    setInputErrors([...inputErrors, false])
  }

  const handleDeleteInput = (index) => {
    const newInputValues = [...inputValues]
    newInputValues.splice(index, 1)
    setInputValues(newInputValues)
    setInputCount(inputCount - 1)
    const newInputErrors = [...inputErrors]
    newInputErrors.pop()
    setInputErrors(newInputErrors)
  }

  const {
    isLoading,
    data: memberData,
    error,
  } = useQuery(['members'], getMember, {
    staleTime: 1000 * 60 * 24,
  })

  const handleUpdateProfile = () => {
    const newInputErrors = inputValues.map(
      (value) => value.trim() === ''
    )
    setInputErrors(newInputErrors)

    if (newInputErrors.some((error) => error)) {
      return
    }
  }

  return (
    <>
      <div className='flex justify-center flex-col'>
        <div className='w-full max-w-screen-md '>
          <h2 className='text-lg font-bold'>내 정보</h2>
        </div>
        {isLoading && <p>로딩중</p>}
        {error && <p>에러</p>}
        {memberData && (
          <div className='flex justify-center flex-col mt-8 gap-5'>
            <div className='flex justify-center flex-col gap-2'>
              <h3>이메일</h3>
              <Input
                value={memberData.email}
                onChange={(e) => {}}
              />
            </div>
            <div className='flex justify-center flex-col gap-2'>
              <h3>상호명</h3>
              <Input
                value={memberData.businessName}
                onChange={(e) => {}}
              />
            </div>
            <div className='flex justify-center flex-col gap-2'>
              <h3>사업장 주소</h3>

              {Array.from({ length: inputCount }).map(
                (_, index) => (
                  <div key={index}>
                    <Input
                      value={memberData.businessAddress}
                      onChange={(e) => {
                        const newInputValues = [
                          ...inputValues,
                        ]
                        newInputValues[index] =
                          e.target.value
                        setInputValues(newInputValues)
                      }}
                    />
                    {inputErrors[index] && (
                      <p className='text-red-500'>
                        칸이 비어 있습니다.
                      </p>
                    )}
                  </div>
                )
              )}

              <div className='flex gap-2'>
                <Button
                  className='w-20'
                  onClick={handleAddInput}
                >
                  Add
                </Button>
                <Button
                  className='w-20'
                  onClick={() =>
                    handleDeleteInput(inputCount - 1)
                  }
                >
                  Del
                </Button>
              </div>

              <Button
                className='w-32'
                onClick={handleUpdateProfile}
              >
                <Link to='/'>Update Profile</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
