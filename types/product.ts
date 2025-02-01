export interface Product {
    id: string
    name: string
    description: string
    price: number
    origPrice: number
    code: string
    stock: number
    type: ProductType
    reorderLevel: number
    category: Category
    brand: Brand
    supplier: Supplier
    serialNumber: SerialNumber[]
}

export enum ProductType {
    SERIALIZED = "SERIALIZED",
    NON_SERIALIZED = "NON_SERIALIZED"
}

interface Category {
    id:          string
    name:        string
    description: string
}
interface Brand {
    id:          string
    name:        string
    description: string
}
interface Supplier {
    id:          string
    name:        string  
    contact:     string
    address:     string
}
export interface SerialNumber {
    id:          string
    serialCode:        string  
    status:     SerialStatus
}

export enum SerialStatus {
    AVAILABLE = "AVAILABLE", 
    SOLD = "SOLD",
    RETURNED = "RETURNED",
    DAMAGED = "DAMAGED",
    UNAVAILABLE = "UNAVAILABLE",
}
 export enum PRODUCT_ADJUSTMENT {
    ADD_STOCK = "ADD_STOCK",   // When stock is increased
    DECREASE_STOCK = "DECREASE_STOCK",     // When stock is decreased
    DAMAGED = "DAMAGED",     // For damaged products removed from inventory
    RETURNED = "RETURNED",    // When products are returned to inventory
}

export interface ProductAdjustment {
    id:         string
    productId:  string
    product:    Product
    type:       PRODUCT_ADJUSTMENT
    quantity:   number                   // Number of units adjusted
    reason:     string             // Optional description for the adjustment
    createdAt:  Date
}