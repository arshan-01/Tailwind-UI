import { useState } from 'react'
import { Description, Field, Label, Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Field as="div" className="flex items-center justify-between">
      <span className="flex flex-grow flex-col">
        <Label as="span" className="text-sm font-medium leading-6 text-gray-900" passive>
          Available to hire
        </Label>
        <Description as="span" className="text-sm text-gray-500">
          Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.
        </Description>
      </span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
    </Field>
  )
}
