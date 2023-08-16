import {theme} from "./index.ts";


type ButtonShapeProps = {
  borderRadius: string;
};

type ButtonThemeProps = {
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

type ButtonSizeProps = {
  paddingInline: string
  paddingBlock: string
  fontSize: string
}

type ButtonThemeType = {
  shape: Record<string, ButtonShapeProps>;
  variant: Record<string, ButtonThemeProps>;
  size: Record<string, ButtonSizeProps>;
}

export const buttonTheme: ButtonThemeType = {
  shape: {
    circle: { borderRadius: "50%" },
    rounded: { borderRadius: ".5rem" },
    pill: { borderRadius: "50% / 20%" },
  },
  variant: {
    primary: {
      colors: {
        bg: `${theme.colors.primary}`,
        fg: `${theme.colors.white}`,
        bc: `${theme.colors.primary_burger}`,
        hover: {
          bg: `${theme.colors.white}`,
          fg: `${theme.colors.primary}`,
          bc: `${theme.colors.primary}`,
        },
      },
    },
    success: {
      colors: {
        bg:`${theme.colors.success}`,
        fg: `${theme.colors.white}`,
        bc: `${theme.colors.success}`,
        hover: {
          bg: `${theme.colors.white}`,
          fg: `${theme.colors.success}`,
          bc: `${theme.colors.success}`,
        },
      },
    },
    danger: {
      colors: {
        bg:`${theme.colors.red}`,
        fg: `${theme.colors.white}`,
        bc: `${theme.colors.red}`,
        hover: {
          bg:`${theme.colors.redSecondary}`,
          fg: `${theme.colors.white}`,
          bc: `${theme.colors.redSecondary}`,
        },
      },
    },
  },
  size: {
    small: {
      paddingInline: ".5rem",
      paddingBlock: ".25rem",
      fontSize: ".8em"
    },
    medium: {
      paddingInline: "2.9rem",
      paddingBlock: "1.175rem",
      fontSize: "1.2em"
    },
    large: {
      paddingInline: "2.2rem",
      paddingBlock: "1.8rem",
      fontSize: "1.5em"
    },
  },
};