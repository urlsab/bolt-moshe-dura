export interface Promotion {
  id: number;
  title?: string;
  description?: string;
  productId?: number;
  regularPrice?: number;
  salePrice?: number;
  discount?: number;
  validUntil?: string;
  imageSrc?: string;
}