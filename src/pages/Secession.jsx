import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'
import { Cookies } from 'react-cookie'

export default function Secession() {
  const cookie = new Cookies()
  const email = cookie.get('Email')
  return (
    <section className='flex flex-col gap-8  leading-8'>
      <div className='w-full max-w-screen-md mb-4'>
        <h2 className='text-lg font-bold'>탈퇴 안내</h2>
      </div>
      <p className='text-muted-foreground font-light text-sm'>
        탈퇴 안내 회원탈퇴를 신청하기 전에 안내 사항을 꼭
        확인해주세요.
      </p>
      <div>
        <dl className='font-semibold'>
          ✅ 사용하고 계신 아이디({email})는 탈퇴할 경우
          재사용 및 복구가 불가능합니다.
        </dl>
        <dd className='text-sm'>
          <span className='text-red-500'>
            탈퇴한 아이디는 본인과 타인 모두 재사용 및
            복구가 불가
          </span>
          하오니 신중하게 선택하시기 바랍니다.{' '}
        </dd>
      </div>
      <div>
        <dl className='font-semibold'>
          ✅ 탈퇴 후 회원정보 및 개인형 서비스 이용기록은
          모두 삭제됩니다.
        </dl>
        <dd className='text-sm'>
          회원정보 및 메일, 블로그, 주소록 등 개인형 서비스
          이용기록은 모두 삭제되며, 삭제된 데이터는 복구되지
          않습니다. 삭제되는 내용을 확인하시고 필요한
          데이터는 미리 백업을 해주세요.
        </dd>
        <dd className='text-sm'>
          탈퇴 후에도 게시판형 서비스에 등록한 게시물은
          그대로 남아 있습니다. 삭제를 원하는 게시글이
          있다면 반드시 탈퇴 전 비공개 처리하거나 삭제하시기
          바랍니다. 탈퇴 후에는 회원정보가 삭제되어 본인
          여부를 확인할 수 있는 방법이 없어, 게시글을 임의로
          삭제해드릴 수 없습니다.
        </dd>
      </div>
      <dd className='flex items-center'>
        <Checkbox className='mr-2' />
        <span className='font-semibold'>
          안내 사항을 모두 확인하였으며, 이에 동의합니다
        </span>
      </dd>
      <Button className='w-fit px-8  mt-4 mx-auto'>
        회원 탈퇴
      </Button>
    </section>
  )
}
