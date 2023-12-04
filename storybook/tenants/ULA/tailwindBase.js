/** @type {import('tailwindcss').Config} */ 

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
export default {
 safelist: ["font-headings","font-texts","font-Poppins","font-Nunito-Sans","font-icons","bg-logo","bg-favicon"], theme: {
 extend:  {
  "colors": {
    "primary": {
      "0": "var(--primary-0)",
      "50": "var(--primary-50)",
      "100": "var(--primary-100)",
      "200": "var(--primary-200)",
      "300": "var(--primary-300)",
      "400": "var(--primary-400)",
      "500": "var(--primary-500)",
      "600": "var(--primary-600)",
      "700": "var(--primary-700)",
      "800": "var(--primary-800)",
      "900": "var(--primary-900)",
      "950": "var(--primary-950)"
    },
    "secondary": {
      "0": "var(--secondary-0)",
      "50": "var(--secondary-50)",
      "100": "var(--secondary-100)",
      "200": "var(--secondary-200)",
      "300": "var(--secondary-300)",
      "400": "var(--secondary-400)",
      "500": "var(--secondary-500)",
      "600": "var(--secondary-600)",
      "700": "var(--secondary-700)",
      "800": "var(--secondary-800)",
      "900": "var(--secondary-900)",
      "950": "var(--secondary-950)"
    },
    "surface": {
      "0": "var(--surface-0)",
      "50": "var(--surface-50)",
      "100": "var(--surface-100)",
      "200": "var(--surface-200)",
      "300": "var(--surface-300)",
      "400": "var(--surface-400)",
      "500": "var(--surface-500)",
      "600": "var(--surface-600)",
      "700": "var(--surface-700)",
      "800": "var(--surface-800)",
      "900": "var(--surface-900)",
      "950": "var(--surface-950)"
    },
    "info": {
      "0": "var(--info-0)",
      "50": "var(--info-50)",
      "100": "var(--info-100)",
      "200": "var(--info-200)",
      "300": "var(--info-300)",
      "400": "var(--info-400)",
      "500": "var(--info-500)",
      "600": "var(--info-600)",
      "700": "var(--info-700)",
      "800": "var(--info-800)",
      "900": "var(--info-900)",
      "950": "var(--info-950)"
    },
    "warning": {
      "0": "var(--warning-0)",
      "50": "var(--warning-50)",
      "100": "var(--warning-100)",
      "200": "var(--warning-200)",
      "300": "var(--warning-300)",
      "400": "var(--warning-400)",
      "500": "var(--warning-500)",
      "600": "var(--warning-600)",
      "700": "var(--warning-700)",
      "800": "var(--warning-800)",
      "900": "var(--warning-900)",
      "950": "var(--warning-950)"
    },
    "error": {
      "0": "var(--error-0)",
      "50": "var(--error-50)",
      "100": "var(--error-100)",
      "200": "var(--error-200)",
      "300": "var(--error-300)",
      "400": "var(--error-400)",
      "500": "var(--error-500)",
      "600": "var(--error-600)",
      "700": "var(--error-700)",
      "800": "var(--error-800)",
      "900": "var(--error-900)",
      "950": "var(--error-950)"
    },
    "success": {
      "0": "var(--success-0)",
      "50": "var(--success-50)",
      "100": "var(--success-100)",
      "200": "var(--success-200)",
      "300": "var(--success-300)",
      "400": "var(--success-400)",
      "500": "var(--success-500)",
      "600": "var(--success-600)",
      "700": "var(--success-700)",
      "800": "var(--success-800)",
      "900": "var(--success-900)",
      "950": "var(--success-950)"
    },
    "presencial": {
      "0": "var(--presencial-0)",
      "50": "var(--presencial-50)",
      "100": "var(--presencial-100)",
      "200": "var(--presencial-200)",
      "300": "var(--presencial-300)",
      "400": "var(--presencial-400)",
      "500": "var(--presencial-500)",
      "600": "var(--presencial-600)",
      "700": "var(--presencial-700)",
      "800": "var(--presencial-800)",
      "900": "var(--presencial-900)",
      "950": "var(--presencial-950)"
    },
    "online": {
      "0": "var(--online-0)",
      "50": "var(--online-50)",
      "100": "var(--online-100)",
      "200": "var(--online-200)",
      "300": "var(--online-300)",
      "400": "var(--online-400)",
      "500": "var(--online-500)",
      "600": "var(--online-600)",
      "700": "var(--online-700)",
      "800": "var(--online-800)",
      "900": "var(--online-900)",
      "950": "var(--online-950)"
    },
    "híbrida": {
      "0": "var(--híbrida-0)",
      "50": "var(--híbrida-50)",
      "100": "var(--híbrida-100)",
      "200": "var(--híbrida-200)",
      "300": "var(--híbrida-300)",
      "400": "var(--híbrida-400)",
      "500": "var(--híbrida-500)",
      "600": "var(--híbrida-600)",
      "700": "var(--híbrida-700)",
      "800": "var(--híbrida-800)",
      "900": "var(--híbrida-900)",
      "950": "var(--híbrida-950)"
    },
    "salud": {
      "0": "var(--salud-0)",
      "50": "var(--salud-50)",
      "100": "var(--salud-100)",
      "200": "var(--salud-200)",
      "300": "var(--salud-300)",
      "400": "var(--salud-400)",
      "500": "var(--salud-500)",
      "600": "var(--salud-600)",
      "700": "var(--salud-700)",
      "800": "var(--salud-800)",
      "900": "var(--salud-900)",
      "950": "var(--salud-950)"
    }
  },
  "fontFamily": {
    "headings": "var(--headings)",
    "texts": "var(--texts)",
    "Poppins": "var(--Poppins)",
    "Nunito-Sans": "var(--Nunito-Sans)",
    "icons": "var(--icons)"
  },
  "backgroundImage": {
    "logo": "var(--logo)",
    "favicon": "var(--favicon)"
  }
}  
} 
}