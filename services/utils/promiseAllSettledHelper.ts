const promiseAllSettledHelper = async (promiseList: Array<Promise<any>>, ...initValue: Array<any>) => {
  const promiseResultList = await Promise.allSettled(promiseList)

  return promiseResultList.map((promiseResult, index) => {
    if (promiseResult.status === "fulfilled") {
      return promiseResult.value
    } else {
      return initValue[index] || []
    }
  })
}

export default promiseAllSettledHelper
