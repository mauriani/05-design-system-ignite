import { ComponentProps } from 'react'
import { X } from 'phosphor-react'
import {
  ToastClose,
  ToastContainer,
  ToastContainerRoot,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainerRoot> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <div>
      <ToastContainer>
        <ToastContainerRoot duration={2500} {...props}>
          <ToastTitle>{title}</ToastTitle>
          {description && <ToastDescription>{description}</ToastDescription>}
          <ToastClose>
            <X weight="light" size={20} />
          </ToastClose>
        </ToastContainerRoot>

        <ToastViewport />
      </ToastContainer>
    </div>
  )
}

Toast.displayName = 'Toast'
