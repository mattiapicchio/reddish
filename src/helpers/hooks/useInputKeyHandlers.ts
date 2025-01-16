import { useCallback } from 'react'

type KeyHandler = (event: React.KeyboardEvent<HTMLInputElement>) => void

/**
 * A custom hook to handle Enter and Escape key events on text inputs.
 * @param onSave - Callback to invoke when the Enter key is pressed.
 * @param onCancel - Callback to invoke when the Escape key is pressed.
 * @returns A keydown event handler for text inputs.
 */

const useInputKeyHandlers = (onSave: () => void, onCancel?: () => void): KeyHandler => {
  return useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        onSave()
      }

      if (event.key === 'Escape') {
        event.preventDefault()
        onCancel?.()
      }
    },
    [onSave, onCancel],
  )
}

export default useInputKeyHandlers
