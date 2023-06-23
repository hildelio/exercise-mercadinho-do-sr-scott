import { CartItem } from './types/CartItem';
import { Drink } from './types/Drink';
import { Food } from './types/Food';

export function first<T>(param: T[]): T {
  return param[0];
}

export function updateItem<T>(array: T[], index: number, newValue: T): T[] {
  if (index < 0 || index >= array.length) {
    return array;
  }
  return [
    ...array.slice(0, index),
    newValue,
    ...array.slice(index + 1),
  ];
}

export function buildCartItem(item: Food | Drink, quantity: number): CartItem {
  return {
    name: item.name,
    price: item.price,
    quantity,
  };
}