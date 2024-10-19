'use client'

import React from 'react'
import Link from 'next/link'

import UserDropdown from '@/components/user/UserDropdown'

import { ActionIcon, Button, UnstyledButton } from '@mantine/core'

import {
    House as IconHome,
    Type as IconText,
    Image as IconImage,
    Workflow as IconNode,
    ListEnd as IconQueue,
    Globe as IconGlobe
} from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    const user = {
        name: 'Keqing',
        email: 'example@sparkui.io',
        avatar: 'https://avatarfiles.alphacoders.com/343/343253.jpg',
        role: 'admin'
    }

    const tabs = [
        { name: 'Home', href: '/app/home', icon: IconHome },
        { name: 'Text to Image', href: '/app/txt2img', icon: IconText },
        { name: 'Image to Image', href: '/app/img2img', icon: IconImage },
        { name: 'Node Editor', href: '/app/nodes', icon: IconNode },
        { name: 'Model Browser', href: '/app/browser', icon: IconGlobe },
        { name: 'Generation Queue', href: '/app/queue', icon: IconQueue }
    ]

    return (
        <div className="flex h-screen overflow-y-hidden">
            <div className="flex flex-1 flex-col">
                <header className="flex w-full items-end justify-between p-4 shadow">
                    <div className="group flex h-full flex-row items-center space-x-4">
                        <h1 className="text-4xl font-semibold">SparkUI ✨</h1>
                    </div>

                    <UserDropdown {...user} />
                </header>
                <div className="flex h-full flex-row">
                    <div className="m-2 flex flex-col space-y-2 shadow-md">
                        {tabs.map(t => (
                            <ActionIcon
                                key={t.name}
                                variant={t.href === pathname ? 'filled' : 'outline'}
                                component={Link}
                                href={t.href}
                                className="w-10 h-10">
                                <t.icon />
                            </ActionIcon>
                        ))}
                    </div>
                    <div
                        className="flex-1 w-full h-full rounded-tl-lg p-2 shadow-md"
                        style={{ height: 'calc(100vh - 88px)' }}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
