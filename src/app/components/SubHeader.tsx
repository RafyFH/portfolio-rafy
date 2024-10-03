import localFont from "next/font/local";
import Text from "@/app/components/Text";

interface SubHeaderProps {
    title?: string;
    className?: string;
}
const SubHeader: React.FC<SubHeaderProps> = ({title = '', className=''}) => {
    return (
        <h1 className={`xl:text[60px] lg:text-[35px] md:text-[35px] sm:text-[25px] text-[25px] text-blue-400 leading-tight font-silkscreen ${className}`}>{title}</h1>
    )
}
export default SubHeader;