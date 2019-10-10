export interface Workstation {
  id: number;
  label: string;
  telephone: boolean;
  mouse: boolean;
  headset: boolean;
  noise: number;
  freeDays: Date[];
}
