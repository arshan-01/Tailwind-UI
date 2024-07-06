import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

const options = [
  { name: 'Pink', color: 'text-pink-500' },
  { name: 'Purple', color: 'text-purple-500' },
  { name: 'Blue', color: 'text-blue-500' },
  { name: 'Green', color: 'text-green-500' },
  { name: 'Yellow', color: 'text-yellow-500' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(options[1])

  return (
    <fieldset>
      <legend className="block text-sm font-semibold leading-6 text-gray-900">Choose a label color</legend>
      <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-6 flex items-center space-x-3">
        {options.map((option) => (
          <Radio
            key={option.name}
            value={option}
            aria-label={option.name}
            className={({ focus, checked }) =>
              classNames(
                option.color,
                focus && checked ? 'ring ring-offset-1' : '',
                !focus && checked ? 'ring-2' : '',
                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-current'
              )
            }
          >
            <span
              aria-hidden="true"
              className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-current"
            />
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}
