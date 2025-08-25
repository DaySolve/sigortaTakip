import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '', once = true, threshold = 0.15, delayMs = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const trigger = () => setVisible(true)
            if (delayMs > 0) {
              const id = setTimeout(trigger, delayMs)
              if (!once) return () => clearTimeout(id)
            } else {
              trigger()
            }
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, threshold, delayMs])

  return (
    <div ref={ref} className={`${className} ${visible ? 'opacity-100 translate-y-0 transition-all duration-700 ease-out' : 'opacity-0 translate-y-4'}`}>
      {children}
    </div>
  )
}

