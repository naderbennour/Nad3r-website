import {ReactLogo,
    SolidityLogo,
    PythonLogo,
    FlaskLogo,
    AWSLogo,
    csLogo,
    GoLogo,
    HerokuLogo,
    HTMLLogo,
    JAVALogo,
    CSSLogo,
    CLogo,
  } from "./allImg";
  import { ado,arbitrage,cryptodash } from "./allImg";
export const education = [
    {
        date:"Oct 2018 – present",
        diploma:"Bachelor of science in Computer Science",
        grade:"5",
        university:"Technical University of Munich",
        location:"Germany"
    },
    {
        date:"Oct 2017 – Sept 2018",
        diploma:"Bachelor of science in Electrical Engineering and Information Technology",
        grade:"5",
        university:"Technical University of Munich",
        location:"Germany"
    },
    {
        date:"Oct 2016 – Jun 2017",
        diploma:"DSH | Deutsche Sprachprüfung für den Hochschulzugang",
        grade:"5",
        university:"DID deutsch-Institut München",
        location:"Germany"
    }
]

export const skills = [
    {
        name:"Java",
        image:JAVALogo
    },
    {
        name:"Python",
        image:PythonLogo
    },
    {
        name:"C",
        image:CLogo
    },
    {
        name:"C#",
        image:csLogo
    },
    {
        name:"Solidity",
        image:SolidityLogo
    },
    {
        name:"Golang",
        image:GoLogo
    },
    {
        name:"React Js",
        image:ReactLogo
    },
    {
        name:"HTML",
        image:HTMLLogo
    },    
    {
        name:"CSS",
        image:CSSLogo
    },
    {
        name:"Flask",
        image:FlaskLogo
    },
    {
        name:"Heroku",
        image:HerokuLogo
    },
    {
        name:"AWS",
        image:AWSLogo
    },

]

export const Projects=[
    {
        name:"AcceleratorDAO",
        media :ado,
        description:"Goal is to create a safe haven, and transparent community for investors and founders. We want to help invest in projects with a clear path to decentralisation...",
        url:"https://github.com/naderbennour/AcceleratorDAO"
    },
    {
        name:" Arbitrage Bot",
        media :arbitrage,
        description:"A market-making bot that continuously quotes 2-sides in the ETF's order book, and hedges trades in the stocks themselves. Algorithmis is based on the idea of market-making...",
        url:"https://github.com/naderbennour/Arbitrage-Bot"
    },
    {
        name:"Crypto Bot Trading Dashboard",
        media :cryptodash,
        description:"This is a Flask webhook app for Binance and Bybit both Spot and Futures. It provides users with a graphical interface to view data from the trades Database...",
        url:"https://github.com/naderbennour/Crypto-Bot-Trading-Dashboard"
    }
]

export const researchData = [
    {
        paperNumber:"Paper 01",
        date :"Jun 13, 2020",
        title:"Membership Inference Attacks against Machine Learning",
        url:"https://tinyurl.com/MLPrivacyNB",
        event:"Data Privacy Technologies Seminar"
    },
    {
        paperNumber:"Paper 02",
        date :"Mar 15, 2023",
        title:"Early Identification of Security Issues in Decentralized Finance",
        url:"https://tinyurl.com/NaderBThesis",
        event:"Bachelor Thesis"
    }
]