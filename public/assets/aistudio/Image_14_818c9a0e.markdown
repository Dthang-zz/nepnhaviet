---
name: Vietnamese Vernacular Architectural Archive
colors:
  surface: '#fff8f0'
  surface-dim: '#dfd9d1'
  surface-bright: '#fff8f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f3eb'
  surface-container: '#f3ede5'
  surface-container-high: '#ede7df'
  surface-container-highest: '#e7e2da'
  on-surface: '#1d1b17'
  on-surface-variant: '#4f453d'
  inverse-surface: '#32302b'
  inverse-on-surface: '#f6f0e8'
  outline: '#81756c'
  outline-variant: '#d3c4ba'
  surface-tint: '#77583f'
  primary: '#6c4e36'
  on-primary: '#ffffff'
  primary-container: '#87664c'
  on-primary-container: '#ffece0'
  inverse-primary: '#e8bfa0'
  secondary: '#6f5a4d'
  on-secondary: '#ffffff'
  secondary-container: '#faddcc'
  on-secondary-container: '#756052'
  tertiary: '#4e5840'
  on-tertiary: '#ffffff'
  tertiary-container: '#667157'
  on-tertiary-container: '#e8f5d4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#e8bfa0'
  on-primary-fixed: '#2c1604'
  on-primary-fixed-variant: '#5d4129'
  secondary-fixed: '#faddcc'
  secondary-fixed-dim: '#ddc1b1'
  on-secondary-fixed: '#27180e'
  on-secondary-fixed-variant: '#564336'
  tertiary-fixed: '#dbe7c7'
  tertiary-fixed-dim: '#bfcbac'
  on-tertiary-fixed: '#151e0b'
  on-tertiary-fixed-variant: '#404a33'
  background: '#fff8f0'
  on-background: '#1d1b17'
  surface-variant: '#e7e2da'
typography:
  display-hero:
    fontFamily: Noto Serif
    fontSize: 52px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Noto Serif
    fontSize: 34px
    fontWeight: '600'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 46px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Noto Serif
    fontSize: 26px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Noto Serif
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0em
  subhead-editorial:
    fontFamily: Noto Serif
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-technical:
    fontFamily: Be Vietnam Pro
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-data:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 18px
  caption-archival:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system establishes a digital environment for traditional architectural heritage, operating at the intersection of a scholarly archive, an architectural monograph, and a research portal. The aesthetic balances curatorial restraint with physical craftsmanship, avoiding nostalgic pastiche in favor of structural precision, archival clarity, and tactile material depth.

### Brand Atmosphere & Character
- **Scholarly & Curatorial**: Information architecture favors verified documentation, technical terminology, spatial schematics, and provenance over surface-level ornamentation.
- **Architectural & Orthogonal**: Layouts emphasize tectonic discipline—clean 1px structural framing, strictly right-angled intersections, and planar surface shifts reminiscent of technical drawings and architectural monographs.
- **Tactile Materiality**: The interface relies on warm aged paper tones, dry earth pigments, and deep timber tones, creating an ambient reading experience attuned to historical research.

### Design Movement
The system implements a **Refined Editorial Archival** style. It combines traditional print monograph layout standards (authoritative serif titling, tight editorial captions, generous academic margins) with modern digital archival utility (crisp line-work, high-contrast readable type, precise metadata grids, and zero-radius structural framing).

## Colors

The palette is derived directly from traditional building materials: aged timber frameworks, rammed earth, dry clay roof tiles, patinated lime plaster, and aged handmade poonah paper (*giấy điệp/giấy dó*).

### Functional Color Allocation
- **Primary (`#87664C` — Earth Brown / Clay)**: Used for primary structural interactions, section headers, active category indicators, and focused metadata keys.
- **Secondary (`#49372B` — Deep Timber)**: Reserved for authoritative display headings, critical UI anchors, persistent navigation chrome, and high-emphasis controls.
- **Tertiary (`#58634A` — Moss Green / Sage)**: Applied to taxonomy tags, environmental indicators, regional context chips (Bắc Bộ, Trung Bộ, Nam Bộ), and secondary archival classifications.
- **Neutral / Text (`#292722` — Raw Charcoal)**: Maximum legibility for body text, technical notes, and complex data tables against warm grounds. Never use pure black (`#000000`).
- **Canvas / Surfaces**:
  - **Base Canvas (`#F8F5EF` — Natural Ivory)**: Emulates archival rag paper; reduces ocular strain during prolonged reading.
  - **Elevated Surface (`#EDE4D5` — Aged Parchment)**: Used for content cards, inspection drawers, sidebars, and blueprint data panels.
