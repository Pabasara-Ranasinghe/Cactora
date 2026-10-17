
import { useEffect, useState } from 'react'

function useCactusImage(scientificName, fallbackImage = '') {
  const [imageUrl, setImageUrl] = useState(fallbackImage)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function findImage() {
      setLoading(true)

      try {
        const searchTerm = `${scientificName} cactus`

        const params = new URLSearchParams({
          action: 'query',
          generator: 'search',
          gsrsearch: searchTerm,
          gsrnamespace: '6',
          gsrlimit: '5',
          prop: 'imageinfo',
          iiprop: 'url',
          iiurlwidth: '700',
          format: 'json',
          origin: '*',
        })

        const response = await fetch(
          `https://commons.wikimedia.org/w/api.php?${params}`
        )

        if (!response.ok) {
          throw new Error('Image search failed')
        }

        const data = await response.json()
        const pages = Object.values(data.query?.pages || {})

        const imagePage = pages.find((page) =>
          page.imageinfo?.[0]?.thumburl
        ) || pages.find((page) => page.imageinfo?.[0]?.url)

        const foundImage =
          imagePage?.imageinfo?.[0]?.thumburl ||
          imagePage?.imageinfo?.[0]?.url ||
          fallbackImage

        if (!cancelled) {
          setImageUrl(foundImage)
        }
      } catch (error) {
        if (!cancelled) {
          setImageUrl(fallbackImage)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    if (scientificName) {
      findImage()
    } else {
      setImageUrl(fallbackImage)
      setLoading(false)
    }

    return () => {
      cancelled = true
    }
  }, [scientificName, fallbackImage])

  return { imageUrl, loading }
}

export default useCactusImage
