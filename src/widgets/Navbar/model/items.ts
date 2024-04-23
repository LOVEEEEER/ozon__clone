import { AnchorProps } from "@/shared/ui/Anchor/Anchor";

export const navbarFooterItemsList: AnchorProps[] = [
  {
    children: "Ozon карта",
    to: "/"
  },
  {
    children: "Билеты, отели, туры",
    to: "/"
  },
  {
    children: "Одежда и обувь",
    to: "/"
  },
  {
    children: "Электроника",
    to: "/"
  },
  {
    children: "Дом и сад",
    to: "/"
  },
  {
    children: "Детские товары",
    to: "/"
  },
  {
    children: "Акции",
    to: "/"
  },
  {
    children: "Premium",
    to: "/"
  },
  {
    children: "Подарочные сертификаты",
    to: "/"
  },
  {
    children: "Продукты питания",
    to: "/"
  },
];

export const navbarHeaderItemsList: (AnchorProps & { marked?: boolean })[]= [
  {
    children: "Стать продавцом",
    to: "/",
    marked: true
  },
  {
    children: "Покупать как компания",
    to: "/"
  },
  {
    children: "Мобильное приложение",
    to: "/"
  },
  {
    children: "Подарочные сертификаты",
    to: "/"
  },
  {
    children: "Помощь",
    to: "/"
  },
  {
    children: "Пункты выдачи",
    to: "/"
  },
]