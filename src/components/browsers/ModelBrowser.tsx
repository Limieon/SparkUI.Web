'use client'

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
    Chip,
    Badge
} from '@mantine/core'

import React, { ReactNode, useEffect, useState } from 'react'

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
    ArrowUp as IconArrowUp,
    Check as IconCheck
} from 'lucide-react'
import { useDisclosure } from '@mantine/hooks'
import ModelCard, { ModelCardProps, ModelType } from '@/components/browsers/ModelCard'

interface FilterGroupProps {
    heading: string
    children: ReactNode
}
const FilterGroup: React.FC<FilterGroupProps> = ({ heading, children }) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center space-x-2">
                <span className="font-bold">{heading}</span>
                <hr className="flex-grow border-zinc-500" />
            </div>

            <div className="flex space-x-2 space-y-2">{children}</div>
        </div>
    )
}

interface ModelBrowserProps {}
const ModelBrowser: React.FC<ModelBrowserProps> = ({}) => {
    const [filtersOpen, { open: openFilters, close: closeFilters }] = useDisclosure(false)

    const [modelTypes, setModelTypes] = useState<string[]>([])
    const [baseModels, setBaseModels] = useState<string[]>([])
    const [tags, setTags] = useState<string[]>([])

    function onChangeBaseModel(e: string) {
        if (baseModels.includes(e)) setBaseModels(baseModels.filter(i => i !== e))
        else setBaseModels([...baseModels, e])
    }
    function onChangeModelType(e: string) {
        if (modelTypes.includes(e)) setModelTypes(modelTypes.filter(i => i !== e))
        else setModelTypes([...baseModels, e])
    }

    function onApplyFilters() {
        console.log({ modelTypes, baseModels, tags })
        closeFilters()
    }

    function onClearFilters() {
        setModelTypes([])
        setBaseModels([])
        setTags([])
    }

    const model: ModelCardProps = {
        name: 'StableDiffusion Checkpoint',
        version: 'V1.5',
        thumbnail: 'https://picsum.photos/512/1024',
        thumbnailHash: 'LcKmkjV[.S%L?^S1%MbuXnS0%0RP',
        tags: [
            { name: 'Tag 1', color: 0xa29bfe },
            { name: 'Tag 2', color: 0xe84393 }
        ],
        baseModel: 'SD1.5',
        type: ModelType.Checkpoint,
        badges: ['LORA', 'SD1.5'],
        installed: true
    }

    const availableModelTypes = ['VAE', 'Checkpoint', 'Embedding', 'ControlNet']
    const availableBaseModels = [
        'SD 1.5',
        'SD 2.1',
        'SD 3.0',
        'SDXL',
        'SDXL-Turbo',
        'SDXL-Lightning',
        'SD-Cascade',
        'Flux.1 S',
        'Flux.1 D',
        'Pony',
        'Aura Flow'
    ].sort()

    const models = []
    for (let i = 0; i < 100; ++i) {
        models.push(model)
    }

    return (
        <>
            <div className="flex flex-col h-full">
                <div className="flex items-center space-x-2">
                    <Input className="flex-grow" radius="xl" placeholder="Search..." />
                    <Button onClick={openFilters} radius="xl" variant="outline" leftSection={<IconFilter />}>
                        Filters
                    </Button>
                </div>
                <div className="flex flex-grow flex-wrap overflow-y-auto justify-center items-center gap-2 px-2 mt-2">
                    {models.map((e, i) => (
                        <ModelCard key={i} {...e} />
                    ))}
                </div>
            </div>

            <Drawer.Root position="right" opened={filtersOpen} onClose={closeFilters}>
                <Drawer.Overlay />
                <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title>Filters</Drawer.Title>
                        <Drawer.CloseButton />
                    </Drawer.Header>
                    <Drawer.Body className="h-[calc(100%_-60px)] flex flex-col">
                        <div className="flex flex-grow flex-col">
                            <FilterGroup heading="Model Types">
                                <div className="flex gap-2 flex-wrap p-2">
                                    {availableModelTypes.map((e, i) => (
                                        <Chip
                                            checked={modelTypes.includes(e)}
                                            onChange={() => onChangeModelType(e)}
                                            size="md"
                                            key={i}>
                                            {e}
                                        </Chip>
                                    ))}
                                </div>
                            </FilterGroup>
                            <FilterGroup heading="Base Model">
                                <div className="flex gap-2 flex-wrap p-2">
                                    {availableBaseModels.map((e, i) => (
                                        <Chip
                                            checked={baseModels.includes(e)}
                                            onChange={() => onChangeBaseModel(e)}
                                            size="md"
                                            key={i}>
                                            {e}
                                        </Chip>
                                    ))}
                                </div>
                            </FilterGroup>
                            <FilterGroup heading="Tags">
                                <div className="flex space-y-2 flex-col p-2 w-full">
                                    <Button
                                        radius="xl"
                                        leftSection={<IconTrash />}
                                        onClick={() => {
                                            setTags([])
                                        }}>
                                        Clear Tags
                                    </Button>
                                    <TagsInput className="w-full" data={[]} value={tags} onChange={setTags} />
                                </div>
                            </FilterGroup>
                        </div>

                        <div className="flex w-full space-x-2 flex-row">
                            <Button
                                className="flex-grow"
                                radius="xl"
                                fullWidth
                                leftSection={<IconCheck />}
                                onClick={onApplyFilters}>
                                Apply filters
                            </Button>
                            <Button
                                color="red"
                                radius="xl"
                                fullWidth
                                leftSection={<IconTrash />}
                                onClick={onClearFilters}>
                                Clear filters
                            </Button>
                        </div>
                    </Drawer.Body>
                </Drawer.Content>
            </Drawer.Root>
        </>
    )
}

export default ModelBrowser
