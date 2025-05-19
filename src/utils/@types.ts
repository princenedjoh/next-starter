import { TypographyBold, TypographySize } from "@styles/style.types";
import { ElementType, MouseEvent, ReactNode } from "react";

export type overflow = "visible" | "hidden" | "clip" | "scroll" | "auto"

export interface baseProps {
    children : ReactNode,
    className? : string,
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  }

  export type ButtonStyleProps = {
    children? : ReactNode
    className? : string
    color?: string
    background?: string
    colorTheme? : string
    border?: string
    PreIcon?: ElementType
    PostIcon?: ElementType
    id?: string
    radius?: number
    padding?:string
    maxWidth?:string
    size?: {
      width?: string
      height?: string
    }
    shadow?: boolean
    textSize?: TypographySize
    textBold?: TypographyBold
    disabled?: boolean
    showLoader? : boolean
    variant? : "text" | "outlined" | "contained"
    disableElevation? : boolean
    opacity? : number
    hover? : Omit<ButtonStyleProps, 'onHover'>
  }
  
  export interface ButtonProps extends ButtonStyleProps {
    loading?: boolean;
    loadingColor?: string
    type?: ButtonTypes;
    text?: string;
    icon?: ReactNode;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export type ButtonTypes = 'submit' | 'button'

export interface DropdownItem {
    key: string;
    label?: ReactNode | string;
    disabled?: boolean;
    type?: "divider" | "title" | "link"
    href? : string
    icon?: ReactNode;
    onClick? : ()=>void
}