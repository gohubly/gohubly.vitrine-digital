import React, { useEffect } from 'react'
import { useLazyQuery, useQuery } from 'react-apollo'
import { useRuntime } from 'vtex.render-runtime'
import Loading from 'react-loading'

import ProductSummaryList from './components/ProductSummaryList'
import Header from './components/Header'
// import productByIdentifier from './graphql/productByIdentifier.gql'
import getAffiliateStore from './graphql/get-affiliate-store.gql'
import productsByIdentifierQuery from './graphql/productsByIdentifier.gql'
import EmptyState from './components/EmptyState'

interface AffiliateStoreProps {
  ProductSummary: React.FC
}

const AffiliateStore: React.FC<AffiliateStoreProps> = ({
  ProductSummary,
  children,
}) => {
  const [
    fetchAffiliateStore,
    { data, loading, error },
  ] = useLazyQuery<AffiliateStoreQueryResponse>(getAffiliateStore)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { data: productByIdentifierData } = useQuery<any, any>(
    productsByIdentifierQuery,
    {
      variables: {
        field: 'id',
        values: data?.affiliateStore?.productIds,
        // values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
      skip: (data?.affiliateStore?.productIds?.length ?? 0) === 0,
    }
  )

  const { productsByIdentifier } = productByIdentifierData || {}

  const {
    route: { queryString },
  } = useRuntime()

  useEffect(() => {
    fetchAffiliateStore({
      variables: {
        slug: queryString?.slug,
      },
    })
  }, [fetchAffiliateStore, queryString])

  if (loading || (!loading && !data))
    return (
      <div className="flex justify-center pa6">
        <Loading type="spin" color="#EC0045" />
      </div>
    )

  if (error || !queryString?.slug || !data?.affiliateStore)
    return (
      <EmptyState
        title="Vitrine não encontrada"
        // eslint-disable-next-line prettier/prettier
        message={`Não conseguimos encontrar a vitrine ${
          queryString?.slug ?? ''
        }`}
      />
    )

  return (
    <>
      {data && (
        <div className="w-80 center flex flex-column">
          <Header
            affiliateStore={
              data?.affiliateStore?.affiliateStore as AffiliateStore
            }
          />

          {productsByIdentifier && (
            <div className="mt4">
              <ProductSummaryList
                ProductSummary={ProductSummary}
                products={productsByIdentifier}
              >
                {children}
              </ProductSummaryList>
            </div>
          )}

          {!productsByIdentifier && (
            <div className="mt4">
              <EmptyState
                title="Nenhum produto adicionado"
                message="Essa vitrine não possui produtos adicionados"
              />
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default AffiliateStore
