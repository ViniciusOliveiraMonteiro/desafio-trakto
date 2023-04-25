export interface IAuthUser {
  id: string
  firstname: string
  email_verified: boolean
  role: Role
  app_reference: AppReference
  created_at: string
  can_authenticate: boolean
  products: string[]
  force_reset_password: boolean
  approved_terms_use: boolean
  email: string
  customer_id: string
  subscription_payment_status: string
  subscription_reference: SubscriptionReference
  current_profile: CurrentProfile
  subscription_status: string
  profiles: Profile[]
  subscription_rules: SubscriptionRules
  subscription_plan_name: string
  current_locale: CurrentLocale
  limits: Limits3
  firebase_token: string
  access_token: string
  refresh_token: string
}

export interface Role {
  title: string
  value: string
}

export interface AppReference {
  id: string
}

export interface SubscriptionReference {
  id: string
}

export interface CurrentProfile {
  product: Product
  current_locale: string
  subscription: Subscription
}

export interface Product {
  id: string
  title: string
  type: string
}

export interface Subscription {
  renew_at: string
  product_subscribed: ProductSubscribed
  payment_status: string
  active: boolean
  created_at: string
  id: string
  is_trial: boolean
  gateway: Gateway
  limits: Limits
}

export interface ProductSubscribed {
  metadata: any
  app_reference: AppReference2
  is_published: boolean
  active: boolean
  created_at: CreatedAt
  plan_reference: PlanReference
  rules: Rules
  hotmart_product_id: any
  descriptor: Descriptor
  titles: Titles
  is_default: boolean
  locale: string[]
  gateway_product_id: any
  is_deleted: boolean
  payment_required: boolean
  updated_at: UpdatedAt
  sortment_descriptor: SortmentDescriptor
  is_free: boolean
  team_members: number
  id: string
  from_hotmart: boolean
  gateway_name: any
}

export interface AppReference2 {
  id: string
}

export interface CreatedAt {
  seconds: number
  nanoseconds: number
}

export interface PlanReference {
  id: string
}

export interface Rules {
  export_pdf_low: boolean
  image_upload: boolean
  create_document: boolean
  export_gif: boolean
  document_publish_online: boolean
  export_pdf_medium: boolean
  export_video: boolean
  remove_bg: boolean
  export_gif_count: number
  export_pdf_count: number
  remove_bg_count: number
  use_template_premium_count: number
  icon_stock: boolean
  export_png_medium: boolean
  export_video_count: number
  image_stock: boolean
  export_png_high: boolean
  export_with_watermark: boolean
  export_png_low: boolean
  export_pdf_high: boolean
  font_premium: boolean
  use_template_premium: boolean
  shape_stock: boolean
  upload_font: boolean
  export_png_count: number
  create_document_count: number
}

export interface Descriptor {
  "en-US": string
  "pt-BR": string
}

export interface Titles {
  "en-US": string
  "pt-BR": string
}

export interface UpdatedAt {
  seconds: number
  nanoseconds: number
}

export interface SortmentDescriptor {
  "en-US": string
  "pt-BR": string
}

export interface Gateway {
  product: Product2
  interval: any
  gateway_id: string
}

export interface Product2 {
  amount: any
  usage_type: any
  product_id: any
  currency: any
  title: Title
}

export interface Title {
  "en-US": string
  "pt-BR": string
}

export interface Limits {
  export_pdf_low: boolean
  image_upload: boolean
  create_document: boolean
  export_gif: boolean
  document_publish_online: boolean
  export_pdf_medium: boolean
  export_video: boolean
  remove_bg: boolean
  export_gif_count: number
  export_pdf_count: number
  remove_bg_count: number
  use_template_premium_count: number
  icon_stock: boolean
  export_png_medium: boolean
  export_video_count: number
  image_stock: boolean
  export_png_high: boolean
  export_with_watermark: boolean
  export_png_low: boolean
  export_pdf_high: boolean
  font_premium: boolean
  use_template_premium: boolean
  shape_stock: boolean
  upload_font: boolean
  export_png_count: number
  create_document_count: number
}

export interface Profile {
  product: Product3
  current_locale: string
  subscription: Subscription2
}

export interface Product3 {
  id: string
  title: string
  type: string
}

export interface Subscription2 {
  renew_at: string
  product_subscribed: ProductSubscribed2
  payment_status: string
  active: boolean
  created_at: string
  id: string
  is_trial: boolean
  gateway: Gateway2
  limits: Limits2
}

