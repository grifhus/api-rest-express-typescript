import { DiaryEntry, NonSensitiveInfoDiaryEntry } from "../types"
import diaryData from "./diaries.json"

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

// Función para obtener todas las entradas
export const getEntries = (): DiaryEntry[] => diaries

// Función para encontrar una entrada por ID sin la información sensible
export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);

  if (entry) {
    // Desestructuramos para quitar la propiedad 'comment'
    const { comment, ...restOfDiary } = entry;
    return restOfDiary;
  }

  return undefined;
}

// Función para obtener todas las entradas sin la información sensible
export const getEntriesWithoutSensitive = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }))
}

// Función de marcador para agregar una entrada
export const addEntry = (): undefined => undefined
