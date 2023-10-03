export default interface ICoach {
  id: string;
  firstName: string;
  lastName: string;
  areas: Array<string>;
  description: string;
  hourlyRate: number;
}
