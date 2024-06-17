import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FAQlogged from './FAQ';
const Pricing = () => {
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',width:'98%',border:'soild'}}>
    <section className="relative z-10  bg-white pb-12 pt-20 dark:bg-dark ">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] text-center">
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]" style={{paddingTop:"50px"}}>
                Our Pricing Plan
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
      <TableContainer component={Paper} style={{ maxWidth: '100%', marginBottom: '' ,boxShadow:"1px 1px 10px black"}}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead className='sticky top-0'>
            <TableRow>
              <TableCell style={{ fontWeight: '600' }}></TableCell>
              <TableCell align="right" style={{ fontWeight: '600' }}> 
               <PricingCard
              type="Free"
              buttonText="Subscribe"
              price={99}
            >
            </PricingCard></TableCell>
              <TableCell align="right" style={{ fontWeight: '600' }}>
              <PricingCard
              type="Beginner"
              buttonText="Subscribe"
              price={99}
            >
               </PricingCard>
              </TableCell>
              <TableCell align="right" style={{ fontWeight: '600' }}>
              <PricingCard
              type="Intermediate"
            buttonText="Subscribe"
            price={99}
            >
            </PricingCard>
              </TableCell>
              <TableCell align="right" style={{ fontWeight: '600' }}>
            <PricingCard
              type="Expert"
              price={99}
            buttonText="Subscribe">
            </PricingCard>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell >Access to Free courses</TableCell>
              <TableCell align="center" ><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
              <TableCell align="center"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
              <TableCell align="center"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
              <TableCell align="center"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Access to Free courses</TableCell>
              <TableCell align="center"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
              <TableCell align="center"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
              <TableCell align="center"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
              <TableCell align="center"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Access to Free courses</TableCell>
              <TableCell align="center"><i className="fa-solid fa-x" style={{ color: 'red' }}></i></TableCell>
              <TableCell align="center"><i className="fa-solid fa-x" style={{ color: 'red' }}></i></TableCell>
              <TableCell align="center"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
              <TableCell align="center"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Access to Free courses</TableCell>
              <TableCell align="center"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
              <TableCell align="center"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
              <TableCell align="center"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
              <TableCell align="center"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
            </TableRow>
            <TableRow>
            <TableCell></TableCell>
              <TableCell align="center"> <button className='border-blue-600 dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-blue dark:text-white hover:bg-blue-300 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
              Subscribe
            </button></TableCell>
            <TableCell align="center"> <button className='border-blue-600 dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-blue dark:text-white hover:bg-blue-300 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
              Subscribe
            </button></TableCell>
            <TableCell align="center"> <button className='border-blue-600 dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-blue dark:text-white hover:bg-blue-300 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
              Subscribe
            </button></TableCell>
            <TableCell align="center"> <button className='border-blue-600 dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-blue dark:text-white hover:bg-blue-300 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
              Subscribe
            </button></TableCell>
            </TableRow>
            {/* Additional rows go here */}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      <div style={{marginTop:'20px',boxShadow:'1px 1px 10px black'}}>
      <FAQlogged ></FAQlogged>
      </div>
    </section>
    </div>
    </>
  );
};

export default Pricing;

const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
}) => {
  return (
    <>
      <div className="w-full  " style={{width:"200px",height:"100px"}}>
        <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 " style={{width:"200px",height:"100px",textAlign:"left"}}>
          <span className="mb-3 block text-lg font-semibold text-primary" style={{marginTop:"-20px"}}>
            {type}
          </span>
          <h4 className="mb-5  font-bold text-dark dark:text-white" style={{fontSize:"25px"}}>
            {price}
            <span className="text-base font-medium text-body-color dark:text-dark-6">
              / {subscription}
            </span>
          </h4>
          <a
            href="/#"
            className={` ${
              active
                ? "block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                : "block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
            } `}
            style={{fontSize:'20px'}}
          >
            {buttonText}
          </a>
          <div>
            <span className="absolute right-0 top-7 z-[-1]">
              <svg
                width={77}
                height={172}
                viewBox="0 0 77 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1={86}
                    y1={0}
                    x2={86}
                    y2={172}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3056D3" stopOpacity="0.09" />
                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute right-4 top-4 z-[-1]">
              <svg
                width={41}
                height={89}
                viewBox="0 0 41 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="38.9138"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 38.9138 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 38.9138 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 38.9138 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 38.9138 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 38.9138 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 38.9138 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 38.9138 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="1.42021"
                  r="1.42021"
                  transform="rotate(180 38.9138 1.42021)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 26.4157 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 26.4157 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 26.4157 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 26.4157 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 26.4157 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 26.4157 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 26.4157 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 26.4157 1.4202)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 13.9177 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 13.9177 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 13.9177 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 13.9177 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 13.9177 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 13.9177 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 13.9177 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="1.42019"
                  r="1.42021"
                  transform="rotate(180 13.9177 1.42019)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 1.41963 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 1.41963 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 1.41963 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 1.41963 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 1.41963 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 1.41963 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 1.41963 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 1.41963 1.4202)"
                  fill="#3056D3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const List = ({ children }) => {
  return (
    <p className="text-base text-body-color dark:text-dark-6">{children}</p>
  );
};
