import React from 'react';
import TradingStrategyTemplate from './TradingStratgeyTemplate'
import Home from './Home';
const companyInfoArray = [
    {
        name: "ABC Corp",
        riskLevel: "Moderate",
        creator: "John",
        earningPotential: "High",
        benchmark: "NASDAQ-100 Index",
        recommendedDuration: "Long-term",
        overview: "ABC Corp is a leading technology company specializing in cloud computing solutions, artificial intelligence, and software development. With a strong focus on innovation, the company has established itself as a market leader, catering to businesses across various industries. ABC Corp's cloud infrastructure and scalable solutions have contributed to its consistent revenue growth and market expansion. Investors can expect steady performance and potential for long-term growth with this stock."
    },
    // Add more entries as needed
    {
        name: "XYZ Inc",
        riskLevel: "Moderate",
        creator: "Sarah",
        earningPotential: "Medium",
        benchmark: "S&P 500 Index",
        recommendedDuration: "Medium-term",
        overview: "XYZ Inc is a leading manufacturer of consumer electronics, known for innovative product designs and global distribution. The company is known for its high-quality consumer electronics and global brand recognition, maintaining a competitive edge in the electronics market through innovation and customer satisfaction. Investors seeking exposure to the consumer electronics sector with moderate risk and growth potential may consider XYZ Inc as a viable investment option."
    },
    {
        name: "XYZ Inc",
        riskLevel: "Moderate",
        creator: "Sarah",
        earningPotential: "Medium",
        benchmark: "S&P 500 Index",
        recommendedDuration: "Medium-term",
        overview: "XYZ Inc is a leading manufacturer of consumer electronics, known for innovative product designs and global distribution. The company is known for its high-quality consumer electronics and global brand recognition, maintaining a competitive edge in the electronics market through innovation and customer satisfaction. Investors seeking exposure to the consumer electronics sector with moderate risk and growth potential may consider XYZ Inc as a viable investment option."
    },
    {
        name: "XYZ Inc",
        riskLevel: "Moderate",
        creator: "Sarah",
        earningPotential: "Medium",
        benchmark: "S&P 500 Index",
        recommendedDuration: "Medium-term",
        overview: "XYZ Inc is a leading manufacturer of consumer electronics, known for innovative product designs and global distribution. The company is known for its high-quality consumer electronics and global brand recognition, maintaining a competitive edge in the electronics market through innovation and customer satisfaction. Investors seeking exposure to the consumer electronics sector with moderate risk and growth potential may consider XYZ Inc as a viable investment option."
    },
    {
        name: "XYZ Inc",
        riskLevel: "Moderate",
        creator: "Sarah",
        earningPotential: "Medium",
        benchmark: "S&P 500 Index",
        recommendedDuration: "Medium-term",
        overview: "XYZ Inc is a leading manufacturer of consumer electronics, known for innovative product designs and global distribution. The company is known for its high-quality consumer electronics and global brand recognition, maintaining a competitive edge in the electronics market through innovation and customer satisfaction. Investors seeking exposure to the consumer electronics sector with moderate risk and growth potential may consider XYZ Inc as a viable investment option."
    },
    {
        name: "XYZ Inc",
        riskLevel: "Moderate",
        creator: "Sarah",
        earningPotential: "Medium",
        benchmark: "S&P 500 Index",
        recommendedDuration: "Medium-term",
        overview: "XYZ Inc is a leading manufacturer of consumer electronics, known for innovative product designs and global distribution. The company is known for its high-quality consumer electronics and global brand recognition, maintaining a competitive edge in the electronics market through innovation and customer satisfaction. Investors seeking exposure to the consumer electronics sector with moderate risk and growth potential may consider XYZ Inc as a viable investment option."
    }
];

export default function TradingStrategy() {
    return (
        <>
         <Home name="Arun Rathaur"></Home>
        <div style={{alignItems:'center',fontWeight:"600",fontSize:"34px",textAlign:'center',padding:"20px"}}>Trading Strategy</div>
        <div style={{display:'flex',justifyContent:"center"}}>
        <div style={{display:"flex", gap:"50px",flexWrap:'wrap',width:"90%"}}>
            {companyInfoArray.map((companyInfo, index) => (
                <TradingStrategyTemplate
                    key={index}
                    name={companyInfo.name}
                    riskLevel={companyInfo.riskLevel}
                    overview={companyInfo.overview}
                    creator={companyInfo.creator}
                    earningPotential={companyInfo.earningPotential}
                    benchmark={companyInfo.benchmark}
                    recommendedDuration={companyInfo.recommendedDuration}
                />
            ))}
        </div>
        </div>
        </>
    );
}
