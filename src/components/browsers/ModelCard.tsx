import { UnstyledButton, Image, Tooltip, Badge } from '@mantine/core'

import React from 'react'

export enum ModelType {
    Checkpoint,
    Lora,
    Embedding
}
export interface ModelCardProps {
    name: string
    version: string
    thumbnail: string
    tags: { name: string; color: number }[]
    type: ModelType
    badges: string[]
    installed: boolean
}
const ModelCard: React.FC<ModelCardProps> = ({ name, version, thumbnail, tags, type, badges, installed }) => {
    return (
        <UnstyledButton className="relative bg-zinc-800 rounded-lg flex border-none flex-col items-center w-[13.8%] hover:brightness-75 transition-[filter] aspect-[5_/_7] duration-300 ease-out space-y-1 overflow-hidden">
            <Image src={thumbnail} alt={`${name} thumbnail`} className="flex h-full flex-grow" fit="cover" />

            <div className="absolute flex space-x-1 top-1 left-1">
                {badges.map((e, i) => (
                    <Badge key={i}>{e}</Badge>
                ))}
            </div>
            {installed ? (
                <div className="absolute flex top-1 right-1">
                    <Badge className="right-0" color="teal">
                        Installed
                    </Badge>
                </div>
            ) : (
                ''
            )}

            <div className="absolute flex space-x-1 top-7 left-1"></div>

            <div className="bg-black/50 absolute p-1 flex gap-2 bottom-0 left-0 right-0 flex-col">
                <span className="flex">
                    <span className="flex-grow text-nowrap font-bold">{name}</span>
                    <span>{version}</span>
                </span>
                <div className="flex space-x-2 flex-nowrap">
                    {tags.slice(0, 2).map((e, i) => (
                        <Tooltip key={i} label={e.name}>
                            <Badge style={{ backgroundColor: `#${e.color.toString(16)}` }}>{e.name}</Badge>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </UnstyledButton>
    )
}

export default ModelCard
