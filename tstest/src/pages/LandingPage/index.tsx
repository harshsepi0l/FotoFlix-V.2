import { CustomHeader } from "../../components/Common/CustomHeader";
import { RowImages } from "../../components/Common/RowImages";
import Footer from "../../components/Common/footer/Footer";
import "./index.css";
import { CustomFab } from "../../components/Common/CustomFab";
import { useMediaQuery } from "react-responsive";
import CustomCarousel from "../../components/Common/AboutUsPage/CustomCarousel";

const gutters: Record<string, number> = {};
const vgutters: Record<string, number> = {};
const colCounts: Record<string, number> = {};

[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  gutters[i] = value;
});
[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  vgutters[i] = value;
});
[2, 3, 4, 6, 8, 12].forEach((value, i) => {
  colCounts[i] = value;
});

export function LandingPage(): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width: 786px)",
  });
  return (
    <div className="LandingContainer">
      <CustomHeader isLoggedIn={true} />
      <RowImages />
      <Footer />
      <CustomFab />
    </div>
  );
}
