import { Box, Typography } from '@mui/material';
import React from 'react'

export default function SidebarCategoryLink({openCategory, data, i}) {
    console.log(i);
  return (<Box>
    {openCategory  && (
      <Box sx={{ display: "block", position: "absolute", marginLeft: 50 }}>
        {data.nameCategory &&
          data.nameCategory.map((item, i) => {
            return <Typography>{item.nameLink}</Typography>;
          })}
      </Box>
    )}
    </Box>
  )
}
