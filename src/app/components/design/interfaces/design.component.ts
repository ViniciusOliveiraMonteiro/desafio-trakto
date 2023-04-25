export interface IDesign {
  is_template: boolean
  theme_reference: ThemeReference
  app_reference: AppReference
  created_at: string
  products: Product[]
  tags: string[]
  cover: Cover
  is_deleted: boolean
  is_premium: boolean
  updated_at: string
  user_reference: UserReference
  is_renamed: boolean
  thumbs: Thumbs
  id: string
  title: string
}

export interface ThemeReference {
  id: string
}

export interface AppReference {
  id: string
}

export interface Product {
  app_product_reference: AppProductReference
  created_at: CreatedAt
}

export interface AppProductReference {}

export interface CreatedAt {}

export interface Cover {
  raw: string
  medium: string
  high: string
  low: string
}

export interface UserReference {
  id: string
}

export interface Thumbs {
  raw: string
  medium: string
  high: string
  low: string
}
