export interface Design {
  is_template: boolean,
  app_reference: {
    id: string
  },
  products: [
    {
      app_product_reference: object,
      created_at: object
    }
  ],
  tags: [],
  cover: {
    raw: string,
    medium: string,
    high: string,
    low: string
  },
  is_deleted: boolean,
  is_premium: boolean,
  user_reference: {
    id: string
  },
  is_renamed: boolean,
  thumbs: {
    raw: string,
    medium: string,
    high: string,
    low: string
  },
  allow_preview: boolean,
  theme_reference: {
    id: string
  },
  author: {
    name: string
  },
  module: null,
  created_at: string,
  published: boolean,
  page_format_reference: {
    id: string
  }
  printable: boolean,
  pages: [],
  updated_at: string,
  app_demo: boolean,
  provider: string,
  price: string,
  is_printable: boolean,
  is_public: boolean,
  published_at: string,
  slug: null,
  is_featured: boolean,
  id: string,
  title: string
}