export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy"
export type Visibility = "great" | "good" | "ok" | "poor"

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

