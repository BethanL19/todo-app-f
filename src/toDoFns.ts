export interface data {
  id: number;
  task: string;
  complete: boolean;
}

export const dumbyData: data[] = [
  {
    id: 1,
    task: "wash up",
    complete: false,
  },
  {
    id: 2,
    task: "finish To-Do project",
    complete: false,
  },
  {
    id: 3,
    task: "create back-end",
    complete: true,
  },
  {
    id: 4,
    task: "food shop",
    complete: false,
  },
  {
    id: 5,
    task: "tidy room",
    complete: true,
  },
];

export const greet = () => {
  return "Hi";
};
