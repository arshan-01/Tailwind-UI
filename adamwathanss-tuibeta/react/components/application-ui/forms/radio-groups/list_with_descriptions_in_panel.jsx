/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

const settings = [
  { name: 'Public access', description: 'This project would be available to anyone who has the link' },
  { name: 'Private to Project Members', description: 'Only members of this project would be able to access' },
  { name: 'Private to you', description: 'You are the only one able to access this project' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selected, setSelected] = useState(settings[0])

  return (
    <fieldset aria-label="Privacy setting">
      <RadioGroup value={selected} onChange={setSelected} className="-space-y-px rounded-md bg-white">
        {settings.map((setting, settingIdx) => (
          <Radio
            key={setting.name}
            value={setting}
            aria-label={setting.name}
            aria-description={setting.description}
            className={({ checked }) =>
              classNames(
                settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                checked ? 'z-10 border-indigo-200 bg-indigo-50' : 'border-gray-200',
                'relative flex cursor-pointer border p-4 focus:outline-none'
              )
            }
          >
            {({ focus, checked }) => (
              <>
                <span
                  className={classNames(
                    checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                    focus ? 'ring-2 ring-offset-2 ring-indigo-600' : '',
                    'mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center'
                  )}
                  aria-hidden="true"
                >
                  <span className="rounded-full bg-white w-1.5 h-1.5" />
                </span>
                <span className="ml-3 flex flex-col">
                  <span
                    className={classNames(checked ? 'text-indigo-900' : 'text-gray-900', 'block text-sm font-medium')}
                  >
                    {setting.name}
                  </span>
                  <span className={classNames(checked ? 'text-indigo-700' : 'text-gray-500', 'block text-sm')}>
                    {setting.description}
                  </span>
                </span>
              </>
            )}
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}
