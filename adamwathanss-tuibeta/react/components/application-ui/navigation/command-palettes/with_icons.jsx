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
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { DocumentPlusIcon, FolderIcon, FolderPlusIcon, HashtagIcon, TagIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const projects = [
  { id: 1, name: 'Workflow Inc. / Website Redesign', url: '#' },
  // More projects...
]
const recent = [projects[0]]
const quickActions = [
  { name: 'Add new file...', icon: DocumentPlusIcon, shortcut: 'N', url: '#' },
  { name: 'Add new folder...', icon: FolderPlusIcon, shortcut: 'F', url: '#' },
  { name: 'Add hashtag...', icon: HashtagIcon, shortcut: 'H', url: '#' },
  { name: 'Add label...', icon: TagIcon, shortcut: 'L', url: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(true)

  const filteredProjects =
    query === ''
      ? []
      : projects.filter((project) => {
          return project.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Transition show={open} afterLeave={() => setQuery('')} appear>
      <Dialog className="relative z-10" onClose={setOpen}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox onChange={(item) => (window.location = item.url)}>
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <ComboboxInput
                    autoFocus
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                    onBlur={() => setQuery('')}
                  />
                </div>

                {(query === '' || filteredProjects.length > 0) && (
                  <ComboboxOptions
                    static
                    as="ul"
                    className="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto"
                  >
                    <li className="p-2">
                      {query === '' && (
                        <h2 className="mb-2 mt-4 px-3 text-xs font-semibold text-gray-500">Recent searches</h2>
                      )}
                      <ul className="text-sm text-gray-700">
                        {(query === '' ? recent : filteredProjects).map((project) => (
                          <ComboboxOption
                            as="li"
                            key={project.id}
                            value={project}
                            className={({ focus }) =>
                              classNames(
                                'flex cursor-default select-none items-center rounded-md px-3 py-2',
                                focus && 'bg-indigo-600 text-white'
                              )
                            }
                          >
                            {({ focus }) => (
                              <>
                                <FolderIcon
                                  className={classNames('h-6 w-6 flex-none', focus ? 'text-white' : 'text-gray-400')}
                                  aria-hidden="true"
                                />
                                <span className="ml-3 flex-auto truncate">{project.name}</span>
                                {focus && <span className="ml-3 flex-none text-indigo-100">Jump to...</span>}
                              </>
                            )}
                          </ComboboxOption>
                        ))}
                      </ul>
                    </li>
                    {query === '' && (
                      <li className="p-2">
                        <h2 className="sr-only">Quick actions</h2>
                        <ul className="text-sm text-gray-700">
                          {quickActions.map((action) => (
                            <ComboboxOption
                              as="li"
                              key={action.shortcut}
                              value={action}
                              className={({ focus }) =>
                                classNames(
                                  'flex cursor-default select-none items-center rounded-md px-3 py-2',
                                  focus && 'bg-indigo-600 text-white'
                                )
                              }
                            >
                              {({ focus }) => (
                                <>
                                  <action.icon
                                    className={classNames('h-6 w-6 flex-none', focus ? 'text-white' : 'text-gray-400')}
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3 flex-auto truncate">{action.name}</span>
                                  <span
                                    className={classNames(
                                      'ml-3 flex-none text-xs font-semibold',
                                      focus ? 'text-indigo-100' : 'text-gray-400'
                                    )}
                                  >
                                    <kbd className="font-sans">⌘</kbd>
                                    <kbd className="font-sans">{action.shortcut}</kbd>
                                  </span>
                                </>
                              )}
                            </ComboboxOption>
                          ))}
                        </ul>
                      </li>
                    )}
                  </ComboboxOptions>
                )}

                {query !== '' && filteredProjects.length === 0 && (
                  <div className="px-6 py-14 text-center sm:px-14">
                    <FolderIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                    <p className="mt-4 text-sm text-gray-900">
                      We couldn't find any projects with that term. Please try again.
                    </p>
                  </div>
                )}
              </Combobox>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  )
}
