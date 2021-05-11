import { useEffect } from 'react'
import WebFont from 'webfontloader'

/**
 * Load the web fonts from the google univers.
 * @param font One or more google fonts
 */
export const useWebFont = (font: string | string[]) => {
  useEffect(() => {
    const families = Array.isArray(font) ? font : [font]
    WebFont.load({ google: { families } })
  }, [font])
}
