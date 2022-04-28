import React, { useEffect } from 'react'
import { useLazyQuery } from 'react-apollo'
import { useRuntime } from 'vtex.render-runtime'
import Loading from 'react-loading'

import Header from './components/Header'
// import productByIdentifier from './graphql/productByIdentifier.gql'
import getAffiliateStore from './graphql/get-affiliate-store.gql'

function AffiliateStore() {
  const [
    fetchAffiliateStore,
    { data, loading, error },
  ] = useLazyQuery<AffiliateStoreQueryResponse>(getAffiliateStore)

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

  if (loading)
    return (
      <div className="flex justify-center pa6">
        <Loading type="spin" color="#EC0045" />
      </div>
    )

  if (error) return <div>erro</div>

  return (
    <>
      {data && (
        <Header
          affiliateStore={
            data?.affiliateStore?.affiliateStore as AffiliateStore
          }
        />
      )}
    </>
  )
}

export default AffiliateStore
