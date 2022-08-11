import { Theme } from '@material-ui/core';

const IconButton = (theme: Theme) => {
    return {
        MuiIconButton: {
            variants: [
                {
                    props: { color: 'default' },
                    style: {
                        '&:hover': { backgroundColor: theme.palette.action.hover }
                    }
                },
                {
                    props: { color: 'inherit' },
                    style: {
                        '&:hover': { backgroundColor: theme.palette.action.hover }
                    }
                }
            ],

            styleOverrides: {
                root: {}
            }
        }
    };
};

export default IconButton;
