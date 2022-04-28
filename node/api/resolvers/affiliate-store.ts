export default {
  affiliateStore: (_: any, data: any, context: Context) => {
    return context.clients.hubly.getAffiliateStore(data?.slug)
  },
}
