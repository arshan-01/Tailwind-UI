import { Fragment, useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

const publishingOptions = [
  { title: 'Published', description: 'This job posting can be viewed by anyone who has the link.', current: true },
  { title: 'Draft', description: 'This job posting will no longer be publicly accessible.', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selected, setSelected] = useState(publishingOptions[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Label className="sr-only">Change published status</Label>
          <div className="relative">
            <div className="inline-flex divide-x divide-indigo-700 rounded-md shadow-sm">
              <div className="inline-flex items-center gap-x-1.5 rounded-l-md bg-indigo-600 px-3 py-2 text-white shadow-sm">
                <CheckIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                <p className="text-sm font-semibold">{selected.title}</p>
              </div>
              <ListboxButton className="inline-flex items-center rounded-l-none rounded-r-md bg-indigo-600 p-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-50">
                <span className="sr-only">Change published status</span>
                <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
              </ListboxButton>
            </div>

            <Transition show={open} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <ListboxOptions className="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {publishingOptions.map((option) => (
                  <ListboxOption
                    key={option.title}
                    className={({ focus }) =>
                      classNames(
                        focus ? 'bg-indigo-600 text-white' : '',
                        !focus ? 'text-gray-900' : '',
                        'cursor-default select-none p-4 text-sm'
                      )
                    }
                    value={option}
                  >
                    {({ selected, focus }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p className={selected ? 'font-semibold' : 'font-normal'}>{option.title}</p>
                          {selected ? (
                            <span className={focus ? 'text-white' : 'text-indigo-600'}>
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </div>
                        <p className={classNames(focus ? 'text-indigo-200' : 'text-gray-500', 'mt-2')}>
                          {option.description}
                        </p>
                      </div>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
