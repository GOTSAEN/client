import MarkdownViewer from '../common/MarkdownViewer';
import React from 'react';

export default function ProductExplain({ data }) {
  const { precaution, productDescription } = data;
  const labelTitle = 'text-lg font-semibold py-4';

  return (
    <main className="py-5 flex flex-col gap-12 px-2">
      <div>
        <h2 className={labelTitle}>🎁 상품설명</h2>
        {productDescription && <MarkdownViewer content={productDescription} />}
      </div>

      <div>
        <h2 className={labelTitle}>✅ 주의사항</h2>
        {precaution && <MarkdownViewer content={precaution} />}
      </div>
    </main>
  );
}
