function usagePlanFilter(usagePlan) {
  return usagePlan.name.indexOf('-portal') !== -1;
}

/**
 * Fetches all usage plans, combining all pages into a single array.
 *
 * @param apiGateway
 *    an instance of `AWS.APIGateway` to use for API calls
 *
 * @param paramOverrides
 *    a parameter object passed in calls to `APIGateway.getUsagePlans`
 *
 * @returns
 *    a Promise resolving with an array of items returned from
 *    `APIGateway.getUsagePlans` calls
 */
async function getAllUsagePlans(apiGateway, paramOverrides = {}) {
  // The maximum allowed value of `limit` is 500 according to
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#getUsagePlans-property
  const defaultParams = {limit: 500, ...paramOverrides}

  console.log('Fetching first page of usage plans')
  let response = await apiGateway.getUsagePlans(defaultParams).promise()
  const usagePlans = response.items

  while (response.position) {
    console.log(`Fetching next page of usage plans, at position=[${response.position}]`)
    const nextParams = {...defaultParams, position: response.position}
    response = await apiGateway.getUsagePlans(nextParams).promise()
    usagePlans.push(...response.items)
  }

  return usagePlans.filter(usagePlanFilter)
}

module.exports = { getAllUsagePlans }
