import React from 'react';
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card';
import MuiCardActions from '@mui/material/CardActions';
import MuiCardContent from '@mui/material/CardContent';
import MuiCardHeader from '@mui/material/CardHeader';
import Link from 'next/link';
import Button from '@components/inputs/Button';
import Typography from '@components/dataDisplay/Typography';

import { ICssProperties } from '@/interfaces';
import { CardProps, CardActionProps } from './interfaces';

function Card({
  children,
  title,
  subheader,
  variant = 'elevation',
  elevation = 0,
  minWidth,
  actions,
  width,
  height,
  position,
  top,
  left,
  right,
  borderRadius,
  padding,
  justifyContent,
  flexDirection,
  alignItems,
  minHeight,
  overflowY,
  marginTop,
  marginBottom,
  background,
  expanded = true,
  ...props
}: ICssProperties & MuiCardProps & CardProps) {
  return (
    <MuiCard
      variant={variant}
      elevation={elevation}
      sx={{
        minWidth,
        minHeight,
        overflowY,
        width: width || '100%',
        height: height || '100%',
        position,
        top,
        left,
        right,
        borderRadius,
        padding,
        display: 'flex',
        alignItems: alignItems || 'center',
        flexDirection: flexDirection || 'row',
        justifyContent: justifyContent || 'center',
        marginTop,
        marginBottom,
        background,
      }}
      {...props}
    >
      <>
        {title && subheader && (
          <MuiCardHeader
            title={
              <Typography variant="h1" color="textPrimary">
                {title}
              </Typography>
            }
            subheader={
              <Typography variant="h4" color="textPrimary" marginTop="10px">
                {subheader}
              </Typography>
            }
          />
        )}

        <MuiCardContent
          sx={{
            padding: 0,
            '&:last-child': {
              paddingBottom: 0,
            },
          }}
        >
          {children}
        </MuiCardContent>

        {expanded ||
          (actions && (
            <MuiCardActions>
              {actions?.map((action: CardActionProps) => {
                if (action.actionType === 'button') {
                  return (
                    <Button
                      key={action.label}
                      onClick={action.action}
                      {...(action.className && {
                        className: action.className,
                      })}
                    >
                      {action.iconElement && action.iconElement}
                      {action.label}
                    </Button>
                  );
                }
                return (
                  <Link key={action?.label} href={action.href}>
                    {action.label}
                  </Link>
                );
              })}
            </MuiCardActions>
          ))}
      </>
    </MuiCard>
  );
}

export default Card;
