import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@font-face {
  font-family: 'Summer Sans';
  src: url('/src/assets/fonts/summer-sans.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

:root {
	
	/* COLORES MODO CLARO*/
    --primary-50: #f7eafc;
	--primary-100: #e7bff5;
	--primary-200: #dba0f0;
	--primary-300: #cb74e9;
	--primary-400: #c159e5;
	--primary-500: #b130de;
	--primary-600: #a12cca;
	--primary-700: #7e229e;
	--primary-800: #611a7a;
	--primary-900: #4a145d;

	--neutral-50: #f3f3f3;
	--neutral-100: #dadada;
	--neutral-200: #c9c9c9;
	--neutral-300: #b0b0b0;
	--neutral-400: #a1a1a1;
	--neutral-500: #898989;
	--neutral-600: #7d7d7d;
	--neutral-700: #616161;
	--neutral-800: #4b4b4b;
	--neutral-900: #3a3a3a;

	--black: #1e1e1e;
	--white: #ffffff;

	--shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05), 0 6px 6px 0 rgba(0, 0, 0, 0.04), 0 14px 8px 0 rgba(0, 0, 0, 0.03), 0 25px 10px 0 rgba(0, 0, 0, 0.01), 0 39px 11px 0 rgba(0, 0, 0, 0);
	--shadow-button: 0 1px 2px 0 rgba(163, 163, 163, 0.15), 0 4px 4px 0 rgba(163, 163, 163, 0.13), 0 9px 6px 0 rgba(163, 163, 163, 0.08), 0 16px 7px 0 rgba(163, 163, 163, 0.02), 0 26px 7px 0 rgba(163, 163, 163, 0);
	--shadow-button-active: 0 1px 1px 0 rgba(186, 186, 186, 0.05), 0 2px 2px 0 rgba(186, 186, 186, 0.04), 0 5px 3px 0 rgba(186, 186, 186, 0.03), 0 9px 4px 0 rgba(186, 186, 186, 0.01), 0 15px 4px 0 rgba(186, 186, 186, 0);
	
	/* Background*/
	--hero-background: url("https://res.cloudinary.com/deq7rk87d/image/upload/v1733086105/hero-image_c5f8bw.jpg");
	--about-background: url("https://res.cloudinary.com/deq7rk87d/image/upload/v1733085936/about-image-1_scptg2.jpg");

	/* FUENTES */
	--font-primary: 'Poppins', sans-serif;
	--font-secondary: 'Summer Sans', sans-serif;

}

[data-theme="dark"] {
		
	/* COLORES MODO OSCURO */
	--primary-50: #3a1d4f;
	--primary-100: #4a2467;
	--primary-200: #602e8e;
	--primary-300: #7e38b7;
	--primary-400: #9b43d0;
	--primary-500: #b14edd;
	--primary-600: #c765e9;
	--primary-700: #dd7df5;
	--primary-800: #eb9af9;
	--primary-900: #f5c0fc;
		
	--neutral-50: #2a2a2a;
	--neutral-100: #3a3a3a;
	--neutral-200: #4b4b4b;
	--neutral-300: #616161;
	--neutral-400: #7d7d7d;
	--neutral-500: #898989;
	--neutral-600: #a1a1a1;
	--neutral-700: #b0b0b0;
	--neutral-800: #c9c9c9;
	--neutral-900: #dadada;
		
	--black: #ffffff;
	--white: #1e1e1e;
		
	--shadow: 0 2px 4px 0 rgba(54, 54, 54, 0.1), 0 7px 7px 0 rgba(54, 54, 54, 0.09), 0 17px 10px 0 rgba(54, 54, 54, 0.05), 0 30px 12px 0 rgba(54, 54, 54, 0.01), 0 46px 13px 0 rgba(54, 54, 54, 0);
	--shadow-button: 0 1px 2px 0 rgba(180, 180, 180, 0.3), 0 4px 4px 0 rgba(180, 180, 180, 0.2), 0 9px 6px 0 rgba(180, 180, 180, 0.15), 0 16px 7px 0 rgba(180, 180, 180, 0.1), 0 26px 7px 0 rgba(180, 180, 180, 0.05);
	--shadow-button-active: 0 1px 1px 0 rgba(200, 200, 200, 0.15), 0 2px 2px 0 rgba(200, 200, 200, 0.1), 0 5px 3px 0 rgba(200, 200, 200, 0.07), 0 9px 4px 0 rgba(200, 200, 200, 0.04), 0 15px 4px 0 rgba(200, 200, 200, 0.02);

}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins";
	transition: background .2s ease;
}

html {
	-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar {
  width: 8px;
  background-color: var(--neutral-50);
}

::-webkit-scrollbar-thumb {
  background-color: var(--neutral-300);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--neutral-400);
}

::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 4px;
}

`;
