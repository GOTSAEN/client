import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

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
          <p className='text-sm'>
            This is how others will see you on the site.
          </p>
        </div>
        <div className='flex justify-center flex-col mt-8 gap-5'>
          <div className='flex justify-center flex-col gap-2'>
            <h3>이름</h3>
            <Input></Input>
            <p className='text-sm'>
              This is your public display name. It can be
              your real name or a pseudonym. You can only
              change this once every 30 days.
            </p>
          </div>
          <div className='flex justify-center flex-col gap-2'>
            <h3>Email</h3>
            <Input></Input>
            <p className='text-sm'>
              You can manage verified email addresses in
              your email settings.
            </p>
          </div>
          <div className='flex justify-center flex-col gap-2'>
            <h3>상호명</h3>
            <Input></Input>
            <p className='text-sm'>
              This is your public display name. It can be
              your real name or a pseudonym. You can only
              change this once every 30 days.
            </p>
          </div>
          <div className='flex justify-center flex-col gap-2'>
            <h3>사업장 주소</h3>
            <p className='text-sm'>
              Add links to your workspace, blog, or social
              media profiles.
            </p>
            {Array.from({ length: inputCount }).map(
              (_, index) => (
                <div key={index}>
                  <Input
                    value={inputValues[index]}
                    onChange={(e) => {
                      const newInputValues = [
                        ...inputValues,
                      ]
                      newInputValues[index] = e.target.value
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
          </div>
          <Button
            className='w-32'
            onClick={handleUpdateProfile}
          >
            <Link to='/'>Update Profile</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
