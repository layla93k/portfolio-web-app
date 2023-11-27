import useMediaQuery from "@/shared/useMediaQuery";
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

const Footer = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <footer className="bg-primary-100 py-2">
        <div className="justify-content mx-auto w-5/6 md:flex">
        <div className="mt-16 basis-1/2 md:mt-10 mb-4">
            <p>
                Thank you for taking the time to look over my portfolio website. Should you have any questions or would like to discuss any of my projects further, please don't hesitate to contact me using the links or email above.
            </p>
            <p className="ml-100 mt-4">(C) Layla Kawafi</p>
            </div>
            {!isAboveMediumScreens && (
                 <div className="h-[150px] w-full bg-primary-100 py-5 mb-20 overflow-x-auto">
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
            )
            
        }
        </div>
    </footer>
    )
}

export default Footer