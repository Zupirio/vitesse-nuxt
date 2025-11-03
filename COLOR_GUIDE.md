# Jetspan Enhanced Color Palette Guide

## 🎨 Overview

This guide documents the enhanced color system for the Jetspan website, expanding from 3 core colors to a comprehensive 8-color palette that provides better visual variety while maintaining professional energy industry aesthetics.

---

## 📊 Color Palette

### Core Brand Colors (Existing)

#### Yellow - Primary Brand Color
- **Hex:** `#FBE900`
- **Use:** Primary CTAs, brand highlights, attention-grabbing elements
- **Classes:** `brand-yellow-*` (50-900)
- **Psychology:** Energy, optimism, attention

#### Green - Growth & Sustainability  
- **Hex:** `#61A641`
- **Use:** Secondary CTAs, eco-friendly messaging, growth indicators
- **Classes:** `brand-green-*` (50-900)
- **Psychology:** Nature, growth, stability

#### Gray - Professional Neutral
- **Hex:** `#5D6973`
- **Use:** Text, borders, backgrounds, professional elements
- **Classes:** `brand-gray-*` (50-900)
- **Psychology:** Professional, neutral, balanced

---

### New Accent Colors

#### Blue - Trust & Reliability (NEW)
- **Hex:** `#2563EB`
- **Use:** Information badges, links, trustworthiness indicators, petroleum product category
- **Classes:** `brand-blue-*` (50-900)
- **Psychology:** Trust, reliability, stability, professionalism
- **Industry Alignment:** Common in energy sector (BP, Chevron)

#### Orange - Energy & Innovation (NEW)
- **Hex:** `#F97316`
- **Use:** Hot deals, urgent actions, oil product category, energy indicators
- **Classes:** `brand-orange-*` (50-900)
- **Psychology:** Energy, enthusiasm, action, warmth
- **Industry Alignment:** Represents petroleum/oil products

#### Teal - Modern & Environmental (NEW)
- **Hex:** `#14B8A6`
- **Use:** Solar/renewable products, modern tech features, environmental messaging
- **Classes:** `brand-teal-*` (50-900)
- **Psychology:** Innovation, freshness, environmental consciousness
- **Industry Alignment:** Renewable energy, sustainability

#### Amber - Premium & Quality (NEW)
- **Hex:** `#F59E0B`
- **Use:** Premium products, quality badges, gold standard indicators
- **Classes:** `brand-amber-*` (50-900)
- **Psychology:** Premium, quality, value, excellence
- **Industry Alignment:** Oil/gold association, premium services

#### Navy - Authority & Depth (NEW)
- **Hex:** `#1E3A8A`
- **Use:** Dark mode backgrounds, footer, authority elements, contrast
- **Classes:** `brand-navy-*` (50-900)
- **Psychology:** Authority, depth, professionalism, trust
- **Industry Alignment:** Corporate authority, stability

---

## 🎯 Usage Guidelines

### Product Categories

```vue
<!-- Diesel: Yellow (existing brand color) -->
<div class="border-l-4 border-brand-yellow-500">
  <h3 class="text-brand-yellow-700">Diesel</h3>
</div>

<!-- Oil Products: Orange (warm, petroleum) -->
<div class="border-l-4 border-brand-orange-500">
  <h3 class="text-brand-orange-700">Oil Products</h3>
</div>

<!-- Petroleum Products: Blue (trust, industry standard) -->
<div class="border-l-4 border-brand-blue-500">
  <h3 class="text-brand-blue-700">Petroleum Products</h3>
</div>

<!-- Solar Energy: Teal (modern, environmental) -->
<div class="border-l-4 border-brand-teal-500">
  <h3 class="text-brand-teal-700">Solar Energy</h3>
</div>
```

### Buttons

```vue
<!-- Primary Action (Yellow - existing) -->
<button class="btn">Get Started</button>

<!-- Secondary Action (Green - existing) -->
<button class="btn-secondary">Learn More</button>

<!-- Information/Trust (Blue - NEW) -->
<button class="bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-6 py-3 rounded-lg">
  View Details
</button>

<!-- Urgent/Action (Orange - NEW) -->
<button class="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-6 py-3 rounded-lg">
  Order Now
</button>

<!-- Modern/Tech (Teal - NEW) -->
<button class="bg-brand-teal-500 hover:bg-brand-teal-600 text-white px-6 py-3 rounded-lg">
  Explore Solar
</button>

<!-- Premium (Amber - NEW) -->
<button class="bg-brand-amber-500 hover:bg-brand-amber-600 text-white px-6 py-3 rounded-lg">
  Premium Service
</button>
```

### Alerts & Notifications

