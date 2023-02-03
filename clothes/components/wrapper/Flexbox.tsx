import { Box } from "@mui/material"
import { SxProps, Theme } from "@mui/material/styles"

interface FlexBoxProps {
  children: React.ReactNode
  sx?: SxProps<Theme>
}

export const FlexBox = ({ sx, children }: FlexBoxProps) => {
  return (
    <Box
      sx={[
        { display: "flex" },
        // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  )
}