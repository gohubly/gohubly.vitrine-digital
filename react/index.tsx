import React, { useEffect } from 'react'
import { useLazyQuery } from 'react-apollo'
import { useRuntime } from 'vtex.render-runtime'

import Header from './components/Header'
// import productByIdentifier from './graphql/productByIdentifier.gql'
import getAffiliateStore from './graphql/get-affiliate-store.gql'

type Props = {
  name: string
}

function AffiliateStore({ name }: Props) {
  const [
    fetchAffiliateStore,
    { data, loading },
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

  if (loading) return <div>loading...</div>
  if (!data?.affiliateStore) return <div>erro</div>

  return (
    <>
      <div className="flex">{name}</div>
      {
        <Header
          affiliateStore={
            data?.affiliateStore?.affiliateStore as AffiliateStore
          }
        />
      }
    </>
  )
}

export default AffiliateStore