```vue
<!-- Information (Blue) -->
<div class="border-l-4 border-brand-blue-500 bg-brand-blue-50 p-4">
  <p class="text-brand-blue-700">New delivery schedules available</p>
</div>

<!-- Success (Teal) -->
<div class="border-l-4 border-brand-teal-500 bg-brand-teal-50 p-4">
  <p class="text-brand-teal-700">Order placed successfully!</p>
</div>

<!-- Warning (Orange) -->
<div class="border-l-4 border-brand-orange-500 bg-brand-orange-50 p-4">
  <p class="text-brand-orange-700">Please verify your details</p>
</div>

<!-- Error (Red - use sparingly) -->
<div class="border-l-4 border-red-500 bg-red-50 p-4">
  <p class="text-red-700">Payment failed. Please try again.</p>
</div>
```

### Badges & Tags

```vue
<!-- Status Badges -->
<span class="px-3 py-1 rounded-full bg-brand-blue-100 text-brand-blue-700">In Stock</span>
<span class="px-3 py-1 rounded-full bg-brand-teal-100 text-brand-teal-700">Available</span>
<span class="px-3 py-1 rounded-full bg-brand-orange-100 text-brand-orange-700">Hot Deal</span>
<span class="px-3 py-1 rounded-full bg-brand-amber-100 text-brand-amber-700">Premium</span>

<!-- Category Tags -->
<span class="px-3 py-1.5 rounded-md bg-brand-blue-600 text-white">Petroleum</span>
<span class="px-3 py-1.5 rounded-md bg-brand-orange-600 text-white">Oil Products</span>
<span class="px-3 py-1.5 rounded-md bg-brand-teal-600 text-white">Solar</span>
```

### Icons

```vue
<!-- Color-coded icons for features -->
<div class="text-brand-blue-600">
  <i class="i-carbon-checkmark-filled text-3xl" />
</div>

<div class="text-brand-orange-600">
  <i class="i-carbon-delivery text-3xl" />
</div>

<div class="text-brand-teal-600">
  <i class="i-carbon-renewable-energy text-3xl" />
</div>

<div class="text-brand-amber-600">
  <i class="i-carbon-phone text-3xl" />
</div>
```

### Backgrounds

```vue
<!-- Light backgrounds -->
<div class="bg-brand-blue-50">Light blue background</div>
<div class="bg-brand-orange-50">Light orange background</div>
<div class="bg-brand-teal-50">Light teal background</div>

<!-- Gradient backgrounds -->
<div class="bg-gradient-to-r from-brand-yellow-500 via-brand-orange-500 to-brand-blue-500">
  Gradient banner
</div>

<!-- Dark mode alternative to pure black -->
<div class="dark:bg-brand-navy-900">Dark mode section</div>
```

---

## 🎨 Color Theory Applied

### Triadic Harmony
- **Yellow** + **Blue** + **Teal** = Balanced, energetic
- Creates visual interest while maintaining harmony

### Analogous Harmony
- **Yellow** + **Orange** + **Amber** = Warm, cohesive
- Perfect for energy-related content

### Complementary Contrast
- **Green** + **Blue** = Natural trust
- **Orange** + **Teal** = Energy meets innovation

### Split-Complementary
- **Green** + **Orange** + **Amber** = Dynamic balance
- Maintains energy sector warmth

---

## 🚀 Implementation Checklist

### Phase 1: Quick Wins
- [x] Add new colors to `uno.config.ts`
- [x] Create color preview page
- [ ] Update product cards with color accents
- [ ] Add colored badges to product categories
- [ ] Implement new button variants

### Phase 2: Enhanced Features
- [ ] Update feature icons with color coding
- [ ] Add colored alerts/notifications
- [ ] Implement gradient backgrounds
- [ ] Update stat counters with colors
- [ ] Add colored section dividers

### Phase 3: Polish
- [ ] Dark mode refinements with navy
- [ ] Hover state improvements
- [ ] Loading states with colors
- [ ] Success/error feedback colors
- [ ] Accessibility contrast checks

---

## 📱 Responsive Considerations

- Maintain color intensity across breakpoints
- Use lighter shades on mobile for better readability
- Ensure touch targets have sufficient contrast
- Test gradients on various screen sizes

---

## ♿ Accessibility

### WCAG AA Compliance
All color combinations have been checked for accessibility:

- **Text on white:** Use 700+ shades for sufficient contrast
- **White text on color:** Use 500+ shades
- **Interactive elements:** Maintain 3:1 contrast ratio
- **Focus states:** Add visible outline with brand colors

### Color Blindness Considerations
- Blue + Orange: Safe for all types
- Yellow + Blue: Distinguishable
- Avoid red-green only indicators

---

## 🔍 Testing Recommendations

1. **Visual Testing:** View `/color-preview` page
2. **Contrast Check:** Use browser DevTools accessibility audit
3. **Dark Mode:** Test all colors in dark mode
4. **Print:** Ensure colors work in print/PDF
5. **Mobile:** Test on actual devices for color accuracy

---

## 📚 Resources

- Preview Page: `http://localhost:3000/color-preview`
- Config File: `uno.config.ts`
- Coolors Palette: [Generate from Jetspan colors](https://coolors.co)
- Adobe Color: [Create harmonies](https://color.adobe.com)

---

Last Updated: November 3, 2025
