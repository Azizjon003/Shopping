import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import SidebarCategoryLink from "./SidebarCategoryLink";

export default function SidebarCategory({ data, i }) {
  // console.log(open);

  const [openCategory, setOpenCategory] = useState(false);
  
  const onMouseEnterFunction = (e) => {
    setOpenCategory(true)
  }

  return (
    <>
      <Box>
        <Typography
          onMouseEnter={onMouseEnterFunction}
            onMouseLeave={(e) => setOpenCategory(false)}
          //   onMouseUpCapture={(e) => setOpenCategory(true)}
          //   onMouse
        //   key={i}
          component="div"
          variant="p"
          sx={{ my: 1, width: 300}}
        >
          {data.name}
     <SidebarCategoryLink  openCategory={openCategory} data={data} i={i}/>
        </Typography>
     </Box>
    </>
  );
}
