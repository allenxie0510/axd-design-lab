---
name: frog Professional
description: A bold, confident design system inspired by frog design - featuring high-contrast black and white aesthetics, large serif typography, and a professional yet creative tone. Hero sections with black backgrounds and white text create dramatic impact, while clean white content areas maintain readability.
colors:
  background: "#FFFFFF"
  surface: "#F5F5F5"
  surfaceSecondary: "#EEEEEE"
  surfaceElevated: "#FFFFFF"
  primary: "#000000"
  secondary: "#333333"
  muted: "#666666"
  border: "#E0E0E0"
  borderLight: "#EEEEEE"
  borderMedium: "#CCCCCC"
  accent: "#000000"
  heroBg: "#000000"
  heroText: "#FFFFFF"
typography:
  display:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: 96px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: -0.02em
  heading:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.01em
  subheading:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: normal
  bodyLarge:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.1em
    textTransform: uppercase
rounded:
  none: 0px
  sm: 0px
  md: 0px
  lg: 0px
  xl: 0px
  full: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  5xl: 128px
components:
  buttonPrimary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background}"
    rounded: "{rounded.none}"
    padding: 16px 32px
    typography: "{typography.label}"
  buttonSecondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    border: "1px solid {colors.primary}"
    rounded: "{rounded.none}"
    padding: 16px 32px
    typography: "{typography.label}"
  card:
    backgroundColor: "{colors.surface}"
    border: "none"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  navLink:
    typography: "{typography.body}"
    textColor: "{colors.primary}"
  section:
    padding: "{spacing.4xl} 0"
  container:
    maxWidth: 1400px
    padding: "0 24px"
---

## Overview

frog Professional is a bold, confident design system inspired by the legendary frog design consultancy. It features dramatic black hero sections with large serif typography, clean white content areas, and a professional yet creative aesthetic that conveys authority and innovation.

## Colors

- **Background (#FFFFFF):** Clean white for content areas
- **Hero Background (#000000):** Pure black for dramatic hero sections
- **Primary (#000000):** Pure black for text and headings
- **Secondary (#333333):** Dark gray for body text
- **Muted (#666666):** Medium gray for captions
- **Hero Text (#FFFFFF):** White text on black backgrounds

## Typography

Georgia serif for large display headings creates an editorial, authoritative feel. Inter for body text ensures readability. The contrast between serif headings and sans-serif body creates visual hierarchy.

## Layout

Max-width 1400px containers with 24px padding. Hero sections are full-width black with centered white text. Content areas are white with black text.

## Components

Buttons are rectangular with sharp corners (no border-radius). Cards have no borders or shadows. Navigation is minimal with simple text links.

## Key Characteristics

1. **High Contrast**: Black and white only, no gray backgrounds
2. **Large Typography**: 96px display headings for impact
3. **Serif Display**: Georgia for headlines, Inter for body
4. **Sharp Corners**: Zero border-radius throughout
5. **Dramatic Heroes**: Full-width black sections with white text
6. **Minimal Decoration**: No shadows, no gradients, no embellishments
