export type PageRoute = 'trang-chu' | 'kham-pha' | 'hoi-dap-ai' | 'nguon-tu-lieu' | 'gioi-thieu' | 'ho-so';

export interface ArchitecturalItem {
  id: string;
  code: string;
  name: string;
  subName?: string;
  nativeName?: string;
  region: 'bac-bo' | 'trung-bo' | 'nam-bo' | 'tay-nguyen' | 'tay-bac';
  regionLabel: string;
  province: string;
  provinceLabel: string;
  ethnic: 'kinh' | 'muong' | 'e-de' | 'ha-nhi' | 'tay' | 'cham';
  ethnicLabel: string;
  architecturalType: 'khung-go' | 'san' | 'trinh-tuong' | 'la-mai' | 'noi-song';
  architecturalTypeLabel: string;
  status: 'verified' | 'updating';
  statusLabel: string;
  era: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  structuralFeature: string;
  specialFeature: string;
  materials: string;
  spatialArrangement?: string;
  blueprintCount: string;
  has3D?: boolean;
  length?: string;
  wallThickness?: string;
  elevation?: string;
}

export interface ComponentAnatomy {
  id: string;
  num: string;
  name: string;
  subtitle: string;
  tag: string;
  wood: string;
  desc: string;
  dim: string;
  joint: string;
  height: string;
  carving: string;
  imageUrl: string;
  imageAlt: string;
}

export interface BiblioSource {
  id: string;
  refNum: string;
  code: string;
  title: string;
  authors: string;
  publisher: string;
  year: string;
  format: string;
  typeBadge: string;
  verificationBadge: string;
  usageQuote: string;
  linkedHouseId: string;
  linkedHouseName: string;
  pageCitation: string;
  fieldWorkLocation?: string;
  imageUrl: string;
  imageAlt: string;
}

export interface AiChatMessage {
  id: string;
  sender: 'user' | 'ai';
  time: string;
  content: string;
  verificationTag?: string;
  confidenceScore?: string;
  summaryPoints?: { title: string; desc: string }[];
  heritageReference?: {
    code: string;
    surveyYear: string;
    title: string;
    extractedFields: string[];
    matchPercentage: string;
    blueprintTitle: string;
    blueprintScale: string;
    blueprintImg: string;
  };
  sources?: string[];
  warningNote?: string;
  digitizationContext?: string;
}
