// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   styled,
//   Stack,
//   Grid,
//   InputBase,
//   Badge,
//   Avatar,
//   Menu,
//   MenuItem,
//   Container,
//   Link,
// } from "@mui/material";
// import React, { useState } from "react";
// import SchoolIcon from "@mui/icons-material/School";
// import { Mail, Notifications } from "@mui/icons-material";
// import SearchIcon from "@mui/icons-material/Search";
// import { Box } from "@mui/system";

// const Navbar = function () {
//   const [open, setOpen] = useState(false);

//   const UserAfterRegistr = styled("div")(() => ({
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   }));

//   const Icons = styled(Box)(({ theme }) => ({
//     display: "none",
//     gap: "20px",
//     alignItems: "center",
//     [theme.breakpoints.up("sm")]: {
//       display: "flex",
//     },
//   }));
//   const UserIcons = styled(Box)(({ theme }) => ({
//     display: "flex",
//     gap: "10px",
//     alignItems: "center",
//     [theme.breakpoints.up("sm")]: {
//       display: "none",
//     },
//   }));
//   const Search = styled(Box)((theme) => ({
//     backgroundColor: "#fff",
//     border: "1px solid #8e9aaf",
//     display: "flex",
//     alignItems: "center",
//     padding: "5px 10px",
//     width: "40%",
//     borderTopRightRadius: "20px",
//     borderBottomLeftRadius: "20px",
//     gap: "5px",
//   }));

//   const StyleTypography = styled(Typography)({
//     fontSize: "1.5rem",
//     color: "#8e9aaf",
//   });

//   return (
//     <AppBar position="sticky" sx={{ padding: "20px" }}>
//       <Container>
//         <Stack
//           direction="row"
//           justifyContent="space-between"
//           alignItems="center"
//         >
//           <StyleTypography
//             variant="h6"
//             sx={{ display: { xs: "none", sm: "block" } }}
//           >
//             Learn MUI!
//           </StyleTypography>
//           <SchoolIcon sx={{ display: { xs: "block", sm: "none" } }} />
//           <Search>
//             <SearchIcon color="secondary" />
//             <InputBase
//               placeholder="Search..."
//               sx={{ width: "80%", color: "#8e9aaf" }}
//             >
//               Icons
//             </InputBase>
//           </Search>
//           <Icons>
//             {/* user without  registration */}
//             <Typography variant="h6" sx={{ cursor: "pointer" }}>
//               <Link
//                 href="/login"
//                 color="secondary"
//                 sx={{ cursor: "pointer", listStyle: "none" }}
//               >
//                 Login
//               </Link>
//             </Typography>
//             <Typography variant="h6" sx={{ cursor: "pointer" }}>
//               <Link href="/signUp" color="secondary" sx={{ cursor: "pointer" }}>
//                 Sign Up
//               </Link>
//             </Typography>
//             {/* user without  registration  finished*/}

//             {/* user after registered */}

//             {/* <Badge badgeContent={4} color="red">
//             <Mail color="error " />
//           </Badge>
//           <Badge badgeContent={4} color="red">
//             <Notifications color="error " />
//           </Badge>

//           <Avatar
//             alt="Remy Sharp"
//             src="../img.jpg"
//             onClick={(e) => setOpen(true)}
//           /> */}

//             {/* user after registered finished */}
//           </Icons>
//           <UserIcons onClick={(e) => setOpen(true)}>
//             <Avatar alt="Remy Sharp" src="../img.jpg" />
//             <Typography>Mamur</Typography>
//           </UserIcons>
//         </Stack>
//         <Menu
//           id="demo-positioned-menu"
//           aria-labelledby="demo-positioned-button"
//           open={open}
//           onClose={(e) => setOpen(false)}
//           anchorOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//         >
//           <MenuItem>Profile</MenuItem>
//           <MenuItem>Logout</MenuItem>
//           <MenuItem>My account</MenuItem>
//         </Menu>
//       </Container>
//     </AppBar>
//   );
// };

// export default Navbar;
