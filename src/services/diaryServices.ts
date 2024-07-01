import {
  DiaryEntry,
  NonSensitiveInfoDiaryEntry,
  Visibility,
  Weather,
} from "../types"
import diaryData from "./diaries.json"

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

// Función para obtener todas las entradas
export const getEntries = (): DiaryEntry[] => diaries

// Función para encontrar una entrada por ID sin la información sensible
export const findById = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id)

  if (entry !== undefined) {
    // Desestructuramos para quitar la propiedad 'comment'
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }

  return undefined
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
export const addDiary = (
  date: string,
  weather: Weather,
  visibility: Visibility,
  comment: string
): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    date,
    weather,
    visibility,
    comment,
  }
  diaries.push(newDiaryEntry)
  return newDiaryEntry
}
