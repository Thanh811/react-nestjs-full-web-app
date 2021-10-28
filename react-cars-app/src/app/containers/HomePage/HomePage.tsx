import React from 'react'
import styled from "styled-components"
import tw from 'twin.macro'
import TopSection from './TopSection';
import NavBar from '../../components/navbar';
import BookCard from '../../components/bookCard';
import Marginer from '../../components/marginer';
import BookingStep from './BookingStep';
import AboutUs from './AboutUs';
import TopCars from './TopCars';
import Footer from '../../components/footer';
const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`
export default function HomePage() {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="8em" />
      <BookingStep />
      <Marginer direction="vertical" margin="7em" />
      <AboutUs />
      <Marginer direction="vertical" margin="7em" />
      <TopCars />
      <Marginer direction="vertical" margin="7em" />
      <Footer />
    </PageContainer>
  );
}
