export type ShapeThemeProps = {
  borderRadius: string;
};

export type VariantThemeProps = {
  colors: {
    bg: string
    fg: string
    bc: string
    hover : {
      bg: string
      fg: string
      bc: string
    }
  }
}

export type ThemeSizeProps = {
  paddingInline: string
  paddingBlock: string
  fontSize: string
  lineHeight:string
}