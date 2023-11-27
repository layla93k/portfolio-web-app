import {motion} from "framer-motion"
import { SelectedPage } from "@/shared/types"
import HText from "@/shared/HText"
import { EnvelopeOpenIcon } from "@heroicons/react/20/solid"
import LinkedInIcon from "@/assets/linkedinicon.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contact = ({setSelectedPage}: Props) => {
  return (
    <section id="contact" className="w-full bg-gray-20 py-8">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
          className="mx-auto w-5/6 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>CONTACT</HText>
            </div>
            <div className="mb-10 mt-8 flex-row">
            <EnvelopeOpenIcon className="h-6 w-6 mt-4"/>
            <p className="text-lg">layla.kawafi@hotmail.com</p>
            <a href="https://www.linkedin.com/in/layla-kawafi-9a46b7102/"><img className="h-10 mt-4 items-center" alt="linkedin-img" src={LinkedInIcon}/></a>
            </div>
            </motion.div>
            </section>
            
            )
            }

            export default Contact;