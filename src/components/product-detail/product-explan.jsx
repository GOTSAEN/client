import React from 'react'

export default function ProductExplain({ data }) {
  const { precaution, productDescription } = data
  const labelTitle = 'text-lg font-semibold py-4'
  return (
    <main className='py-20 flex flex-col gap-12'>
      <hr />
      <div>
        <h2 className={labelTitle}>🎁 상품설명</h2>
        {productDescription}
      </div>

      <div>
        <h2 className={labelTitle}>✅ 주의사항</h2>
        {precaution}
      </div>
    </main>
  )
}
