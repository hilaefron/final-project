import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AttractionsRoundedIcon from '@mui/icons-material/AttractionsRounded';
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';
import FlightRoundedIcon from '@mui/icons-material/FlightRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import { useContext } from 'react';
import {HomePageContext} from './homePage'


const NavBar = () => {
  const {getUpdatedOrder} = useContext(HomePageContext);
  const navigate=useNavigate()
  const steps = ['','hotels','flights', 'restaurants', 'attractions', 'order' ];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});


  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step,label) => {
    setActiveStep(step);
    navigate(`/${label}`)

  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  

  return (
    <Box sx={{ width: '100%' }}>

      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={()=>handleStep(index,label)}>
              {
                label==''?<SearchIcon/>:
                label=='hotels'?<HotelRoundedIcon/>:
                label=='flights'?<FlightRoundedIcon/>:
               label=='restaurants'?<RestaurantRoundedIcon/>:
               label=='attractions'?<AttractionsRoundedIcon/>:
               <FolderSharedIcon onClick={getUpdatedOrder}/>
            }
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default NavBar;