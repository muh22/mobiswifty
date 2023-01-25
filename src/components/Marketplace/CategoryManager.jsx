import React, { useState, useRef,useEffect } from "react";
import axios from 'axios';
import { Paper, Grid, Typography, ButtonBase } from "@material-ui/core";

import marketplaceImage from "../../images/sliders/m-2.jpg";
import BottomMenu from "../../components/Home/BottomMenu";

import './CategoryStyler.css';

export default function CategoryManager() {
    //const navigate = useNavigate();
    //const classes = useStyles();
    const qrRef = useRef(null);
    
     const[data,setData]=useState([{
        "id": "8241755934760831398",
        "name": "Agriculture",
        "internalName": "agriculture",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/ERuecPJUW32LCaUkWtH42o6NHtUsdTr7CTgKIiaDaC0QcKSYgEExLwIHQltjiQDc_286x176.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760842662",
        "name": "Apparel - Clothing",
        "internalName": "clothing",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/TUKXrj4WeMznG1cS4fwb6RH4s7vm6tgiSInEb5TTBnazN1OlyfOti0huEERaxT2y_286x176.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760844710",
        "name": "Automobiles & Motorcycles",
        "internalName": "automobile",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/NjXpHAnWmen9fCZ1UUS4FlxZzkxJSpguKlY3tbm8agtf6sif3WyQU8jrjOg8TZOY_286x176.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760841638",
        "name": "Business Services",
        "internalName": "psc_3",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/ieSEBOCHsUl2X8NifAsPCWblaOlSFWupYyMybcCO5UtoO8lIuWYCIux1TXYwVwA7_286x176.png",
        "svgIcon": null
    },
    {
        "id": "8241755934760843686",
        "name": "Chemicals",
        "internalName": "psc_5",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/fXegXH0fQg1oPC24vWUUzBnDFUwwGnwWXgntnrKn7pE6gJziyouPJincHBkDFvIX_286x176.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934761505190",
        "name": "Community",
        "internalName": "community",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/fdoCpRMLEph9qFFVNVV8KwRno0ozZTzFZ2kd71tBrkoojFt1i3wYkqs8W7WJwAA1_286x176.png",
        "svgIcon": "people"
    },
    {
        "id": "8241755934760885670",
        "name": "Gift and Crafts",
        "internalName": "psc_12",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/Nn0f2ULJXnjhGl7g99xS2u9gSnPf5z2tTuwpeCQOUdj4wQysgf5m2G7HcPveOoFf_275x183.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934761485734",
        "name": "Goods",
        "internalName": "goods",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/eDzRtqBKJYfEyzrWN0NkyMvvDhtgXX5KkbMYwYPg2gO0TSYwYWpjoWp66Y0KqkrO_340x240.png",
        "svgIcon": "bag"
    },
    {
        "id": "8241755934760884646",
        "name": "Government & Public Sector",
        "internalName": "psc_13",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/QKtx7JJi2KJ1XQpGPOFUVj1sO3PuGAASLfg0uLTCO0xaf9UrQTFBUoBgcnkwMwhM_215x235.jpeg",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760879526",
        "name": "Hardware",
        "internalName": "psc_14",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/4110NA9W4p2LmGhxUqUNCDmSwOYXuX5HFkaetKFPAD6vcjaOJgDScQcz4we3Yrbz_275x183.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760878502",
        "name": "Home & Garden",
        "internalName": "psc_15",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/WUuZEjPGxY9yJdURWKt3QbxdIvD4elLtOGeYYgIkora8lkTrIboFpM12sup7cRS4_293x165.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934761493926",
        "name": "Housing",
        "internalName": "housing",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/N9OV3C6EEb8YIZZP6gROwej7iSCYAB3gKabtiG14TlLk2WD7puZHca8Z0fGvBEbO_340x240.png",
        "svgIcon": "building"
    },
    {
        "id": "8241755934760881574",
        "name": "Industrial Parts & Fabrication Services",
        "internalName": "psc_16",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/hy8OSjhcO49FPNetPP4gY1ZonsyIFrV9xA1tIzVqip2BXTqE8oLLPbF66JIG8uzC_259x183.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934761536934",
        "name": "Jobs",
        "internalName": "jobs",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/VsilpgtMynVCcDj74P3MTwSlTtfa7JeOWZRubELE9cW9WixziIOd5GlkAEoPtBm3_340x240.png",
        "svgIcon": "briefcase"
    },
    {
        "id": "8241755934761519526",
        "name": "Labor",
        "internalName": "labor",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/hgUIpxm5f9gk31OpjI7ZZUwJ3nVOm7Ds0XzLwdmB7984nE2thsBTgR0gnZl1lzWe_340x240.png",
        "svgIcon": "tools"
    },
    {
        "id": "8241755934760838566",
        "name": "Construction & Real Estate",
        "internalName": "psc_6",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/REPYkqIFKuO1WS5L5hRMyqJX5ogUzGln8jw9ItxBiFBIZYu16ZUAqckVw2nkN61N_275x183.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934761440678",
        "name": "Leisure",
        "internalName": "leisure",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/ibH97Ue1dZMHVe29KctMCoHHNk71hvuqMz8fHsK6rtdSRHS9xCWeGcODHDKr7GDG_340x240.png",
        "svgIcon": "emoji-smile"
    },
    {
        "id": "8241755934760837542",
        "name": "Electrical Equipment & Supplies",
        "internalName": "psc_7",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/0mfM4tm2OCvSMxS4SODrg2KIkMDv34purxCeg0kmoCniUftqYKnK26KkaJKhGRFb_275x183.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760880550",
        "name": "Lights & Lighting",
        "internalName": "psc_17",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/FJTyNtApUOau2juxEiPGIG4rUwpQ7PX1xv6D9rLSkDUmIvS2FZTkqQECtlqO9Jj4_275x183.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760891814",
        "name": "Luggage, Bags & Cases",
        "internalName": "psc_18",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/i5fWRaoxMgFsCw7EzC5A38JmKc8RTgwdizhWQgPRFqH56atd3quC7E3NHYFILUGs_399x400.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760890790",
        "name": "Machinery",
        "internalName": "psc_19",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/FrZrS6WQyiMDQpfUN20LvS6rBw4UXPMRukN7MYMHAYfWolh8CcBuPnYxBMWXSyzD_399x400.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760840614",
        "name": "Energy & Natural Resources",
        "internalName": "psc_8",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/2w0k4w54yIf7UEBkPNjO1VXQg0h10XYvVDfe6IuqMvL16wTGTN6Pk4ZRSfWm1awX_275x183.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760893862",
        "name": "Minerals & Metallurgy",
        "internalName": "psc_20",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/Nwv5KNUxz0AKhcwKklSdeN41NvveyIWyc4iSxyI9qaen8FNZkuDxRI327remdfnj_399x400.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760839590",
        "name": "Fashion Accessories",
        "internalName": "psc_9",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/I9V8FPC48MogFE2jsS7DFzMbxCoi7tqLJNjNOLn9m2SGxzli6RME47u9CbIFvV24_275x183.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760892838",
        "name": "Office & School Supplies",
        "internalName": "psc_21",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/TfjOCmmIk8fy4u9te08glJjnbPeH8G6k7z3G9rR9j0FFAU1DWZejNWEjFPyIYXad_399x400.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934761510310",
        "name": "Food",
        "internalName": "food",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/I2w6gl5q423Lbb7HhjlehX1REf5mf0jpommXgdMKW3W1QGKGm9uyXiZ9URk9lQJH_340x240.png",
        "svgIcon": "shop"
    },
    {
        "id": "8241755934760887718",
        "name": "Packaging & Printing",
        "internalName": "psc_22",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/83MTVzJy8fNJNNs911lX8KcsmZqcCbAGzeFbaYRTbE1YWdGoinAgVyXIbBao1ykq_399x400.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760886694",
        "name": "Rubber & Plastics",
        "internalName": "psc_23",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/oUyO4OhoclDeYJccwUGPdgjEFSGKKS2JmEeCQ03yRVpV7Il51yjXya4Hj6aTvuZt_399x400.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760889766",
        "name": "Service Equipment",
        "internalName": "psc_24",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/H4HWHdSZC3cMAgdJdErwiJ490eMxLAx34tOQFH1usYBaebEiEgwyU77mBVcOdUNi_399x400.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934761448870",
        "name": "Services",
        "internalName": "services",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/Zdvfjmmm20lzfH8ukkQbquqzMfQleG8RG8rbKpiliOwjDzUSB03CeGfF9DRHo1xV_340x240.png",
        "svgIcon": "clipboard-check"
    },
    {
        "id": "8241755934760888742",
        "name": "Shoes & Accessories",
        "internalName": "psc_25",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/hY6CjE8YlpsAYFEdze5OgtsOWBd32boPQTlpONp85pQFoj5UFwvocRI300Jb1vxv_399x400.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760867238",
        "name": "Sports & Entertainment",
        "internalName": "psc_26",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/oWJQzB6EqVEE4cUHP0XQ8BLfRqv5mHinXopJxkOeKfVeBWtIwFipGEfqhffvOWhh_399x400.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760866214",
        "name": "Telecommunication & Computing",
        "internalName": "psc_27",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/bBwUqJfG1ztmOfpmZzGLGyJIz2I7sblz9pRCphfLzXh0OCEFUIMPvYmeJcI2DDH6_399x400.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760869286",
        "name": "Textile & Leather Product",
        "internalName": "psc_28",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/m5g4wpwd2HDnQsOLGvSHbXbtNQM9fcNI93qeDYFDxZlVQosaGfGATbNLJZQ4jaqb_399x400.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760868262",
        "name": "Timepieces, Jewelry, Eyewear",
        "internalName": "psc_29",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/myGon4fQ92KFNy6sKfwwPv4Tdhth6EP39ChR4hIm0ynHuvLfXCNJvbdpkyROwXYp_399x400.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760883622",
        "name": "Food and Beverages",
        "internalName": "plc_10",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/yN1n8wTmHpBdDrfbCSzjrrcIt2oS8o0gNygr3Taj3eCvWaBnX8ZA570eZiJB9dKq_275x183.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760863142",
        "name": "Tools",
        "internalName": "psc_30",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/711GYuni4NQVxH5vby5iFdsUfQgv9WyvrVB5WFi2ZplSC2V4cWvmax6A8lt7hk3G_399x400.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760862118",
        "name": "Toys and Hobbies",
        "internalName": "psc_31",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/iJSxKzIoM5tLa91rRwomCJEjkZrhvSVxjsPpDZ8XOb5fCrZmMsvfs3gg7QS5xfdP_399x400.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760882598",
        "name": "Furniture",
        "internalName": "psc_11",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/wzjkiCmsyVOgbCY5DVaoohI8xahEx7bsJ9IbpZRLrq7K1UWb3Eq0K0tQweg3FyE2_276x184.png",
        "svgIcon": "cart4"
    },
    {
        "id": "8241755934760865190",
        "name": "Transportation",
        "internalName": "psc_32",
        "image": "https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/671OYJLUUhz5q6FUe0BERUOLp3M7tAblRMveXZoEjVZmbP0p71D3JBm3w7R6lvRk_399x400.png",
        "svgIcon": "cart4"
    }]);
      const [response, setResponse] = useState(null);
      const [responseError, setResponseError] = useState(null);
  
      //const [img , setImg]=useState("https://testbox.mobicash.rw/CoreBank/test_box/api/images/content/GSDFJbFJUbjq1BONPjIrwxjMCUya5ig6qmMgS4fVYov9djHX30sdir02qhj0NRMy_265x190.png");
      const fetchQuotes = async () => {
        try {
          const res = await axios.get("https://dev.mobivat.com/mobitax-vsdc/mobivat/api/mobicore/marketplace ", {
            headers: {
              'Authorization': 'Basic bW9iaXZhdDoxMjM0'
            },
            // params: { qrcodeString:qrcodeString[0]},
          });
          setResponse(res.data);
          setResponseError(res.data);
  
          const statusCode =responseError.responseCode;
          if(statusCode=="101")
           {
            console.log(responseError.codeDescription);
            <script>
            function myFunction() {
            alert(responseError.codeDescription)
             }
          </script>
           
           }
        } catch (err) {
          console.log(err);
        }
      };
      useEffect(() => {
        // Trigger the API Call
        fetchQuotes();
      }, []);
     console.log(response);
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
      elevation={0}
    >

{
    //`url(assets/images/m-2.jpg)`
data.map((category,index)=>{
   const imageURL="url("+category.image+")";
        console.log("Product Name:"+category.name);
return(
<Grid container spacing={1}>
        <Grid item xs={12} sm container>
        <div className='contentBox' key="1">         
          <div className='cardBox'>
            <div style={{backgroundImage:imageURL}} 
              className="imageStyle"/> 
            <div className='fontBox'>
            <h6 style={{fontSize:12}}><a href="#"><u>{category.name}</u></a></h6>
            <p className="text-aligner-1" style={{fontSize:10}}>{category.id}</p>
             
              <small className="text-medium-emphasis">{new Date().toLocaleString() + ""}</small>
            </div>
  
          </div>
          
       </div>
       
        
        </Grid>
      </Grid>
)
    })
}

      
    
      

     

     
    </Paper>
  );
}