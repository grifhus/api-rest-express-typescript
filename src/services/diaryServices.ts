import { DiaryEntry, NonSensitiveInfoDiaryEntry } from "../types"
import diaryData from "./diaries.json"

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
// Realizamos una aserción de tipo para garantizar que diaryData se trate como un Array<DiaryEntry>, asegurando que los datos cumplen con la estructura esperada.

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find((d) => d.id === id);
  
    if (entry !== null ) { 
      const { comment, ...restOfDiary } = entry;
      return restOfDiary;
    }
    return undefined;
  };
export const getEntriesWithoutSensitive = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility,
    }
  })
}

export const addEntry = (): undefined => undefined
