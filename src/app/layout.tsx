import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import './styles.css'

import { MantineProvider, createTheme, MantineColorsTuple, ColorSchemeScript } from '@mantine/core'
import React from 'react'

const palePurple: MantineColorsTuple = [
    '#f1f1ff',
    '#e0dff2',
    '#bfbdde',
    '#9b98ca',
    '#7d79b9',
    '#6a66af',
    '#605cac',
    '#504c97',
    '#464388',
    '#3b3979'
]

const theme = createTheme({
    colors: {
        palePurple
    },
    primaryColor: 'palePurple'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>SparkUI</title>
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider theme={theme}>{children}</MantineProvider>
            </body>
        </html>
    )
}
