'use client'

import { useState } from 'react'

const initialBoard = [
  ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
  ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
  ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
]

export function Chessboard() {
  const [board] = useState(initialBoard)

  return (
    <div className="inline-block border-2 border-gray-800">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((piece, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-12 h-12 flex items-center justify-center text-3xl
                ${(rowIndex + colIndex) % 2 === 0 ? 'bg-white' : 'bg-gray-800 text-white'}`}
            >
              {piece}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

