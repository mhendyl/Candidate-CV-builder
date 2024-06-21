import { CandidateData } from "./models/models";

export const getData = async (): Promise<string | null> => {
  return localStorage.getItem('candidateData');
};

export const fetchData = async (): Promise<CandidateData[] | []> => {
  try {
    const data = await getData();
    if (data) {
      const parsedData = JSON.parse(data);
      return parsedData;
    }
    return [];
  } catch (error) {
    return [];
  }
};