- **Accent (`#A34D3F` — Cinnabar / Vermilion)**: Controlled focal accent for provenance status, archival alerts, blueprint coordinate markers, and key bibliographic milestones.
- **Structural Dividing Borders (`#D8CEBE` / `#E2D9CC`)**: Low-contrast architectural lines that organize content blocks without visual noise.

## Typography

Typography establishes an authoritative editorial tone, handling both classical Vietnamese diacritical marks and technical notation cleanly across viewports.

### Font Hierarchy
- **Editorial & Scholarly Display (`Noto Serif`)**: Brings architectural authority to monographs, building taxonomy names (e.g., *Nhà rường Huế*, *Nhà năm gian Bắc Bộ*), and major architectural chapter headers. Its balanced serifs render tone marks distinctly without vertical clipping.
- **Functional & Technical Body (`Be Vietnam Pro`)**: A contemporary grotesque engineered specifically for the Vietnamese alphabet. It maintains uniform kerning and high legibility across dense archival indices, architectural annotations, citation panels, and interactive controls.

### Typesetting Directives
- Headings maintain a controlled line height to prevent collision with Vietnamese tone markers (*dấu hỏi, dấu ngã, dấu nặng*).
- Architectural metadata and catalogue numbers use `label-technical` with wide letter spacing (`0.08em`) to mimic stamped field-document entries.
- Extended structural essays and architectural descriptions adhere to a line-length limit of 65–75 characters for optimal readability.

## Layout & Spacing

The layout philosophy mirrors an architectural drawing sheet: precise, disciplined, and framed by structural margins. 

### Grid Architecture
- **Desktop (12 Columns, ≥1200px)**: Fluid 12-column grid with a maximum content canvas of 1440px. Outer margins are fixed at `4rem` (`space-2xl`) and column gutters at `2rem` (`gutter-desktop`).
- **Tablet (8 Columns, 768px–1199px)**: 8-column layout with `2.5rem` (`margin-tablet`) outer margins and `1.5rem` gutters. Content splits cleanly between visual assets (5 columns) and archival metadata (3 columns).
- **Mobile (4 Columns, <768px)**: 4-column layout with `1.25rem` (`margin`) outer margins and `1rem` gutters. Multi-column catalog tables stack into structured archival item cards.

### Spacing Discipline
All spacing units are tied to an 8-point base module (with a 4px sub-step for compact metadata tags). Whitespace is deliberate: elements are either bound closely by structural borders or separated by generous breathing room to simulate plate pages in physical folio publications.

## Elevation & Depth

This system avoids synthetic drop shadows and diffuse skeuomorphic blurs, using planar boundaries, tonal shifts, and 1px architectural lines to define depth.

### Structural Depth Tiers
- **Tier 0 (Base Earth)**: Canvas surface (`#F8F5EF`). Passive base layer for continuous scrolling and narrative reading.
- **Tier 1 (Framed Plate)**: Cards, archival indices, and viewer viewports set against `#EDE4D5` and framed with a crisp `1px solid #D8CEBE` perimeter. Completely flat; visual separation is achieved entirely through the shift from Ivory to Parchment.
- **Tier 2 (Elevated Focus / Drawers)**: AI inquiry sheets, specimen detail drawers, and blueprint measurement overlays. They use `#EDE4D5` with an architectural shadow: `0 4px 20px -2px rgba(41, 39, 34, 0.08)`, edged with a `1px solid #87664C` bounding border.
- **Tier 3 (Modal / Archival Lightbox)**: Museum lightbox overlays use a semi-transparent parchment wash (`rgba(41, 39, 34, 0.65)`) with high-contrast document frames.

## Shapes

The shape system is strictly **sharp (`0`)**, with no corner radii applied to any UI element.

