export interface Api  {
  data: Api_data[]
}
export interface Api_data {
    new_daily_cases: number,
    new_daily_deaths: number,
    total_cases: number,
    total_recoveries: number,
    total_deaths: number;
}
// "1/23/2020":{}
