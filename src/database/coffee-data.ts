import { TagId } from "./tags-data";

export interface CoffeeDataProps {
  id: string;
  name: string;
  description: string;
  price: number;
  img: string;
  tags: TagId[];
}

export const CoffeeData: CoffeeDataProps[] = [
  {
    id: "0",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    img: "expresso.svg",
    tags: ["standard"],
  },
  {
    id: "1",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    img: "americano.svg",
    tags: ["standard"],
  },
  {
    id: "2",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    img: "expresso-cremoso.svg",
    tags: ["standard"],
  },
  {
    id: "3",
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    img: "cafe-gelado.svg",
    tags: ["standard", "cold"],
  },
  {
    id: "4",
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    img: "cafe-com-leite.svg",
    tags: ["standard", "milk"],
  },
  {
    id: "5",
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    img: "latte.svg",
    tags: ["standard", "milk"],
  },
  {
    id: "6",
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    img: "capuccino.svg",
    tags: ["standard", "milk"],
  },
  {
    id: "7",
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    img: "macchiato.svg",
    tags: ["standard", "milk"],
  },
  {
    id: "8",
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    img: "mochaccino.svg",
    tags: ["standard", "milk"],
  },
  {
    id: "9",
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    img: "chocolate-quente.svg",
    tags: ["special", "milk"],
  },
  {
    id: "10",
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    img: "cubano.svg",
    tags: ["special", "alcohol", "cold"],
  },
  {
    id: "11",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    img: "havaiano.svg",
    tags: ["special"],
  },
  {
    id: "12",
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    img: "arabe.svg",
    tags: ["special"],
  },
  {
    id: "13",
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    img: "irlandes.svg",
    tags: ["special", "alcohol"],
  },
];

export const IndexedCoffeeData = Object.fromEntries<CoffeeDataProps>(
  CoffeeData.map((data) => [data.id, data])
);