### Tectonic Justification
- **Architectural Planarity**: Vietnamese traditional timber joinery (*kỹ thuật mộng dn�ʊH�[Y\�ۈ�X�\�Hܝ��ۘ[[�\��X�[ۜ��X[\�\�[��[��]X\�Y��[Z[�ˈ��[�YRH�ܛ�\���۝�YX�\���X�\�[�\�X[[��XY�K��H
��\��]�[�X�\�[ۊ���]�\�H�\�Y�[XY�H]K�]ۋ[�[�]�Y[\�\�Hܚ\�LYYܙYH�ܛ�\��HY[�]H�[Y\�ۈ[�[X�\�]H�ܙ\��
\��Y��P�X
H�XZ[�Z[��Y�[�[Y[��]�]\X\�[��\��܈[��[�\�Y�������\ۙ[������]ۜ�	�[�\�X�]�H�Y��\�H
���[X\�H\��]�[X�[ۊ�����YY\[X�\�
�L�̐�
H�[�]\�[]�ܞH
ю�QQ�
HX�[[��H�Y]�[H��
�ZY�L�^�HL�
K�Y]\�[��\�Y[��L��ݙ\��[��][ۜ��X\����ۈ
�͍��
H�]Hܚ\��][�H�[��][ۋ��H
���X�ۙ\�H�X��X�[�][�Y
����X��ܛ�[��[��\�[�܈�QMX�ܙ\�\��Y�͍��^�L�̐��ۈݙ\��[��]X\����ۈ
�͍��
H�]]�ܞH^��H
��\�X\�H�]H�Y��\�����ܙ\�\���^�L�̐��]H�۝[�[�\�\��Y�͍�����H�ܙ\�ٙ��]�H�������Y]Y]H�Y�\�	�^ۛ�^H�\Hܚ\��X�[��[\������
Y[��
K�\���Y]\�^[�X�[]X��X�[��H
���Y�[ۈ
��[��Zxn�[�J���[���ܙY[��][�H
\��Y�N��X
K�X��ܛ�[��ؘJNK��
X^�N��X��H
��\���H�]�X�ܛ�\
0蛈8n�X���n�ZH0��
J���X\����ۈ�][�H
\��Y�͍��
K^�L�̐���H
��\��]�[�\�X�]H��]\�
�n�[��0�ZH1�xn��JJ����\�Z[[ۈ�][�H
\��Y�L�ј
K^�L�ј�X��ܛ�[��ؘJM��������X������\��]X�\�[\��]�H�\�H�\��X�N��QMX[����Y[�\��Y��P�X��HXY\��\��]X�\�[�]�[��܈Y�\�\��][ۈܝ�ܘ\X����]Y�K]�YY�H�]H���H�ܙ\�و\��Y��P�X��H��N�^[�]\�\��X�K[Y[�\��[Y[���X]\�[��H�][���[X�\�[�X�[]X��X�[H��X�\�H�[YH[�XY[�K\�X
����\�Y�
K[�H��X��[[��^K]�[YHܚY�܈��X�\�[Y]�X��
��B<:��v����:����:��I���ࠢ222��WBf�V�G2b6V&6�6��G&��0��7W&f6R4c�cTTf�g&�VBv�F��6�ƖB4C�4T$V�FW�B��&�G���F6�&6���3#�#s#&���f�7W27FFS�&�&FW"G&�6�F���2F��6�ƖB3�sccD6�v�F�����W"��&Ɩ�R��v�Ɩv�B���v��v��r&��w2�"��v��&F�W2f�7W2���2��6V&6�G&�vvW'2��6�VFRFV6��6�&��B&Vf���R�r��E%U��^�EB��"<j���7G��VB���&V��FV6��6��3�sccD6�ࠢ2226�V6�&��W2b&F��6V�V7F�'0��7G&�7Fǒ7V&R�g�9rg����&F�W2��6�ƖB3�sccD6�&6�w&�V�B4c�cTTf��6V�V7FVB7FFS�f���VBv�F�FVWF��&W"�3C�3s$&�F�7����r&V6�6R�6�'��FW&��F�6��"6�ƖB6V�FW&VB7V&R��F�6F�"ࠢ222&6��f�Ɩ�VvRb6�FF���&�fV��6R&��6�0��&�&FW"��VgB66V�C�7�6�ƖB3�sccD6��7W&f6S�f�BvVB&6��V�B�4TDSDCV��v�F���FW&��FF��r76R��F�B6F����&6��f�FW�BFWF�Ɩ�r7W'fW�FFW2�f�V�B&6��FV7B�&�&Ɩ�w&��2&VfW&V�6W2��B&6��f�fW&6�G��G2ࠢ222FV6��6�&�VW&��BbƖ�R�'Bf�WvW ��6�f2&6�w&�V�B3#�#s#&�"4TDSDCVv�F���fW&��FV6��6�w&�B�7V'F�R#�w&�FƖ�W2B&v&�#b�#b����"����f��F��r�TBF���&#��&F�W2�4TDSDCV�FR��6�ƖB4C�4T$V&�&FW"�fVGW&��rfV7F�"66�RF�vv�W2���W"f�6�&�ƗG�6��G&��2���r��V�r~�r��:������;6�r���B6��&F��FR&VF�WG2���&V��FV6��6�ࠢ222&W6V&6�G&vW ��6ƖFW2g&��F�R&�v�Bf�Ww�'B�&v���C��v�GF���FW6�F��R����&��R���f�B4TDSDCV7W&f6Rg&�VB��F�R�VgB'��6�ƖB3�sccD6����6�VFW2�7F�fR6�FF���7G&VӢV6�6����2�&VBv�F�'&6�WFVB&6��f�&VfW&V�6RFrƖ涖�rF�&V7FǒF�f�V�B7W'fW�2�"�W6WV�&V6�&G2