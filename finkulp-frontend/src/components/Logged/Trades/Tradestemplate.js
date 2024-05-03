import React from "react";
import TradeTemplateDescription from './TradeTemplateDescription';
const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4`,
  TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
}
const Tradestemplate = (props) => {
  return (
    <section className='bg-white dark:bg-dark py-20 lg:py-[120px]' style={{marginTop:"-160px"}}>
      <div className='container'>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full '>
            <div className='max-w-full overflow-x-auto'>
              <table className='w-full table-auto'>
              <thead className='text-center bg-green hover:bg-blue-400'>
                  <tr>
                    <th className={TdStyle.ThStyle}> 
                    <div>Strategy</div>
                    <div>{props.strategy}</div>
                    </th>
                    <th className={TdStyle.ThStyle}> 
                    <div>Trade Type</div>
                    <div>{props.tradeType}</div>
                    </th>
                    <th className={TdStyle.ThStyle}> 
                    <div>Entry Price(INR)</div>
                    <div>{props.entryPrice}</div>
                    </th>
                    <th className={TdStyle.ThStyle}> 
                    <div>Exit Price(INR)</div>
                    <div>{props.exitPrice}</div>
                    </th>
                    <th className={TdStyle.ThStyle}> 
                    <div>Date and Time</div>
                    <div>{props.exitTime}</div>
                    </th>
                    <TradeTemplateDescription
                    strategy={props.strategy}
                    tradeType={props.tradeType}
                    entryPrice={props.entryPrice}
                    exitPrice={props.exitPrice}
                    exitTime={props.exitTime}
                    moneyEarnedLoss={props.moneyEarnedLoss}
                    profitLoss={props.profitLoss}
                    profitLossPercentage={props.profitLossPercentage}
                    moneyInvested={props.moneyInvested}
                    ></TradeTemplateDescription>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Tradestemplate;
