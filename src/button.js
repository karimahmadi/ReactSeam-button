import React, {Children} from 'react';
import {Button as MuiButton} from '@material-ui/core';

const Button = ({
									disabled,
									fullWidth,
									disableFocusRipple,
									disableRipple,
									size,
									className,
									variant,
									color,
									startIcon,
									endIcon,
									children,
									onClick,
								}) => {
	return (
		< MuiButton
			disabled={disabled}
			fullWidth={fullWidth}
			disableFocusRipple={disableFocusRipple}
			disableRipple={disableRipple}
			size={size}
			className={className}
			onClick={onClick}
			variant={variant}
			color={color}
			startIcon={startIcon}
			endIcon={endIcon}
		>
			{Children.toArray(children)}
		</MuiButton>
	);
};

export default Button;



