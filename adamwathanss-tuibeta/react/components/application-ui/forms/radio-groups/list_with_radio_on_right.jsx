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
const accounts = [
  { id: 'checking', name: 'Checking', description: 'CIBC ••••6610' },
  { id: 'savings', name: 'Savings', description: 'Bank of America ••••0149' },
  { id: 'mastercard', name: 'Mastercard', description: 'Capital One ••••7877' },
]

export default function Example() {
  return (
    <fieldset>
      <legend className="text-sm font-semibold leading-6 text-gray-900">Transfer Funds</legend>
      <p className="mt-1 text-sm leading-6 text-gray-600">Transfer your balance to your bank account.</p>
      <div className="mt-2.5 divide-y divide-gray-200">
        {accounts.map((account, accountIdx) => (
          <div key={accountIdx} className="relative flex items-start pb-4 pt-3.5">
            <div className="min-w-0 flex-1 text-sm leading-6">
              <label htmlFor={`account-${account.id}`} className="font-medium text-gray-900">
                {account.name}
              </label>
              <p id={`account-${account.id}-description`} className="text-gray-500">
                {account.description}
              </p>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                id={`account-${account.id}`}
                aria-describedby={`account-${account.id}-description`}
                name="account"
                type="radio"
                defaultChecked={account.id === 'checking'}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
