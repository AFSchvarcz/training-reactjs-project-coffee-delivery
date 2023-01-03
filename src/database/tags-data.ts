export const TagsData = [
  {
    id: "standard",
    name: "Tradicional",
  },
  {
    id: "special",
    name: "Especial",
  },
  {
    id: "milk",
    name: "Com Leite",
  },
  {
    id: "alcohol",
    name: "Alcoólico",
  },
  {
    id: "cold",
    name: "Gelado",
  },
] as const;

export type TagId = typeof TagsData[number]["id"];

export const TagsDataIndexed = Object.fromEntries(
  TagsData.map(({ id, name }) => [id, name])
);
