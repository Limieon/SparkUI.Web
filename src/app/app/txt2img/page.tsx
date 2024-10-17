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
    Tooltip
} from '@mantine/core'
import { Carousel } from '@mantine/carousel'

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
    Replace as IconReplace
} from 'lucide-react'

interface GroupTitleProps {
    title: string
    children: ReactNode
}
const Group: React.FC<GroupTitleProps> = ({ title, children }) => {
    return (
        <Accordion.Item value={title}>
            <Accordion.Control>{title}</Accordion.Control>
            <Accordion.Panel>{children}</Accordion.Panel>
        </Accordion.Item>
    )
}

interface GroupContainerProps {
    children: ReactNode
}
const GroupContainer: React.FC<GroupContainerProps> = ({ children }) => {
    return (
        <Accordion defaultValue={['Resources', 'Base Settings']} variant="separated" radius="lg" multiple={true}>
            {children}
        </Accordion>
    )
}

interface ConceptItemProps {
    name: string
    weight: number
}
const ConceptItem: React.FC<ConceptItemProps> = ({ name, weight }) => {
    return (
        <div className="flex items-center space-x-4 w-full">
            <Image radius="xl" w={48} src="https://picsum.photos/48" alt="icon" />
            <Button variant="subtle" className="flex-grow justify-start p-0">
                {name}
            </Button>
            <NumberInput className="max-w-[100px]" min={-5} max={5} defaultValue={weight} step={0.1} />
            <Switch label="Enable" />
            <Button color="red">
                <IconTrash />
            </Button>
        </div>
    )
}

interface ImageBoardSelectorProps {
    name: string
    preview: string
}
const ImageBoardSelector: React.FC<ImageBoardSelectorProps> = ({ name, preview }) => {
    return (
        <>
            <UnstyledButton size="lg" className="space-x-2 flex justify-between items-center text-lg border-zinc-500">
                <span>{name}</span>
                <Image radius="sm" w={48} fit="contain" src={preview} alt="board icon" />
            </UnstyledButton>
        </>
    )
}

