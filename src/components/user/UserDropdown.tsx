'use client'

import React, { useState } from 'react'

import { Avatar, Button, UnstyledButton } from '@mantine/core'
import { useClickOutside } from '@mantine/hooks'
import { motion } from 'framer-motion'

import Link from 'next/link'

import {
    Settings as IconSettings,
    User as IconUser,
    LogOut as IconLogOut,
    Sun as IconSun,
    Moon as IconMoon,
    ChartArea as IconDashboard
} from 'lucide-react'

interface UserDropdownProps {
    open?: boolean
    name: string
    avatar: string
    role: string
}

const UserProfile: React.FC<UserDropdownProps> = ({ name, avatar, role }) => {
    const [isOpen, setOpen] = useState(false)
    const ref = useClickOutside(() => setOpen(false))

    const tabs = [
        { name: 'Profile', href: `/user/@${name}/profile`, icon: <IconUser /> },
        { name: 'Manage Account', href: '/user/manage', icon: <IconSettings /> }
    ]

    return (
        <div className="relative" ref={ref}>
            <UnstyledButton className="flex items-center space-x-4 rounded-full" onClick={() => setOpen(!isOpen)}>
                <span className="text-xl">{name}</span>
                <Avatar src={avatar} alt="Avatar" radius="xl" />
            </UnstyledButton>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: 0, y: -20 }} // Initial state before animation
                    animate={{ opacity: 1, x: 0, y: 0 }} // Final state after animation
                    transition={{
                        duration: 0.25, // Equivalent to 100ms duration
                        ease: [0.83, 0, 0.17, 1] // `quintInOut` equivalent cubic-bezier easing
                    }}
                    className="absolute right-0 mt-2 w-64 rounded-xl bg-gradient-to-br from-background p-4 shadow-2xl backdrop-blur-lg backdrop-filter z-20 border-2 border-zinc-500">
                    <div className="flex flex-col space-y-2" role="menu" aria-orientation="vertical">
                        {tabs.map(tab => (
                            <Button
                                key={tab.name}
                                variant="outline"
                                component={Link}
                                href={tab.href}
                                radius={'md'}
                                className="flex items-center justify-start h-12 text-sm">
                                {tab.icon}
                                <span className="ml-2">{tab.name}</span>
                            </Button>
                        ))}

                        <Button variant="outline" className="flex items-center h-12 text-sm">
                            {'dark' === 'dark' ? <IconMoon className="mr-2" /> : <IconSun className="mr-2" />}
                            <span>Toggle Theme</span>
                        </Button>

                        <hr />

                        <Button
                            variant="outline"
                            component="a"
                            href="/auth/logout"
                            fullWidth
                            className="flex items-center h-12 text-sm"
                            color="red">
                            <IconLogOut className="mr-2" />
                            <span>Logout</span>
                        </Button>

                        {role === 'admin' && (
                            <>
                                <hr />
                                <Button
                                    variant="outline"
                                    component="a"
                                    href="/admin/dashboard"
                                    fullWidth
                                    className="flex items-center h-12 text-sm">
                                    <IconDashboard className="mr-2" />
                                    <span>Admin Dashboard</span>
                                </Button>
                            </>
                        )}
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default UserProfile
