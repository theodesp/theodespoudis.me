import React from "react";
import Layout from "../components/App/layout";
import SEO from "../components/App/seo";
import Navbar from "../components/DemoFour/Navbar";
import MainBanner from "../components/DemoFour/MainBanner";
import CaseStudy from "../components/DemoFour/CaseStudy"
import AboutMe from "../components/DemoFour/AboutMe"
import Testimonials from "../components/DemoFour/Testimonials"
import BlogPost from "../components/DemoFour/BlogPost"
import ContactForm from "../components/DemoFour/ContactForm";
import Footer from "../components/DemoFour/Footer";
import Services from "../components/DemoFour/Services";
import Portfolio from "../components/DemoFour/Portfolio";

const IndexPage = () => (
    <Layout>
        <Navbar />
        <SEO title="Home page" />
        <MainBanner />
        <AboutMe />
        <Services />
        <Portfolio />
        {/*<Works />*/}
        {/*<CaseStudy />*/}
        {/*<Testimonials />*/}
        {/*<BlogPost />*/}
        <ContactForm />
        <Footer />
    </Layout>
)

export default IndexPage