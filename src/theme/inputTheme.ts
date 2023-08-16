import { ThemeSizeProps, VariantThemeProps} from "./types.ts";
import {theme} from "./index.ts";

export type InputThemeType = {
  // shape: Record<string, ShapeThemeProps>;
  variant: Record<string, VariantThemeProps>;
  size: Record<string, ThemeSizeProps>;
}

export const inputTheme: InputThemeType = {
  variant: {
    "default": {
      colors: {
        bg: `${theme.colors.background_white}`,
        fg:`${theme.colors.dark}`,
        bc:"",
        hover: {
          bg:"",
          fg:"",
          bc:""
        }
      }
    },
    "light": {
      colors: {
        bg: `${theme.colors.white}`,
        fg:`${theme.colors.dark}`,
        bc:"",
        hover: {
          bg:"",
          fg:"",
          bc:""
        }
      }
    }
  },
  size: {
    default: {
      paddingInline: "2.4rem 1.6rem",
      paddingBlock: ".8rem",
      fontSize: "1.5em",
      lineHeight: "1.2"
    },
    medium: {
      paddingInline: "2.4rem",
      paddingBlock: "1.8rem",
      fontSize: "1.5em",
      lineHeight: "1.7"
    },
  }
}