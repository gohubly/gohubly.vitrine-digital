import React from 'react'
import mock from './mocks'
import Header from './components/Header'
// import { useQuery } from 'react-apollo'
// import productByIdentifier from './graphql/productByIdentifier.gql'

type Props = {
  name: string
}

function AffiliateStore({ name }: Props) {
  // const { data } = useQuery(productByIdentifier, {
  //   variables: {
  //     ids: [10]
  //   }
  // })

  // console.log({ data });


  return (
    <>
      <div className='flex'>{name}</div>
      <Header affiliateStore={mock.affiliateStore} />
    </>
  )
}

export default AffiliateStore
