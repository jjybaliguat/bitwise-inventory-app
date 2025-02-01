import { Product } from "./product"

export interface Sale {
    id: string
    customerName: string
    items: SaleItem[]
    totalAmount: number
    saleDate: Date
    returns?: SaleReturn[],
    paymentMethod: PaymentMethod
}

export interface SaleItem {
    id: string
    productId: string
    product: Product
    serial?: string
    quantity: number
    unitPrice: number
    totalPrice: number
}

export interface SaleReturn {
    id: string
    returnType: ReturnType
    total: number
    reason: ReturnReason
    returnItems: ReturnItem[]
    
    createdAt: Date
    
}

export interface ReturnItem {
    id: string
    returnId: string
    productId: string
    serialId: string
    quantity: number
    price: number
    action: ReturnAction
    returnReason: ReturnReason
    product: Product
    serialNumber: string
  }

export enum ReturnType {
    REFUND = "REFUND",
    EXCHANGE = "EXCHANGE"
  }

export enum ReturnReason {
    DEFECTIVE = "DEFECTIVE",
    WRONG_ITEM = "WRONG_ITEM",
    OTHER = "OTHER",
  }

export enum ReturnAction {
    RETURN_TO_STOCK = "RETURN_TO_STOCK",
    DISPOSE = "DISPOSE"
  }
export enum PaymentMethod {
  CASH = "CASH",
  GCASH = "GCASH",
  MIXED = "MIXED",
  BANK_TRANSFER = "BANK_TRANSFER",
  OTHER = "OTHER"
  }