import { DesignRoot } from 'src/@core/hooks/useFetchDesigns'

const uri = process.env.NEXT_PUBLIC_API_URL
console.log({uriiii: uri})

const getDesigns = async (): Promise<{ success: boolean; data: DesignRoot[] }> => {
  const response = await fetch(`${uri}/products`)
  const data = await response.json()

  return data
}
export default getDesigns
