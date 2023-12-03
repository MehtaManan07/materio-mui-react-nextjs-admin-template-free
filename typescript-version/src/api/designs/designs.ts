import { DesignRoot } from 'src/@core/hooks/useFetchDesigns'

const uri = 'http://localhost:5001'

const getDesigns = async (): Promise<{ success: boolean; data: DesignRoot[] }> => {
  const response = await fetch(`${uri}/products`)
  const data = await response.json()

  return data
}
export default getDesigns
