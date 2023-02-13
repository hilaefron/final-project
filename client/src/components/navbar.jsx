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
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import { useContext } from 'react';
import {HomePageContext} from './homePage'


const NavBar = () => {
  const {getUpdatedOrder} = useContext(HomePageContext);

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

  const handleStep = (step) => () => {
    setActiveStep(step);
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
            <Link to={`/${label}`}><StepButton color="inherit" onClick={handleStep(index)}>
              {
                label==''?<SearchIcon/>:
                label=='hotels'?<HotelRoundedIcon/>:
                label=='flights'?<FlightRoundedIcon/>:
               label=='restaurants'?<RestaurantRoundedIcon/>:
               label=='attractions'?<AttractionsRoundedIcon/>:
               <FolderSharedIcon onClick={getUpdatedOrder}/>
            }
            </StepButton></Link>
          </Step>
        ))}
      </Stepper>
      {/* <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you're finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1} :{steps[activeStep]}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Link to={`/${steps[activeStep+1]}`}><Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button></Link>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish' 
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div> */}
    </Box>
  );
}

export default NavBar;