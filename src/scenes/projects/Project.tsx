import githubIcon from "@/assets/githubicon.png"
import linkIcon from "@/assets/linkicon2.jpg";

type Props = {
    name: string;
    description?: string;
    image: string;
    github: string;
    link: string;
  };
  
  const Project = ({ name, description, image, github, link}: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex
    h-[380px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;
  
    return (
      <>
      
      <li className="relative mx-5 inline-block h-[380px] w-[450px]">
     
        <div className={overlayStyles}>
          <p className="text-3xl font-bold">{name}</p>
          <p className="mt-5 text-sm">{description}</p>
          <div className="flex flex-row space-x-4">
  {github.length > 0 ? (
    <a href={github}>
      <img className="h-10 mt-4" alt="github-link-img" src={githubIcon} />
    </a>
  ) : null}

  {link.length > 0 ? (
    <a href={link}>
      <img className="h-10 mt-4" alt="link-img" src={linkIcon} />
    </a>
  ) : null}
</div>
        </div>
        <img className="h-[260px] w-auto" alt={`${image}`} src={image} />
        
      </li>
     
      
      </>
      
    );
  };
  
  export default Project;