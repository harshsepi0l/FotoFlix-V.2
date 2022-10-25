import { Col, Row } from "antd";
import { CustomHeader } from "../../components/Common/CustomHeader";
import { TrendingImages } from "../../components/Common/TrendingImages";
import { TrendingTags } from "../../components/Common/TrendingTags";
import { AccountBar } from "../../components/HomePage/AccountBar";
import { AccountInfo } from "../../components/HomePage/AccountInfo";

export function SignUp(): JSX.Element {
  return(
    <div>
    <CustomHeader isLoggedIn={true} />
  <p> This is the sign up page :0</p>
  </div>
  )
}