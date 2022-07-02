import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Accordian.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Accordian = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <>
    <div className="contain">
        <h1>FITBOXX FAQ'S</h1>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
    sx={{
       
        // display:"none",
        border:"none ",
        borderBottom:"1px solid gray",
        boxShadow:"none",
        maxWidth:"88%",
        margin:"auto",

      }}
    >
      <AccordionSummary sx={{
    
    // display:"none",
    color:"gray",
    
boxShadow:"none",
}}
expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
          
        <Typography style={{

          fontFamily: 'Poppins',
          fontStyle:'normal',
          fontWeight:'400',
          fontSize:'20px',
          color:'#464343'
           
        
        }} variant="h5">What are the various mode of payment accepted here ?</Typography>
      </AccordionSummary >
      <AccordionDetails>
        <Typography>
        You can make payment Via Cash, Master Card, Visa Card, Debit Cards, Cheques, American Express Card, Credit Card.  </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
      sx={{
        
        // display:"none",
        border:"none ",
        borderBottom:"1px solid gray",
boxShadow:"none",
maxWidth:"88%",
margin:"auto",

      }}
    >
      <AccordionSummary sx={{
    color: "gray"
  }}
  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography style={{

fontFamily: 'Poppins',
fontStyle:'normal',
fontWeight:'400',
fontSize:'20px',
color:'#464343'
 

}} variant="h5">Which is the nearest landmark ?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        You can easily locate the establishment as it is in close proximity to Above Suvidha Store
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{
        
        // display:"none",
        border:"none",
        borderBottom:"1px solid gray",
        boxShadow:"none",
        maxWidth:"88%",
        margin:"auto",

      }}>
      <AccordionSummary sx={{
    color: "gray"
  }}
  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography style={{

fontFamily: 'Poppins',
fontStyle:'normal',
fontWeight:'400',
fontSize:'20px',
color:'#464343',
textAlign:'inherit'
 

}} variant="h5">What time do you open in the morning ?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
       The gym opens at 5AM from Monday-Saturday.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{
        
        // display:"none",
        border:"none ",
        borderBottom:"1px solid gray",
        boxShadow:"none",
        maxWidth:"88%",
        margin:"auto",

      }}>
      <AccordionSummary sx={{
    color: "gray"
  }}
  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{

fontFamily: 'Poppins',
fontStyle:'normal',
fontWeight:'400',
fontSize:'20px',
color:'#464343',
textAlign:'inherit'
 

}} variant="h5">whats is the fee criteria of Fitboxx gym?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        You can contact on 89823799712 for all the offers and pricing related to the gym.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{
       
        // display:"none",
        border:"none ",
        boxShadow:"none",
        borderBottom:"1px solid gray",
        maxWidth:"88%",
        margin:"auto",
        marginBottom:"20px",

      }}>
      <AccordionSummary sx={{
    color: "gray"
  }}
  expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{

fontFamily: 'Poppins',
fontStyle:'normal',
fontWeight:'400',
fontSize:'20px',
color:'#464343',
textAlign:'inherit'
 

}} align="right" variant="h5">What services are included in Fitboxx Gym ?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Muscle building ,Fat Loss , Metabolic , Crossfits , Aerobics , Zumba , Yoga 
        </Typography>
      </AccordionDetails>
    </Accordion>
    </div>
    </>
  )
}
export default Accordian
