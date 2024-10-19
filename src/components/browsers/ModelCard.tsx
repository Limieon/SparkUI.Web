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
    Transition
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

export enum ModelType {
    Checkpoint,
    Lora,
    Embedding
}
export interface ModelCardProps {
    name: string
    version: string
    thumbnail: string
    tags: string[]
    baseModel: string
    type: ModelType
}
const ModelCard: React.FC<ModelCardProps> = ({ name, version, thumbnail, tags, baseModel, type }) => {
    return (
        <UnstyledButton className="bg-zinc-800 rounded-lg flex border-none flex-col items-center w-[12%] hover:brightness-75 transition-[filter] aspect-[5_/_7] duration-300 ease-out p-2 space-y-1">
            <Image className="flex-grow rounded-lg" w={'auto'} h={'auto'} src={thumbnail} alt={name + ' thumbnail'} />
            <Tooltip label={version}>
                <span className="text-nowrap">{name}</span>
            </Tooltip>
        </UnstyledButton>
    )
}

export default ModelCard
