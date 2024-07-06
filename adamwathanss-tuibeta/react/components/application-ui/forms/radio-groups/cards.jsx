import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const mailingLists = [
  { id: 1, title: 'Newsletter', description: 'Last message sent an hour ago', users: '621 users' },
  { id: 2, title: 'Existing Customers', description: 'Last message sent 2 weeks ago', users: '1200 users' },
  { id: 3, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])

  return (
    <fieldset>
      <legend className="text-sm font-semibold leading-6 text-gray-900">Select a mailing list</legend>
      <RadioGroup
        value={selectedMailingLists}
        onChange={setSelectedMailingLists}
        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4"
      >
        {mailingLists.map((mailingList) => (
          <Radio
            key={mailingList.id}
            value={mailingList}
            aria-label={mailingList.title}
            aria-description={`${mailingList.description} to ${mailingList.users}`}
            className={({ focus }) =>
              classNames(
                focus ? 'border-indigo-600 ring-2 ring-indigo-600' : '',
                !focus ? 'border-gray-300' : '',
                'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
              )
            }
          >
            {({ checked, focus }) => (
              <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <span className="block text-sm font-medium text-gray-900">{mailingList.title}</span>
                    <span className="mt-1 flex items-center text-sm text-gray-500">{mailingList.description}</span>
                    <span className="mt-6 text-sm font-medium text-gray-900">{mailingList.users}</span>
                  </span>
                </span>
                <CheckCircleIcon
                  className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600')}
                  aria-hidden="true"
                />
                <span
                  className={classNames(
                    checked ? 'border-indigo-600' : 'border-transparent',
                    focus ? 'border' : 'border-2',
                    'pointer-events-none absolute -inset-px rounded-lg'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}
