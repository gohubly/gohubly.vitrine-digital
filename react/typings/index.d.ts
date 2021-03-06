declare module '@vtex/styleguide/lib/*'

type SocialMedia = 'facebook' | 'instagram' | 'tiktok' | 'youtube'

type AffiliateStore = {
  avatar: string
  cover: string
  name: string
  description: string
  facebook: string
  youtube: string
  instagram: string
  tiktok: string
  slug: string
}

type AffiliateStoreResponse = {
  affiliateStore: AffiliateStore
  productIds: number[]
}

type AffiliateStoreQueryResponse = {
  affiliateStore: AffiliateStoreResponse
}
