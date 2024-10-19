import {
    Button,
    Switch,
    Checkbox,
    UnstyledButton,
    Input,
    Image,
    NumberInput,
    Slider,
    Progress,
    Textarea,
    Select,
    Tabs,
    Modal,
    Accordion,
    ActionIcon,
    TextInput,
    Tooltip,
    TagsInput,
    Drawer,
    Affix,
    Transition,
    Badge
} from '@mantine/core'

import React, { ReactNode, useState } from 'react'

import {
    Zap as IconZap,
    X as IconX,
    Trash2 as IconTrash,
    Timer as IconTimer,
    CircleGauge as IconSpeed,
    LoaderCircle as IconProgress,
    Shuffle as IconShuffle,
    Plus as IconAdd,
    Settings as IconSettings,
    Search as IconSearch,
    Leaf as IconLeaf,
    Text as IconText,
    Asterisk as IconAsterisk,
    Download as IconDownload,
    Folder as IconFolder,
    FolderOpen as IconFolderOpen,
    Replace as IconReplace,
    Filter as IconFilter,
    ArrowUp as IconArrowUp
} from 'lucide-react'

import { useDisclosure } from '@mantine/hooks'
import BlurHashImage from '@/components/BlurHashImage'

export enum ModelType {
    Checkpoint,
    Lora,
    Embedding
}
export interface ModelCardProps {
    name: string
    version: string
    thumbnail: string
    thumbnailHash: string
    tags: { name: string; color: number }[]
    baseModel: string
    type: ModelType
    badges: string[]
    installed: boolean
}
const ModelCard: React.FC<ModelCardProps> = ({
    name,
    version,
    thumbnail,
    thumbnailHash,
    tags,
    baseModel,
    type,
    badges,
    installed
}) => {
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
