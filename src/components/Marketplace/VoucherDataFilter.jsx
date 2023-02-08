import React, { useEffect, useState } from 'react'
import { Stack } from '@mui/system';
import { Paper, Box, Typography } from '@mui/material';


export default function VoucherDataFilter({searchstring, list}) {

const filteredList = list.filter((element) => {
   if (searchstring === '') {
       return element;
   }
   else {
       return element.type.toLowerCase().includes(searchstring)
   }
})



 return (

   <Box>
     <Stack spacing={2}
     sx={{
       overflow: 'auto',
       maxHeight: 500,

     }}
     >


{(searchstring === '')?(
<><div>Selected voucher type details</div></>):(<>{

    filteredList.map((item) => (
              <Paper key={item.id}
              sx={{
                  textAlign:'left'
              }}  >
                  <Typography><strong>Title:</strong> {item.type}</Typography>
                  <Typography><strong>Description:</strong> {item.description}</Typography>
                  {//<Typography><strong>Card:</strong> <img wight="75" height="40" src={item.image}/></Typography>
}
              </Paper>
          ))


          }</>)}


</Stack>
   </Box>
 )
}