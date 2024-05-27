
export const getPdf = async (data: ArrayBuffer) => {


  return {}
}

export const processPdf = async (base64: string) => {
  const res = await fetch(base64)
  const data = await res.arrayBuffer()
  const pdf = await getPdf(data)
  return pdf
}
