import { ThemeInterface } from "../../../../utils/models/models";
import { defaultValueTheme } from "../../../../utils/theme/defaultValue";

export const getDataTheme = async (): Promise<string | null> => {
  return localStorage.getItem('themeCv');
};

export const fetchDataTheme = async (): Promise<ThemeInterface> => {
  try {
    const data = await getDataTheme();
    if (data) {
      const parsedData = JSON.parse(data ?? '');
      return parsedData;
    }
    return defaultValueTheme;
  } catch (error) {
    return defaultValueTheme;
  }
};