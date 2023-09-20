import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator } from './styles'
import { ComponentProps } from 'react'

export type CheckBoxProps = ComponentProps<typeof CheckboxContainer>

export function CheckBox(props: CheckBoxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

CheckBox.displayName = 'CheckBox'
