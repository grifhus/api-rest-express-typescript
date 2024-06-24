import { DiaryEntry } from "../types"
import diaryData from "./diaries.json"

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>
// Realizamos una aserción de tipo para garantizar que diaryData se trate como un Array<DiaryEntry>, asegurando que los datos cumplen con la estructura esperada.

export const getEntries = () => diaries

export const addEntry = () => null
