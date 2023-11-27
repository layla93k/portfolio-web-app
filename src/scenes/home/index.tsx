import useMediaQuery from "@/shared/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg"
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      
      <motion.div
        className="mx-auto w-5/6 items-center justify-start mt-20 md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
       
        <div className="z-10 mt-32 md:basis-3/5 ">
         
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
             <h1 className="text-7xl font-bold font-montserrat md:mt-40 ">Layla Kawafi</h1>
             <h2 className="text-5xl">Full Stack Software Engineer</h2>
        <div>
            <p className="mt-8 text-lg">
              I am an ambitious junior software engineer that is dedicated to creating smooth user experiences that meet specific needs and requirements. I have developed a strong foundation in both front-end and back-end technologies during my time on the Northcoders bootcamp and look forward to building on these foundations in my career. This web application was built using Typescript, React and Tailwind for the styling.
            </p>
            
            <img className="rounded-full h-[200px] justify-end" alt="photo-of-layla-kawafi" src={profilePhoto} />
            
            </div>
          </motion.div>

          </div>
</motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              {/* <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} /> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;