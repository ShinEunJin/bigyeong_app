export interface PhotoType {
  _id: string;
  category: 'TORIDE' | 'TODEST';
  imageUri: string;
  title: string;
  location: string;
  detailLocation: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
