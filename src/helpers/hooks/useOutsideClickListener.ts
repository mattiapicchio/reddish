import { useEffect, RefObject, useCallback } from 'react'

function useOutsideClickListener(
  ref: RefObject<HTMLElement>,
  isActive: boolean,
  onToggle: () => void,
) {
  const handleOutsideClick = useCallback(
    (event: MouseEvent): void => {
      const target = (event.target as Node) || {}

      if (ref.current && !ref.current.contains(target)) {
        onToggle()
        window.removeEventListener('click', handleOutsideClick, {
          capture: true,
        })
      }
    },
    [onToggle, ref],
  )

  useEffect(() => {
    if (isActive) {
      window.addEventListener('click', handleOutsideClick, { capture: true })
    } else {
      window.removeEventListener('click', handleOutsideClick, {
        capture: true,
      })
    }

    return () =>
      window.removeEventListener('click', handleOutsideClick, {
        capture: true,
      })
  }, [isActive, handleOutsideClick])
}

export default useOutsideClickListener
