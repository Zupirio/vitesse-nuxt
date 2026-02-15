export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: string
  icon: string
  title: string
  subtitle: string
  description: string
  color: 'yellow' | 'green' | 'blue' | 'teal' | 'amber' | 'orange'
  route?: string
  specifications: ProductSpec[]
  features: string[]
  applications: string[]
}

/**
 * All Jetspan products — single source of truth.
 * Used on homepage ProductsShowcase, /products page, contact form select,
 * and footer navigation.
 */
export const products: Product[] = [
  {
    id: 'diesel-ulsd',
    icon: 'i-carbon-gas-station',
    title: 'Diesel',
    subtitle: 'Ultra-Low Sulphur Diesel',
    description: 'Premium quality Ultra-Low Sulphur Diesel (ULSD) meeting the highest environmental and performance standards. Ideal for industrial machinery, transportation fleets, and commercial applications.',
    color: 'yellow',
    route: '/en590-diesel',
    specifications: [
      { label: 'Sulphur Content', value: '< 10 ppm' },
      { label: 'Cetane Number', value: '≥ 51' },
      { label: 'Density @ 15°C', value: '820-845 kg/m³' },
      { label: 'Flash Point', value: '≥ 55°C' },
    ],
    features: [
      'Reduced emissions and environmental impact',
      'Enhanced engine performance and longevity',
      'Complies with Euro 5/6 standards',
      'Reliable year-round supply',
      'Bulk delivery options available',
      'Competitive pricing for large volumes',
    ],
    applications: [
      'Industrial machinery',
      'Transportation fleets',
      'Mining operations',
      'Construction equipment',
      'Agricultural machinery',
      'Power generation',
    ],
  },
  {
    id: 'crude-oil',
    icon: 'i-carbon-industry',
    title: 'Oil Products',
    subtitle: 'Premium Grade Oil',
    description: 'High-quality oil products sourced from reliable international suppliers. Available in various grades to meet specific refinery requirements and industrial applications.',
    color: 'orange',
    specifications: [
      { label: 'API Gravity', value: '30-40°' },
      { label: 'Sulphur Content', value: 'Sweet/Sour grades' },
      { label: 'Viscosity', value: 'Varies by grade' },
      { label: 'Pour Point', value: 'Grade dependent' },
    ],
    features: [
      'Multiple grade options available',
      'Flexible volume requirements',
      'Global sourcing network',
      'Quality certification provided',
      'Technical support and analysis',
      'Logistics coordination included',
    ],
    applications: [
      'Refinery operations',
      'Petrochemical production',
      'Industrial fuel processing',
      'Lubricant manufacturing',
      'Chemical feedstock',
      'Energy production',
    ],
  },
  {
    id: 'petroleum-products',
    icon: 'i-carbon-gas-station',
    title: 'Petroleum Products',
    subtitle: 'Comprehensive Range',
    description: 'Complete portfolio of petroleum products including petrol, jet fuel, lubricants, and specialty products. Tailored solutions for diverse industrial and commercial requirements.',
    color: 'blue',
    specifications: [
      { label: 'Product Range', value: 'Petrol, Jet Fuel, Lubricants' },
      { label: 'Quality Standards', value: 'International specs' },
      { label: 'Delivery', value: 'Bulk & packaged' },
      { label: 'Custom Blends', value: 'Available' },
    ],
    features: [
      'Wide product selection',
      'Custom blending services',
      'Quality assurance testing',
      'Fast delivery nationwide',
      'Technical consultation',
      'Competitive bulk pricing',
    ],
    applications: [
      'Aviation industry',
      'Automotive sector',
      'Manufacturing facilities',
      'Marine operations',
      'Industrial applications',
      'Commercial fleets',
    ],
  },
  {
    id: 'solar-solutions',
    icon: 'i-carbon-solar-panel',
    title: 'Solar Energy Solutions',
    subtitle: 'Sustainable Power',
    description: 'Comprehensive solar energy solutions for businesses looking to reduce costs and environmental impact. From consultation to installation and maintenance.',
    color: 'teal',
    route: '/solar-solutions',
    specifications: [
      { label: 'Panel Efficiency', value: '≥ 20%' },
      { label: 'System Capacity', value: '10kW - 5MW+' },
      { label: 'Warranty', value: '25 years performance' },
      { label: 'Monitoring', value: 'Real-time remote' },
    ],
    features: [
      'Custom system design',
      'Professional installation',
      'Grid-tied and off-grid options',
      'Energy storage solutions',
      'Maintenance and support',
      'ROI analysis and financing',
    ],
    applications: [
      'Industrial facilities',
      'Commercial buildings',
      'Manufacturing plants',
      'Warehouses',
      'Agricultural operations',
      'Remote installations',
    ],
  },
  {
    id: 'gas-lpg',
    icon: 'i-carbon-flame',
    title: 'Gas (LPG)',
    subtitle: 'Instant Heat. Cleaner Energy.',
    description: 'Bulk LPG supply for industry, hospitality, and agriculture. Clean-burning, portable fuel that heats faster than electricity and burns cleaner than diesel.',
    color: 'amber',
    route: '/gas-lpg',
    specifications: [
      { label: 'Compliance', value: 'SANS 10087-1' },
      { label: 'Supply', value: 'Bulk & cylinder' },
      { label: 'Delivery', value: 'Scheduled & on-demand' },
      { label: 'Applications', value: 'Industrial & commercial' },
    ],
    features: [
      'SANS 10087 certified supply chain',
      'Scheduled and on-demand delivery',
      'Bulk storage installation',
      'Registered gas practitioners',
      'Emergency response protocols',
      'Full compliance documentation',
    ],
    applications: [
      'Forklifts & material handling',
      'Hospitality & commercial kitchens',
      'Industrial boilers & heating',
      'Agricultural processing',
      'Manufacturing processes',
      'Backup energy systems',
    ],
  },
]

