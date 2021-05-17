import { useEffect } from 'react'
import WebFont from 'webfontloader'

/**
 * Load the web fonts from the google univers.
 * @param font A google fonts
 */
export const useWebFont = (font: string) => {
  useEffect(() => {
    WebFont.load({ google: { families: [font] } })
  }, [font])
}
