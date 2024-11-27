'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { getResponseCodes, ResponseCode, saveList } from '../lib/api'
import { useAuth } from '../contexts/AuthContext'

export default function SearchPage() {
  const [filter, setFilter] = useState('')
  const [results, setResults] = useState<ResponseCode[]>([])
  const [listName, setListName] = useState('')
  const { user } = useAuth()
  const router = useRouter()

  const handleSearch = () => {
    const filteredCodes = getResponseCodes(filter)
    setResults(filteredCodes)
  }

  const handleSave = () => {
    if (listName && results.length > 0) {
      saveList({
        name: listName,
        creationDate: new Date().toISOString(),
        codes: results,
      })
      setListName('')
      alert('List saved successfully!')
    } else {
      alert('Please enter a list name and perform a search before saving.')
    }
  }

  if (!user) {
    router.push('/')
    return null
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Response Codes</h1>
      <div className="mb-4">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Enter filter (e.g., 2xx, 30x)"
          className="px-3 py-2 border border-gray-300 rounded-md mr-2"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          placeholder="Enter list name"
          className="px-3 py-2 border border-gray-300 rounded-md mr-2"
        />
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Save List
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((code) => (
          <div key={code.code} className="border rounded-md p-4">
            <img src={code.imageUrl} alt={code.message} className="w-full h-auto mb-2" />
            <p className="font-bold">{code.code}</p>
            <p>{code.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

