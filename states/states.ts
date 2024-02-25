import zustand, { create } from "zustand";

//Estado para ver la informarcion de los objetos
type VerPanelCoinClicker = {
  verPanel1: boolean;
  setVerPanel1: (by: boolean) => void;
};

export const usePanelCoinClicker = create<VerPanelCoinClicker>()((set) => ({
  verPanel1: false,
  setVerPanel1: (ver: boolean) => set(() => ({ verPanel1: ver })),
}));

//Estado para ver la informarcion de los objetos
type VerPanelMind2Mind = {
  verPanel2: boolean;
  setVerPanel2: (by: boolean) => void;
};

export const usePanelMind2Mind = create<VerPanelMind2Mind>()((set) => ({
  verPanel2: false,
  setVerPanel2: (ver: boolean) => set(() => ({ verPanel2: ver })),
}));

//Estado para ver la informarcion de los objetos
type VerPanelProyecto3 = {
  verPanel3: boolean;
  setVerPanel3: (by: boolean) => void;
};

export const usePanelProyecto3 = create<VerPanelProyecto3>()((set) => ({
  verPanel3: false,
  setVerPanel3: (ver: boolean) => set(() => ({ verPanel3: ver })),
}));
