'use client'

import Link from 'next/link'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  if (!user) return null

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/search" className="text-xl font-bold">
          HTTP Response Codes
        </Link>
        <div className="space-x-4">
          <Link href="/search" className="hover:text-gray-300">
            Search
          </Link>
          <Link href="/lists" className="hover:text-gray-300">
            Lists
          </Link>
          <button onClick={handleLogout} className="hover:text-gray-300">
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

