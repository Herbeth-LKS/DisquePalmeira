import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { AppContext } from '@/contexts/app.context'
import cheerio from 'react-native-cheerio'

export default function useChannels() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const { setLoading } = useContext(AppContext)

  const extractIframeSrc = (htmlString: string) => {
    const match = htmlString.match(/<iframe[^>]+src="([^"]+)"/)
    return match ? match[1] : null
  }

  useEffect(() => {
    const fetchGridItems = async () => {
      try {
        setLoading(true)
        const url = 'https://embedcanaistv.com/'
        const response = await axios.get(url)
        const htmlContent = response.data

        const $ = cheerio.load(htmlContent)

        const gridItems: any = []
        $('.grid-item').each((index: any, element: any) => {
          const title = $(element).find('h3').text()
          const iframeValue = $(element).find('input').val()
          const imageSrc = $(element).find('img').attr('src')
          const category = 'Esportes'

          gridItems.push({
            title,
            iframeValue: extractIframeSrc(iframeValue),
            imageSrc,
            category,
          })
        })

        setData(gridItems)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchGridItems()
  }, [])

  return { data, error }
}
