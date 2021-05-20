import React from 'react';
import { css } from '@emotion/react';
function blog() {
	return (
		<div
			css={(theme) => ({
				color: theme.colors.primary,
				// background: theme.background.bg,
			})}
		>
			test
		</div>
	);
}

export default blog;
