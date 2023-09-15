import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  // quando coloco aqui os demias botões vai ter o text de envia
  args: {
    children: (
      <>
        <span>Testando o elemento em tela</span>
      </>
    ),
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
