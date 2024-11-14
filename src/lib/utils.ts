import { KeyboardEvent } from 'react'
import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isMobile(data: string) {
  return new RegExp(/^09\d{9}$/g).test(data)
  // return new RegExp(/^(\+98|0)?9\d{9}$/g).test(string);
}

export function isNumeric(data: string) {
  return new RegExp(/^[0-9]*$/).test(data)
}

export function handleNumberKeyPress(e: KeyboardEvent<HTMLInputElement>) {
  if (!isNumeric(e.key) && e.key !== 'Backspace' && e.key !== 'Enter') e.preventDefault()
}

export function setStorage(key: string, value: Object | string) {
  return localStorage.setItem(key, JSON.stringify(value))
}

export function getStorage(key: string) {
  try {
    return JSON.parse(localStorage.getItem(key) ?? '')
  } catch (error) {
    return null
  }
}

export function digitsFaToEn(num: any) {
  const id = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
  }
  return num
    ? num.toString().replace(/[^0-9.]/g, function (w: any) {
        return id[w] || w
      })
    : null
}
