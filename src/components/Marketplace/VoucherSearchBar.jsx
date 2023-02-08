import { useState, useEffect } from 'react';
//import './App.css';
import { Typography, Box, TextField, Autocomplete } from '@mui/material'
import voucherDataFilter from './VoucherDataFilter';



function VoucherSearchBar() {
 const [input, setInput] = useState('')
 const [list, setList] = useState([

  {"id":1,"type":"Merchant Voucher","description":"description","image":'assets/lander/images/background/fixpremium.jpeg'},
  {"id":2,"type":"Gift Voucher","description":"description","image":'assets/lander/images/background/erwa.jpeg'},
  {"id":3,"type":"FixPremium Voucher","description":"description","image":'assets/lander/images/background/fixpremium.jpeg'},
  {"id":4,"type":"ERWA Vouchers","description":"description","image":'assets/lander/images/background/erwa.jpeg'},
  {"id":5,"type":"Coupons Voucher","description":"description","image":'assets/lander/images/background/fixpremium.jpeg'},
  {"id":6,"type":"Disposable Voucher","description":"description","image":'assets/lander/images/background/erwa.jpeg'}

]);


 const handleInput = (e) => {
   console.log(e.target.value)
   setInput(e.target.value.toLowerCase())
 }

 /*useEffect(() => {
   fetchdata().then(res => setList(res))
 }, [])*/


 return (
   <Box 
     sx={{
       width: 400,
       height: 80,
       margin: '5px auto',
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'space-evenly'
     }}>
     {//<Typography variant='h4' component={'h6'}></Typography>
     }
     <Autocomplete
       disablePortal
       id="combo-box-demo"
       options={list.map(item => item.type)}

       renderInput={(params) => <TextField {...params}
         label="Select voucher type"
         onSelect={handleInput}
         sx={{
           width: 350,
           margin: '10px auto',
         }} />}
     />


     <voucherDataFilter searchstring={input} list={list} />
   </Box>
 );
}

export default VoucherSearchBar;