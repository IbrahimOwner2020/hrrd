import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
    body {
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }
    a {
        text-decoration: none;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    p {
        margin: 0;
    }
`;

export default GlobalStyles;