import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
	<>
		<Global
			styles={css`
				body {
					color: black;
				}

				* {
					margin: 0;
					text-decoration: none;
				}
			`}
		/>
	</>
);

export default GlobalStyles;
