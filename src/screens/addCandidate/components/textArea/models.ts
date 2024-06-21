export type TextAreaComponentType = {
  label: string;
  id?: string;
  textAreaName: string;
  value?: string | number | undefined;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  classNamesCustom?: string;
  containerClassName?: string;
  maxLength?: number;
  required?:boolean;
  smallText?: string;
}