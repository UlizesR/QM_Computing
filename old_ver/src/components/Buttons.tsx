import { ReactNode } from 'react';

export interface ButtonProps {
  onClick?: () => void;
  icon?: ReactNode;
  text?: string;
  className?: string;
}

const MainButton = (props: ButtonProps) => {
  return (
    <button className='button' onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const MeshButton = (props: ButtonProps) => {
  return (
    <button className='mesh-menu-button'>
      {props.icon ? props.icon : props.text}
    </button>
  )
}

export { MainButton, MeshButton}