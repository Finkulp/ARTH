import React from "react";

const AlgoshoppingTemplate = (props) => {
  const { Strategist, NSE, Category, Recommended_Duration } = props.Algos;

  const tdStyle = {
    thStyle: `w-1/6 min-w-[100px] border-l border-transparent py-2 px-2 text-base font-medium text-white lg:py-3 lg:px-2 text-black`,
    tdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-2 px-2 text-center text-sm font-medium`,
    tdButton: `inline-block px-4 py-1.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
  };

  return (
    <section className='bg-white dark:bg-dark py-10 lg:py-[80px]'>
      <div className='container' style={{ borderRadius: '10px' }}>
        <div className='flex flex-wrap -mx-2' >
          <div className='w-full ' style={{ borderRadius: '10px' }}>
            <div className='max-w-full overflow-x-auto'>
              <table className='w-full table-auto'>
                <thead className='text-center' style={{}}>
                  <tr>
                    <th className={tdStyle.thStyle} style={{ color: 'black' }}>
                      <div>Strategy</div>
                      <div>{(props.Algos.Strategist) ? props.Algos.Strategist : ""}</div>
                    </th>
                    <th className={tdStyle.thStyle} style={{ color: 'black' }}>
                      <div>NSE</div>
                      <div>{props.Algos.NSE}</div>
                    </th>
                    <th className={tdStyle.thStyle} style={{ color: 'black' }}>
                      <div>Category</div>
                      <div>{props.Algos.Category}</div>
                    </th>
                    <th className={tdStyle.thStyle} style={{ color: 'black' }}>
                      <div>Recommended Duration</div>
                      <div>{props.Algos.Recommended_Duration}</div>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlgoshoppingTemplate;
