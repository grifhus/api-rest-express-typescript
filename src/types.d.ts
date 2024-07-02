import { Weather, Visibility} from "../enums"

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

/**  las interfaces estan pensadas para ser extendidas EJEMPLO
 interface SpecialDiaryEntry extends DiaryEntry {
   flightNumber: number
 }
*/

// un ejemplo de crear un typ a partir de otro
// export type NonSensitiveInfoDiaryEntry = Pick<
//   DiaryEntry,
//   "id" | "date" | "weather" | "visibility"
// >

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">

export type NewDiaryEntry = Omit<DiaryEntry, "id">