export interface ProductSubscribed2 {
  metadata: any
  app_reference: AppReference3
  is_published: boolean
  active: boolean
  created_at: CreatedAt2
  rules: Rules2
  plan_reference: PlanReference2
  titles: Titles2
  descriptor: Descriptor2
  hotmart_product_id: any
  locale: string[]
  is_default: boolean
  gateway_product_id: any
  is_deleted: boolean
  payment_required: boolean
  updated_at: UpdatedAt2
  sortment_descriptor: SortmentDescriptor2
  is_free: boolean
  team_members: number
  id: string
  from_hotmart: boolean
  gateway_name: any
}

export interface AppReference3 {
  id: string
}

export interface CreatedAt2 {
  seconds: number
  nanoseconds: number
}

export interface Rules2 {
  export_pdf_low: boolean
  image_upload: boolean
  create_document: boolean
  export_gif: boolean
  document_publish_online: boolean
  export_pdf_medium: boolean
  export_video: boolean
  remove_bg: boolean
  export_pdf_count: number
  export_gif_count: number
  remove_bg_count: number
  use_template_premium_count: number
  icon_stock: boolean
  export_png_medium: boolean
  image_stock: boolean
  export_video_count: number
  export_with_watermark: boolean
  export_png_high: boolean
  export_png_low: boolean
  export_pdf_high: boolean
  font_premium: boolean
  use_template_premium: boolean
  shape_stock: boolean
  upload_font: boolean
  export_png_count: number
  create_document_count: number
}

export interface PlanReference2 {
  id: string
}

export interface Titles2 {
  "en-US": string
  "pt-BR": string
}

export interface Descriptor2 {
  "en-US": string
  "pt-BR": string
}

export interface UpdatedAt2 {
  seconds: number
  nanoseconds: number
}

export interface SortmentDescriptor2 {
  "en-US": string
  "pt-BR": string
}

export interface Gateway2 {
  product: Product4
  interval: any
  gateway_id: string
}

export interface Product4 {
  amount: any
  usage_type: any
  product_id: any
  currency: any
  title: Title2
}

export interface Title2 {
  "en-US": string
  "pt-BR": string
}

export interface Limits2 {
  export_pdf_low: boolean
  image_upload: boolean
  create_document: boolean
  export_gif: boolean
  document_publish_online: boolean
  export_pdf_medium: boolean
  export_video: boolean
  remove_bg: boolean
  export_pdf_count: number
  export_gif_count: number
  remove_bg_count: number
  use_template_premium_count: number
  icon_stock: boolean
  export_png_medium: boolean
  image_stock: boolean
  export_video_count: number
  export_with_watermark: boolean
  export_png_high: boolean
  export_png_low: boolean
  export_pdf_high: boolean
  font_premium: boolean
  use_template_premium: boolean
  shape_stock: boolean
  upload_font: boolean
  export_png_count: number
  create_document_count: number
}

export interface SubscriptionRules {
  export_pdf_low: boolean
  image_upload: boolean
  create_document: boolean
  export_gif: boolean
  document_publish_online: boolean
  export_pdf_medium: boolean
  export_video: boolean
  remove_bg: boolean
  export_gif_count: number
  export_pdf_count: number
  remove_bg_count: number
  use_template_premium_count: number
  icon_stock: boolean
  export_png_medium: boolean
  export_video_count: number
  image_stock: boolean
  export_png_high: boolean
  export_with_watermark: boolean
  export_png_low: boolean
  export_pdf_high: boolean
  font_premium: boolean
  use_template_premium: boolean
  shape_stock: boolean
  upload_font: boolean
  export_png_count: number
  create_document_count: number
}

export interface CurrentLocale {
  fbvZngcBbaFZeUK8h0il: string
}

export interface Limits3 {
  export_pdf_low: boolean
  image_upload: boolean
  create_document: boolean
  export_gif: boolean
  document_publish_online: boolean
  export_pdf_medium: boolean
  export_video: boolean
  remove_bg: boolean
  export_pdf_count: number
  export_gif_count: number
  remove_bg_count: number
  use_template_premium_count: number
  gif_stock: boolean
  icon_stock: boolean
  export_png_medium: boolean
  image_stock: boolean
  export_video_count: number
  export_with_watermark: boolean
  export_png_high: boolean
  export_png_low: boolean
  export_pdf_high: boolean
  font_premium: boolean
  use_template_premium: boolean
  shape_stock: boolean
  upload_font: boolean
  export_png_count: number
  create_document_count: number
}
