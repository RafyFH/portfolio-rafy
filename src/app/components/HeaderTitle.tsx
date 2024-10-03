import localFont from "next/font/local";
import Text from "@/app/components/Text";

const SpicyRice = localFont({
    src: "../fonts/SpicyRice.ttf",
    variable: "--font-spicy-rice-sans",
    weight: "100 900",
});

interface HeaderTitleProps {
    title?: string;
    subtitle?: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title = '', subtitle = '' }) => {
    return (
        <div className={`relative w-full h-[300px] xl:h-[450px] lg:h-[450px] md:h-[450px] sm:h-[400px] bg-custom-gradient-dark dark:bg-custom-gradient-dark`}>
            <div className={`flex items-center justify-center w-full h-full flex-col`}>
                <h1 className={`xl:text-[100px] lg:text-[80px] md:text-[80px] sm:text-[60px] text-[60px] text-white leading-tight font-silkscreen text-center`}>
                    {title}
                </h1>
                {subtitle && (
                    <Text text={subtitle}/>
                )}
            </div>
        </div>
    );
};

export default HeaderTitle;