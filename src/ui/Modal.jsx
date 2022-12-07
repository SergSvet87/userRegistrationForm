import { useState } from 'react'

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className="overlay">
      <div className="modal">
        <h4 className="modal-title">Congratulations</h4>
        <svg onClick={() => setIsOpen(!isOpen)} height="200" viewBox="0 0 200 200" width="70">
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
      </div>
    </div>
  ) : (
    ''
  )
}
