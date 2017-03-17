import * as React from 'react'
import styled from 'styled-components'

import { cells, color, fontSizes } from '../../styles/style-utils'

interface ButtonTypes {
  success?: boolean,
  error?: boolean
}

export const Button = styled.button`
  cursor: pointer;
  color: ${color.white};
  outline: none;
  height: ${ cells(6) }
  padding: ${ cells(1) } ${ cells(2) };
  font-size: ${ fontSizes.standard };
  user-select: none;
  transition: background-color 0.4s;

  &:active {
    box-shadow: inset 0 1px 3px rgba(0,0,0,.12);
  }

  ${(props: ButtonTypes) => props.success ? `
    background-color: ${color.green.g_500};
    border: 1px solid ${color.green.g_500};

    &:hover {
      background-color: ${color.green.g_600};
      border: 1px solid ${color.green.g_600};
    }
   ` : ''}

   ${(props: ButtonTypes) => props.error ? `
    background-color: ${color.red.g_500};
    border: 1px solid ${color.red.g_500};

    &:hover {
      background-color: ${color.red.g_600};
      border: 1px solid ${color.red.g_600};
    }
   ` : ''}
`

const StyledTextButton = styled.button`
  background-color: transparent
  color: ${ color.blue };
  cursor: pointer;
  font-size: ${ fontSizes.standard };
  padding: 0;
  border: none;

  &:focus {
    outline: none
  }
`

interface TextButtonProps {
  className?: string
  text: string
  clickHandler: React.EventHandler<any>
}

export const TextButton = ({text, clickHandler, className}: TextButtonProps) => (
  <StyledTextButton className={className} onClick={clickHandler}>{text}</StyledTextButton>
)
