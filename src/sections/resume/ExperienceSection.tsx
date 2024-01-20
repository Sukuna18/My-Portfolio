import { ReactElement, useEffect } from "react";
import { Variants, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  title: string;
  company: string;
  logoFile: string;
  website: string;
  period: string;
  location: string;
  description: string;
}
const logoAnimation: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { delay: 0 } },
};
const titleAnimation: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
};
const companyAnimation: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.4 } },
};
const periodAnimation: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.6 } },
};
const locationAnimation: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.8 } },
};
const descriptionAnimation: Variants = {
  hidden: { opacity: 0, transform: "translateX(300px)" },
  visible: {
    opacity: 1,
    transform: "translateX(0px)",
    transition: { delay: 1.2 },
  },
};
const ExperienceSection = ({
  title,
  company,
  logoFile,
  website,
  period,
  location,
  description,
}: Props): ReactElement => {
  const logo = new URL(
    `../../assets/company-logos/${logoFile}`,
    import.meta.url
  ).href;
  const control = useAnimation();
  const [Ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      console.log("inView");

      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div
      ref={Ref}
      className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-8 px-8"
    >
      <motion.a
        animate={control}
        initial="hidden"
        variants={logoAnimation}
        href={website}
        target="_blank"
      >
        <img src={logo} alt={company} className="w-20 md:w-60" />
      </motion.a>
      <div className="text-center md:text-left md:w-full">
        <motion.h2
          animate={control}
          initial="hidden"
          variants={titleAnimation}
          className="dark:text-white font-semibold text-2xl"
        >
          {title}
        </motion.h2>
        <motion.p
          animate={control}
          initial="hidden"
          variants={companyAnimation}
          className="font-semibold text-blue-500 text-lg"
        >
          {company}
        </motion.p>
        <motion.p
          animate={control}
          initial="hidden"
          variants={periodAnimation}
          className="dark:text-white"
        >
          {period}
        </motion.p>
        <motion.p
          animate={control}
          initial="hidden"
          variants={locationAnimation}
          className="dark:text-white"
        >
          {location}
        </motion.p>
        <motion.p
          animate={control}
          initial="hidden"
          variants={descriptionAnimation}
          className="dark:text-white mt-6 text-left"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default ExperienceSection;