/**
 * Product color map for dynamic class binding.
 * Maps product color names to UnoCSS utility classes.
 * Used in ProductsShowcase, WhyChooseUs, and About core values.
 */
export const productColorMap: Record<Product['color'], {
  bg: string
  text: string
  bgLight: string
  iconText: string
  hoverBg: string
  hoverText: string
}> = {
  yellow: { bg: 'bg-jetspan-yellow', text: 'text-jetspan-black', bgLight: 'bg-jetspan-yellow/20', iconText: 'text-jetspan-yellow', hoverBg: 'group-hover:bg-jetspan-yellow', hoverText: 'group-hover:text-jetspan-black' },
  green: { bg: 'bg-jetspan-green', text: 'text-white', bgLight: 'bg-jetspan-green/20', iconText: 'text-jetspan-green', hoverBg: 'group-hover:bg-jetspan-green', hoverText: 'group-hover:text-white' },
  blue: { bg: 'bg-jetspan-blue', text: 'text-white', bgLight: 'bg-jetspan-blue/20', iconText: 'text-jetspan-blue', hoverBg: 'group-hover:bg-jetspan-blue', hoverText: 'group-hover:text-white' },
  teal: { bg: 'bg-jetspan-teal', text: 'text-white', bgLight: 'bg-jetspan-teal/20', iconText: 'text-jetspan-teal', hoverBg: 'group-hover:bg-jetspan-teal', hoverText: 'group-hover:text-white' },
  amber: { bg: 'bg-jetspan-amber', text: 'text-jetspan-black', bgLight: 'bg-jetspan-amber/20', iconText: 'text-jetspan-amber', hoverBg: 'group-hover:bg-jetspan-amber', hoverText: 'group-hover:text-jetspan-black' },
  orange: { bg: 'bg-jetspan-orange', text: 'text-white', bgLight: 'bg-jetspan-orange/20', iconText: 'text-jetspan-orange', hoverBg: 'group-hover:bg-jetspan-orange', hoverText: 'group-hover:text-white' },
}

/** Product names for use in dropdowns/selects */
export const productNames = products.map(p => p.title)
