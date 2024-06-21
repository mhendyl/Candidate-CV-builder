export type InputTextComponentType = {
  label: string;
  id?: string;
  inputName: string;
  value?: string | number | undefined;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  classNamesCustom?: string;
  containerClassName?: string;
  maxLength?: number;
  required?:boolean;
  smallText?: string;
}