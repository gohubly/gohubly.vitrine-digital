import React from 'react'
import { ProductSummaryListWithoutQuery } from 'vtex.product-summary'

interface ProductSummaryListProps {
  ProductSummary: React.FC
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  products?: any
}
const ProductSummaryList: React.FC<ProductSummaryListProps> = ({
  children,
  ProductSummary,
  products,
}) => {
  const listName = 'List of products'

  if (!products) return null

  return (
    <ProductSummaryListWithoutQuery
      products={products}
      listName={listName}
      ProductSummary={ProductSummary}
      preferredSKU="FIRST_AVAILABLE"
      actionOnProductClick={() => {}}
    >
      {children}
    </ProductSummaryListWithoutQuery>
  )
}

export default ProductSummaryList
