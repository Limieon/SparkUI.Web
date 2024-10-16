'use client'

import {
    Button,
    Switch,
    Checkbox,
    UnstyledButton,
    Input,
    NumberInput,
    Slider,
    Progress,
    Textarea,
    Select,
    Tabs,
    Image,
    Modal,
    Accordion,
    ActionIcon,
    TextInput
} from '@mantine/core'
import { ReactNode } from 'react'

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
    Search as IconSearch
} from 'lucide-react'

interface GroupTitleProps {
    title: string
    children: ReactNode
}
const Group: React.FC<GroupTitleProps> = ({ title, children }) => {
    return (
        <div className="rounded-xl p-2">
            <div>
                <p className="text-3xl font-bold">{title}</p>
                <hr className="mb-2" />
            </div>
            {children}
        </div>
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

export default function Txt2Img() {
    const schedulers = ['Euler A', 'DPM++ 2M', 'DPM++ 2M Karras', 'DPM++ 2M Exponential', 'DPM++ 2M Exponential Karras']

    const dTypes = ['FP16', 'FP32']

    return (
        <div className="flex h-full flex-row space-x-2">
            <div className="w-1/3 overflow-y-auto flex-nowrap space-y-2 rounded-xl p-2">
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

                <Group title="Prompt">
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
                </Group>

                <Group title="Base Settings">
                    <div className="flex items-center space-x-4 w-full">
                        <Image radius="sm" w={48} fit="contain" src="https://picsum.photos/48" alt="icon" />
                        <Button variant="subtle" className="justify-start flex-grow">
                            StableDiffusion Checkpoint
                        </Button>
                    </div>

                    <hr className="my-2" />

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
                        />
                    </div>

                    <hr className="my-2" />

                    <div className="grid grid-cols-[1fr_2fr_2fr_2fr] gap-2 items-center">
                        <p className="text-nowrap">Seed</p>
                        <NumberInput className="pr-0 text-right" min={0} max={100} defaultValue={42} />
                        <Button>
                            <span className="flex flex-row items-center space-x-2">
                                <IconShuffle />
                                <span>Shuffle Seed</span>
                            </span>
                        </Button>

                        <div className="flex items-center space-x-2">
                            <Switch className="text-nowrap" label="Randomize Seed" />
                        </div>

                        <p className="text-nowrap">Sub Seed</p>
                        <NumberInput className="pr-0 text-right" min={0} max={100} defaultValue={42} />

                        <Button className="flex-grow">
                            <span className="flex flex-row items-center space-x-2">
                                <IconShuffle />
                                <span>Shuffle Seed</span>
                            </span>
                        </Button>

                        <div className="flex itemsc-center space-x-2">
                            <Switch className="text-nowrap" label="Randomize Seed" />
                        </div>
                    </div>
                </Group>

                <div className="flex flex-col space-y-2 rounded-xl p-2">
                    <span className="flex">
                        <p className="text-3xl font-bold flex-grow">Additional Resources</p>
                        <Button>
                            <IconAdd className="mr-2" />
                            Add Resource
                        </Button>
                        <hr />
                    </span>

                    <Tabs variant="outline" defaultValue="lora">
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
        </div>
    )
}
