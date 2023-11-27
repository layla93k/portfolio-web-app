import HText from "@/shared/HText"
import {motion} from "framer-motion"
import { SelectedPage } from "@/shared/types"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const CV = ({setSelectedPage}: Props) => {
  return (
    <section id="cv" className="w-full bg-gray-20 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.CV)}
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-5/6 mt-20">
            <HText>CURRICULUM VITAE</HText>
            <p className="py-5 text-xl mt-0">
             Details of my work experience and education can be found below.
            </p>
            <div className="justify-center items-center w-full"></div>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vRnOP6uXsaSUNofVWRT3tFWD4O8O65EzMVFpinLAUZA4JKpIvWhcQLIOi9iYzDgFEoxLBa0RDH0Ht8o/pub?embedded=true" height="600px" width="100%"></iframe>
            
          </div>
        </motion.div>
    
    </section>
  )
}

export default CV;