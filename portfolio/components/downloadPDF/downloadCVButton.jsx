import Image from "next/image";
import DownloadIcon from "@/assets/Images/Icons/download.png";

function DownloadCVButton() {
  return (
    <a
      href="/HarshGupta_Resume.pdf"
      download="HarshGupta_CV"
      className="flex items-center justify-center w-full gap-3 download_btn"
    >
      Download CV
      <Image
        src={DownloadIcon}
        height={30}
        width={30}
        alt="downloadIcon"
        className="w-5 h-5"
      />
    </a>
  );
}
export default DownloadCVButton;
