'use client'

import { useParams } from 'next/navigation'

export default function UserProfile() {
    const { handle } = useParams()

    return <h1>User {handle}</h1>
}
