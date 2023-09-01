import React from 'react'

export default function ProductExplain({ data }) {
  const { detail, caution, guide } = data
  const labelTitle = 'text-lg font-semibold py-4'
  return (
    <main className='py-20 flex flex-col gap-12'>
      <hr />
      <div>
        <h2 className={labelTitle}>🎁 상품설명</h2>
        {detail}
      </div>
      <div>
        <h2 className={labelTitle}>✍️ 안내</h2>
        {guide}
      </div>
      <div>
        <h2 className={labelTitle}>✅ 체크사항</h2>
        {caution}
      </div>
    </main>
  )
}
