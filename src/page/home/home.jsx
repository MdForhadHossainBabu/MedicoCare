import { About } from "../about/about"
import { Service } from "../service/service"
import { Testimonial } from "../testomonial/testimonial"
import { Banner } from "./banner/banner"


export const Home = () => {
  return (
   <>
    <Banner />
    <Service />
      <About />
      <Testimonial/>
    </>
  )
}
