import React from 'react'

function Loading({ className = '', txt = '' }) {
  return (
    <>
      <div className={`absolute${className}`}>
        <div className="spinner-container flex items-center gap-3">
          <div className="loading-spinner"></div>
          <p className='font-semibold text-xl'>{txt}</p>
        </div>
      </div>
    </>
  )
}

export default Loading
