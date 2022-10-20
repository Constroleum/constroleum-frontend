import { useEffect, useState } from "react"

function useWindowHeight() {
  const isOnBrowser = typeof window !== "undefined"
  const [height, setHeight] = useState(isOnBrowser ? window.innerHeight : 760)

  useEffect(() => {
    if (!isOnBrowser) {
      return
    }
    const callback = () => setHeight(window.innerHeight)
    window.addEventListener("resize", callback)
    return () => window.removeEventListener("resize", callback)
  }, [])

  return height
}

export default useWindowHeight()
