import { InputHTMLAttributes } from 'react'

interface InputPops extends InputHTMLAttributes<HTMLInputElement> {
}

export function Input(props: InputPops) {
  return (
    <input
      {...props}
      id="game"
      className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
    />
  )
}