import React from 'react';
import { alpha, styled } from '@material-ui/core/styles';

const RootStyle = styled('span')(({ theme, styleProps }) => {
    const { color, variant } = styleProps;

    const styleFilled = (color) => ({
        color: theme.palette[color].contrastText,
        backgroundColor: theme.palette[color].main
    });

    const styleOutlined = (color) => ({
        color: theme.palette[color].main,
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette[color].main}`
    });

    const styleGhost = (color) => ({
        color: theme.palette[color].dark,
        backgroundColor: alpha(theme.palette[color].main, 0.16)
    });

    return {
        height: 22,
        minWidth: 22,
        lineHeight: 0,
        borderRadius: 8,
        cursor: 'default',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 1),
        color: theme.palette.grey[800],
        fontSize: theme.typography.pxToRem(12),
        fontFamily: theme.typography.fontFamily,
        backgroundColor: theme.palette.grey[300],
        fontWeight: theme.typography.fontWeightBold,

        ...(color !== 'default'
            ? {
                  ...(variant === 'filled' && { ...styleFilled(color) }),
                  ...(variant === 'outlined' && { ...styleOutlined(color) }),
                  ...(variant === 'ghost' && { ...styleGhost(color) })
              }
            : {
                  ...(variant === 'outlined' && {
                      backgroundColor: 'transparent',
                      color: theme.palette.text.primary,
                      border: `1px solid ${theme.palette.grey[500_32]}`
                  }),
                  ...(variant === 'ghost' && {
                      color: theme.palette.text.secondary,
                      backgroundColor: theme.palette.grey[500_16]
                  })
              })
    };
});

interface Props {
    color?: 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
    variant?: 'filled' | 'outlined' | 'ghost';
    children?: JSX.Element;
    other?;
    sx?;
}

const Label = (props: Props): JSX.Element => {
    const { color = 'default', variant = 'ghost', children, ...other } = props;
    return (
        <RootStyle styleProps={{ color, variant }} {...other}>
            {children}
        </RootStyle>
    );
};

export default Label;
