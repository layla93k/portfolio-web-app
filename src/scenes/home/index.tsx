import useMediaQuery from "@/shared/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg"
import CSSLogo from "@/assets/csslogo.png"
import expoLogo from "@/assets/expo_icon_132404.png"
import htmlLogo from "@/assets/htmllogo.png"
import jestLogo from "@/assets/jestlogo.png"
import JSLogo from "@/assets/javascript-39395.png"
import nodeLogo from "@/assets/nodelogo.png"
import PSQLLogo from "@/assets/PSQLicon.png"
import reactLogo from "@/assets/reactlogo.png"
import tailwindLogo from "@/assets/tailwindlogo.png"
import TSLogo from "@/assets/Typescript_logo_2020.svg.png"


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 md:h-full md:mt-40">
      
      <motion.div
        className="mt-40 mx-auto w-5/6 items-center justify-start  md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
   
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex md:flex-row items-center">
          <div className="md:order-1 md:mr-8">
            <h1 className="text-7xl font-bold font-montserrat md:mt-40">Layla Kawafi</h1>
            <h2 className="text-5xl mt-6">Full Stack Software Engineer</h2>
            <div className=" flex items-stretch flex-wrap">
            <p className="mt-8 text-lg">
              I am an ambitious junior software engineer that is dedicated to creating smooth user experiences that meet specific needs and requirements. I have developed a strong foundation in both front-end and back-end technologies during my time on the Northcoders bootcamp and look forward to building on these foundations in my career. This web application was built using Typescript, React, and Tailwind for the styling, and has been hosted using AWS Amplify. I am extremely excited to use my newly found knowledge and skills to enable me to continue learning and exploring new technology and languages!
            </p>
            <div className="flex basis-3/5 justify-center
              md:ml-40 md:mt-4 md:justify-items-end ">
            <img className="rounded-full mb-10 drop-shadow-md" alt="photo-of-layla-kawafi" src={profilePhoto} height="250px" width="250px"/>
            </div>
            </div>
            </div>
        </div>
          </motion.div>
         
    {isAboveMediumScreens && (
        <div className="mt-20 z-30 h-[150px] w-full bg-primary-100 py-5 mb-20">
          <div className="mx-auto ml-4">
            <div className="flex w-3/5 items-center justify-between gap-8">
             <img height="90px" width="90px" alt="JS-img" src={JSLogo}/>
             <img height="90px" width="90px" alt="JS-img" src={TSLogo}/>
             <img height="90px" width="90px" alt="JS-img" src={CSSLogo}/>
             <img height="90px" width="90px" alt="JS-img" src={tailwindLogo}/>
             <img height="90px" width="90px" alt="JS-img" src={reactLogo}/>
             <img height="90px" width="90px" alt="JS-img" src={nodeLogo}/>
             <img height="90px" width="90px" alt="JS-img" src={PSQLLogo}/>
             <img height="90px" width="90px" alt="JS-img" src={jestLogo}/>
             <img height="90px" width="90px" alt="JS-img" src={htmlLogo}/>
             <img height="90px" width="90px" alt="JS-img" src={expoLogo}/>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;