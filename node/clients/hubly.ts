import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Hubly extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(
      'https://9c2f-2804-29b8-5097-4fdf-65a9-6a01-cfdf-b28.ngrok.io',
      context,
      options
    )
  }

  public async getAffiliateStore(
    slug?: string
  ): Promise<AffiliateStoreResponse | undefined> {
    try {
      if (!slug) {
        throw new Error('invalid slug')
      }

      const query = `
        query GetAffiliateStoreWithProducts($input: GetAffiliateStoreWithProductsInput!){
          getAffiliateStoreWithProducts(input: $input) {
            affiliateStore {
              avatar
              cover
              name
              description
              facebook
              tiktok
              youtube
              instagram
            }
            productIds
          }
        }
      `

      const variables = {
        input: {
          organizationId: '38df16d9-2c59-4a20-86ba-2bb4e2be6d1c',
          affiliateStoreSlug: slug,
        },
      }

      const payload = { query, variables }

      const response = await this.http.post<{
        data: {
          getAffiliateStoreWithProducts: AffiliateStoreResponse
        }
      }>('/graphql', payload, {
        headers: { 'Content-Type': 'application/json' },
      })

      return response?.data?.getAffiliateStoreWithProducts
    } catch (e) {
      return undefined
    }
  }
}
