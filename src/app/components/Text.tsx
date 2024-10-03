import localFont from "next/font/local";

const SpicyRice = localFont({
    src: "../fonts/SpicyRice.ttf",
    variable: "--font-spicy-rice-sans",
    weight: "100 900",
});
interface HeaderTitleProps {
    text?: string;
}
const HeaderTitle: React.FC<HeaderTitleProps> = ({text = ''}) => {
    return (
        <p className={`xl:text[30px] lg:text-[25px] md:text-[25px] sm:text-[20px] text-[20px] text-gray-300 leading-tight font-firasans`}>
            {text}
        </p>
    )
}
export default HeaderTitle;