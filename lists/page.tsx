'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getSavedLists, SavedList, deleteList, updateList } from '../lib/api'
import { useAuth } from '../contexts/AuthContext'

export default function ListsPage() {
  const [lists, setLists] = useState<SavedList[]>([])
  const [selectedList, setSelectedList] = useState<SavedList | null>(null)
  const [editingList, setEditingList] = useState<SavedList | null>(null)
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    setLists(getSavedLists())
  }, [])

  const handleDelete = (id: string) => {
    deleteList(id)
    setLists(getSavedLists())
    setSelectedList(null)
  }

  const handleEdit = (list: SavedList) => {
    setEditingList({ ...list })
  }

  const handleSaveEdit = () => {
    if (editingList) {
      updateList(editingList)
      setLists(getSavedLists())
      setEditingList(null)
      setSelectedList(editingList)
    }
  }

  if (!user) {
    router.push('/')
    return null
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Saved Lists</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1">
          <h2 className="text-xl font-bold mb-2">Your Lists</h2>
          <ul>
            {lists.map((list) => (
              <li
                key={list.id}
                className="cursor-pointer hover:bg-gray-100 p-2"
                onClick={() => setSelectedList(list)}
              >
                {list.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2">
          {selectedList && (
            <div>
              <h2 className="text-xl font-bold mb-2">{selectedList.name}</h2>
              <p>Created: {new Date(selectedList.creationDate).toLocaleString()}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                {selectedList.codes.map((code) => (
                  <div key={code.code} className="border rounded-md p-4">
                    <img src={code.imageUrl} alt={code.message} className="w-full h-auto mb-2" />
                    <p className="font-bold">{code.code}</p>
                    <p>{code.message}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <button
                  onClick={() => handleEdit(selectedList)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(selectedList.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
          {editingList && (
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-2">Edit List</h2>
              <input
                type="text"
                value={editingList.name}
                onChange={(e) => setEditingList({ ...editingList, name: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-md mr-2"
              />
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

