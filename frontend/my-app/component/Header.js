import React from 'react';
import styled from '@emotion/styled';

function Header() {
	return (
		<HeaderStyled>
			<div className='title'>Movie.com</div>
		</HeaderStyled>
	);
}
const HeaderStyled = styled.header`
	background: gray;
	/* height: 50px; */
	border: 2px solid black;
	.title {
		padding: 10px;
		font-weight: bold;
		font-size: 32px;
	}
`;

export default Header;
