import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  // quando coloco aqui os demias botões vai ter o text de envia
  args: {
    children:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequuntur praesentium repellat odit. Harum odit dignissimos ullam, necessitatibus repudiandae enim ipsam repellendus accusantium soluta? Labore necessitatibus assumenda dolor aspernatur natus.',
  },
} as Meta

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