export default function Txt2Img() {
    const [dispalyBatches, setDispalyBatches] = useState(false)

    const schedulers = ['Euler A', 'DPM++ 2M', 'DPM++ 2M Karras', 'DPM++ 2M Exponential', 'DPM++ 2M Exponential Karras']
    const dTypes = ['FP16', 'FP32']
    const imageActions = [
        {
            tooltip: 'Reuse Seed',
            icon: IconLeaf,
            onClick: () => {}
        },
        {
            tooltip: 'Reuse Prompt',
            icon: IconText,
            onClick: () => {}
        },
        {
            tooltip: 'Reuse Settings',
            icon: IconSettings,
            onClick: () => {}
        },
        {
            tooltip: 'Reuse All',
            icon: IconAsterisk,
            onClick: () => {}
        },
        {
            tooltip: 'Download',
            icon: IconDownload,
            onClick: () => {}
        }
    ]

    return (
        <div className="flex h-full flex-row space-x-2">
            <div className="w-[30%] overflow-y-auto flex-nowrap space-y-2 rounded-xl p-2">
                <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                        <Button className="font-bold h-12 px-12">Generate</Button>
                        <Button color="yellow" className="h-12 w-12 p-2">
                            <IconZap />
                        </Button>
                    </div>

                    <NumberInput
                        id="num_batchSize"
                        className="max-w-24 [r-0 text-center"
                        min={1}
                        max={9}
                        defaultValue={4}
                    />

                    <div className="flex space-x-1">
                        <Button color="red" className="h-12 w-12 p-2">
                            <IconX />
                        </Button>
                        <Button color="red" className="h-12 w-12 p-2">
                            <IconTrash />
                        </Button>
                    </div>
                </div>

                <div className="flex h-fit flex-col space-y-1">
                    <Progress.Root size="xl" radius="xl">
                        <Progress.Section value={50} color="blue" striped>
                            <Progress.Label>50%</Progress.Label>
                        </Progress.Section>
                    </Progress.Root>
                    <div className="flex">
                        <span className="flex flex-grow flex-row space-x-2 text-nowrap">
                            <IconSpeed />
                            <p>27 It/s</p>
                        </span>
                        <span className="flex flex-grow flex-row space-x-2 text-nowrap">
                            <IconTimer />
                            <p>0:42 left</p>
                        </span>
                        <span className="flex flex-row space-x-2 text-nowrap">
                            <IconProgress />
                            <p>19/95</p>
                        </span>
                    </div>
                </div>

                <div className="flex flex-col space-y-2">
                    <Textarea
                        className="w-full"
                        variant="filled"
                        radius="md"
                        label="Prompt"
                        rows={5}
                        resize="vertical"
                    />
                    <Textarea
                        className="w-full"
                        variant="filled"
                        radius="md"
                        label="Negative Prompt"
                        rows={3}
                        resize="vertical"
                    />
                </div>

                <GroupContainer>
                    <Group title="Resources">
                        <div className="flex w-full space-x-2">
                            <div className="flex flex-col flex-grow">
                                <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                                    <span className="text-lg text-right">Checkpoint:</span>
                                    <div className="flex justify-between items-center w-full">
                                        <div className="flex flex-row items-center space-x-2">
                                            <Image
                                                className="block"
                                                radius="xl"
                                                w={48}
                                                src="https://picsum.photos/256/256"
                                                alt="checkpoint icon"
                                            />
                                            <div className="flex flex-col justify-start">
                                                <span>StableDiffusion Checkpoint</span>
                                                <span>V1.5</span>
                                            </div>
                                        </div>

                                        <Button radius="xl" size="md" variant="outline" leftSection={<IconReplace />}>
                                            Swap
                                        </Button>
                                    </div>

                                    <span className="text-lg text-right">VAE:</span>
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-row items-center space-x-2">
                                            <Image
                                                className="block"
                                                radius="xl"
                                                w={48}
                                                src="https://picsum.photos/256/256"
                                                alt="checkpoint icon"
                                            />
                                            <div className="flex flex-col justify-start">
                                                <span>StableDiffusion VAE</span>
                                                <span>V1.5</span>
                                            </div>
                                        </div>

                                        <Button radius="xl" size="md" variant="outline" leftSection={<IconReplace />}>
                                            Swap
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="my-2" />

                        <div className="flex space-x-2 flex-col space-y-2">
                            <div className="text-xl flex items-center">
                                <span className="flex-grow">Additional Resources</span>
                                <Button variant="outline" radius="xl" size="md" leftSection={<IconAdd />}>
                                    Add
                                </Button>
                            </div>
                            <div className="flex w-full">
                                <Tabs className="w-full" variant="default" defaultValue="lora">
                                    <Tabs.List grow>
                                        <Tabs.Tab value="lora">Lora</Tabs.Tab>
                                        <Tabs.Tab value="embedding">Embedding</Tabs.Tab>
                                        <Tabs.Tab value="controlnet">ControlNet</Tabs.Tab>
                                    </Tabs.List>

                                    <Tabs.Panel value="lora">
                                        <div className="flex flex-col rounded-xl w-full p-2 space-y-1">
                                            <ConceptItem name="LoRA 1" weight={2.5} />
                                            <ConceptItem name="LoRA 2" weight={2.5} />
                                        </div>
                                    </Tabs.Panel>
                                    <Tabs.Panel value="embedding">
                                        <div className="flex flex-col rounded-xl w-full p-2 space-y-1">
                                            <ConceptItem name="Embedding 1" weight={2.5} />
                                            <ConceptItem name="Embedding 2" weight={2.5} />
                                        </div>
                                    </Tabs.Panel>
                                    <Tabs.Panel value="controlnet">Coming Soon (TM)</Tabs.Panel>
                                </Tabs>
                            </div>
                        </div>
                    </Group>

                    <Group title="Base Settings">
                        <div className="flex space-x-2">
                            <NumberInput
                                label="Steps"
                                className="pr-0 text-center"
                                min={1}
                                max={100}
                                defaultValue={35}
                                step={1}
                            />
                            <NumberInput
                                label="CFG Scale"
                                className="pr-0 text-center"
                                min={1}
                                max={100}
                                defaultValue={20}
                                step={1}
                            />
                            <Select
                                label="Scheduler"
                                className="w-[350px] text-center"
                                data={schedulers}
                                defaultValue={schedulers[0]}
                                allowDeselect={false}
                            />
                        </div>

                        <hr className="my-2" />

                        <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-2 items-center">
                            <Tooltip label="Controls image randomness; same seed produces similar images">
                                <span className="text-nowrap text-right">Seed</span>
                            </Tooltip>
                            <NumberInput className="pr-0 text-right" min={0} max={100} defaultValue={42} />
                            <Button leftSection={<IconShuffle />}>Shuffle Seed</Button>
                            <Switch className="text-nowrap" label="Randomize Seed" />

                            <Tooltip label="Secondary seed to add slight variation to the main seed">
                                <span className="text-nowrap text-right">Sub Seed</span>
                            </Tooltip>
                            <NumberInput className="pr-0 text-right" min={0} max={100} defaultValue={42} />
                            <Button leftSection={<IconShuffle />}>Shuffle Seed</Button>
                            <Switch className="text-nowrap" label="Randomize Seed" />
                        </div>
                    </Group>
                </GroupContainer>
            </div>

            <div className="h-full flex flex-col flex-1 space-y-2 justify-around">
                <div className="flex space-x-2 justify-center">
                    {imageActions.map((e, i) => (
                        <Tooltip label={e.tooltip} key={i}>
                            <ActionIcon radius="xl" size="xl" onClick={e.onClick}>
                                <e.icon />
                            </ActionIcon>
                        </Tooltip>
                    ))}
                </div>
                <Carousel slideSize="70vh" slideGap="sm" controlSize={24} withIndicators>
                    {[...Array(9)].map((e, i) => (
                        <Carousel.Slide key={i}>
                            <Image
                                h={'70vh'}
                                className="m-[0_auto]"
                                fit="contain"
                                src="https://picsum.photos/1024/512"
                                alt="generated"
                            />
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </div>

            <div className="flex flex-col h-full w-1/4 flex-shrink space-y-2">
                <div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                            <TextInput
                                className="flex-grow"
                                radius="xl"
                                placeholder="Search Board"
                                leftSection={<IconSearch />}
                            />
                            <Tooltip label="Manage Boards">
                                <ActionIcon className="pointer-events-auto w-10 h-10" variant="outline" radius="xl">
                                    <IconSettings />
                                </ActionIcon>
                            </Tooltip>
                            <Tooltip label="Group images in batches">
                                <ActionIcon
                                    onClick={() => {
                                        setDispalyBatches(!dispalyBatches)
                                    }}
                                    className="pointer-events-auto w-10 h-10"
                                    radius="xl">
                                    {dispalyBatches ? <IconFolderOpen /> : <IconFolder />}
                                </ActionIcon>
                            </Tooltip>
                        </div>

                        <hr />

                        <div className="flex flex-col space-y-2 max-h-40 overflow-y-auto">
                            <ImageBoardSelector name="Board 1" preview="https://picsum.photos/48" />
                            <ImageBoardSelector name="Board 2" preview="https://picsum.photos/48" />
                            <ImageBoardSelector name="Board 3" preview="https://picsum.photos/48" />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="flex flex-row justify-between flex-wrap gap-1 overflow-y-auto pr-2">
                    {[...Array(50)].map((e, i) => (
                        <div key={i} className="w-[19%]">
                            <Image
                                src="https://picsum.photos/1024/1360"
                                alt="generated image"
                                className="rounded-lg cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
