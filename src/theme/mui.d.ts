import {
  Palette as MuiPallete,
  PaletteOptions as MuiPaletteOptions,
  // PaletteColorOptions as MuiPaletteColorOptions,
  // PaletteColor as MuiPaletteColor,
  // SimplePaletteColorOptions as MuiSimplePaletteColorOptions,
} from '@mui/material/styles/createPalette';

type Angpao = {
  ag1: string;
  ag2: string;
  ag3: string;
  ag4: string;
  ag5: string;
};

declare module '@mui/material/styles/createPalette' {
  interface Palette extends MuiPallete {
    angpao: Angpao;
  }

  interface PaletteOptions extends MuiPaletteOptions {
    angpao: Angpao;
  }

  // interface PaletteColorOptions extends MuiPaletteColorOptions {
  //   ag1?: MuiPaletteColor;
  // }
}
