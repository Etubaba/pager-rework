export interface ModalType {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export type selectType = {
  setValue: React.Dispatch<React.SetStateAction<string | number>>;
  value: string | number;
  //   color?: string;
  list: string[];
  style?: string;
  //   position?: string;
};

export type InputType = {
  type?: string;
  placeholder?: string;
  style?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};
